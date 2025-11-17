import {
  Container,
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
} from "@mui/material";
import { Grid } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import client from "./constants/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Chatlist from "./components/chatlist/Chatlist";
import { UsePath } from "./hooks/usePath";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  const { path } = UsePath();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Guard>
          {path === "/" ? (
            <Grid container>
              <Grid>
                <Chatlist />
              </Grid>
              <Grid>
                <Routes />
              </Grid>
            </Grid>
          ) : (
            <Routes />
          )}
        </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}
const Routes = () => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};
export default App;
