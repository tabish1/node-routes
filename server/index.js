const express = require('express')
const routesHandler = require('./routes');
const authenticateRouteMiddleware = require('./routeAuthenticationMiddleware');

const app = require("./app");
// const handler = require('./next-routes').getRequestHandler(app);
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(authenticateRouteMiddleware);
  server.use('/', routesHandler);
  server.use(handler);

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});