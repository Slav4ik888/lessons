const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 3002
  });

  server.route({
    method: `GET`,
    path: `/`,
    handler: (req, h) => {
      
      console.log(`HANDLER NAH...`);
      console.log('query: ', h.request.query);
      const { name } = h.request.query;
      return `<h1>Hello ${name} from server!</h1>`;
    }
  })
  server.start();
  console.log('server running on: ', server.info.uri);
  console.log('server.info: ', server.info);
};

init();
console.log(`Hello server!`);

