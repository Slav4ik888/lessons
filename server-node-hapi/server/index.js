const Hapi = require('@hapi/hapi');
require('dotenv').config();
const Jwt = require('@hapi/jwt');
const { jwtAuth } = require('./jwt-auth');
const Inert = require('@hapi/inert');
const { routes } = require('./routes');
const port = process.env.PORT;
const host = process.env.HOST;



exports.init = async () => {
  const server = Hapi.server({ port, host });

  await server.register(Jwt);
  await server.register(Inert);

  jwtAuth(server);
  routes(server);

  server.start();
  console.log('server running on: ', server.info.port);
  // console.log('server.info: ', server.info);
};
