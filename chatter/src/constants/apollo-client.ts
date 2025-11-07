import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./urls";
import excludedRoutes from "../hooks/excluded-routes";
import { onLogout } from "../utils/logout";

// --- Error Handling ---
const logoutLink = onError(({ graphQLErrors, networkError }: any) => {
  if (
    graphQLErrors?.length &&
    (graphQLErrors[0].extensions?.originalError as any)?.statusCode === 401
  ) {
    if (!excludedRoutes.includes(window.location.pathname)) {
      onLogout()
    }
  }

  if (networkError) {
    console.error("[Network error]", networkError);
  }
});

// --- HTTP Link ---
const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
});

// --- Apollo Client Instance ---
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([logoutLink, httpLink]),
});

export default client;
