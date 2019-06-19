const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

const APP_ROUTES = [
  {
    page: "index",
    pattern: "/",
    accessLevel: "guest"
  },
  {
    page: "today",
    pattern: "/today",
    accessLevel: "guest"
  }
];

APP_ROUTES.forEach(route => routes.add(route));

routes.APP_ROUTES = APP_ROUTES;
