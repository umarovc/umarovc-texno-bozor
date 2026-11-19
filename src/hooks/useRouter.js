import { useCallback, useEffect, useState } from "react";

export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  LOGIN: "/login",
  REGISTER: "/register",
};

const VALID_PATHS = new Set(Object.values(ROUTES));

function getCurrentRoute() {
  const { pathname } = window.location;
  return VALID_PATHS.has(pathname) ? pathname : ROUTES.HOME;
}

export function useRouter() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getCurrentRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((targetRoute) => {
    const nextRoute = VALID_PATHS.has(targetRoute) ? targetRoute : ROUTES.HOME;

    if (window.location.pathname !== nextRoute) {
      window.history.pushState(null, "", nextRoute);
    }

    setRoute(nextRoute);
    window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}
