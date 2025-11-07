import { JSX, useEffect } from "react";
import useGetMe from "../../hooks/useGetMe";
import excludedRoutes from "../../hooks/excluded-routes";
import authenticatedVar from "../../constants/authenticated";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const { data: user } = useGetMe();
  useEffect(() => {
    if (user){
      authenticatedVar(true)
    }
  },[user])

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
