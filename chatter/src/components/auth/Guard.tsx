import { JSX, useEffect } from "react";
import useGetMe from "../../hooks/useGetMe";
import excludedRoutes from "../../hooks/excluded-routes";
import authenticatedVar from "../../constants/authenticated";
import { snackVar } from "../../constants/snack";
import { UNKOWN_ERROR_SNACK_MESSAGE } from "../../constants/error";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user,error } = useGetMe();
  useEffect(() => {
    if (user) {
      authenticatedVar(true);
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      if ((error as any)?.networkError) {
        snackVar(UNKOWN_ERROR_SNACK_MESSAGE);
      }
    }
  }, [error]);

  console.log(user);
  return (
    <>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default Guard;
