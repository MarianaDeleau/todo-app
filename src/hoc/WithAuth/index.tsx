import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks";

const isAuthenticated = true;
const publicRoutes = ["/login", "/sign-up", "/"]

type withAuthenticationFn = (Component: FC) => FC;

const WithAuth: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { push, location } = useHistory();
    const { userSession } = useAuth();

    if (!userSession && !publicRoutes.includes(location.pathname)) {
      push("/");
    } else if (userSession && publicRoutes.includes(location.pathname)){
      push("/dashboard");
    }

    return isAuthenticated ? <Component /> : null;
  };

  return Authenticated;
};

export { WithAuth };