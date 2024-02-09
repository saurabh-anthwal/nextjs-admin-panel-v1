export const routes = [
  {
    id: 1,
    name: "/login",
    auth: false,
  },
  {
    id: 2,
    name: "/register",
    auth: false,
  },
  {
    id: 3,
    name: "/forgotPassword",
    auth: false,
  },
  {
    id: 4,
    name: "/",
    auth: true,
  },
  {
    id: 5,
    name: "/settings",
    auth: true,
  },
  {
    id: 6,
    name: "/users",
    auth: true,
  },
  {
    id: 5,
    name: "/create-proposel",
    auth: true,
  },
];

export const isAuthRoute = (route) => {
  const routeFound = routes.find((x) => x.name == route);
  if (routeFound?.auth) {
    return true;
  } else {
    return false;
  }
};

export const isActiveRoute = (route) => {
  const routeFound = routes.find((x) => x.name == route);
  if (routeFound) {
    return true;
  } else {
    return false;
  }
};


