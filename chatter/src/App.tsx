import {
  Container,
  createTheme,
  CssBaseline,
  Snackbar,
  ThemeProvider,
  Grid,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes";
import client from "./constants/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import Guard from "./components/auth/Guard";
import Header from "./components/header/Header";
import Chatlist from "./components/chatlist/Chatlist";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header/>
        <Grid container>
          <Grid item md={3}>
            <Chatlist/>
          </Grid>
          <Grid item md={9}>
            <Container>
              <Guard>
                <RouterProvider router={router} />
              </Guard>
            </Container>
          </Grid>
        </Grid>
        <Snackbar/>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
