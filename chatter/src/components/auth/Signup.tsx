import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import extractErrorMessage from '../../utils/error'
import useLogin from "../../hooks/useLogin";
import { UNKOWN_ERROR_MESSAGE } from "../../constants/error";

function Signup() {
  const [createUser] = useCreateUser();
  const [error,setError] = useState("");
  const {login} = useLogin()

  return (
    <Auth
      submitLabel="Signup"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
          variables: {
            createUserInput: {
              email,
              password
            },
          },
        });
        await login({email, password});
        setError("")
        } catch (err) {
          const errorMessage = extractErrorMessage(err)
          if (errorMessage) {
            setError(errorMessage)
            return;
          }
          setError(UNKOWN_ERROR_MESSAGE)
        }
      }}
    >
      <Link to={"/Login"} style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
}

export default Signup;
