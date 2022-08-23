const CHARACTERS = require('../characters');
const accessJwtToken = process.env.ACCESS_JWT_KEY;
const jwt = require('jsonwebtoken');
// const Boom = require('@hapi/boom');
const path = require('path');
const IMG = /\.(jpg|jpeg|gif|png)(\?v=\d+\.\d+\.\d+)?$/;


exports.routes = async (server) => {
  
  server.route({
    method: `GET`,
    path: `/`,
    handler: (req, h) => `<div>Hello, nah!</div>`
  });

  server.route({
    method: `GET`,
    path: `/assets/{path*}`,
    config: {
      handler: (req, h) => {
        if (IMG.test(req.path)) {
          return h.file(path.join(process.cwd(), req.path))
        }
      },
      auth: {
        strategy: `my_jwt_strategy`
      }
    }
  });

  server.route({
    method: `GET`,
    path: `/api/v1/characters`,
    config: {
      handler: (req, h) => {
        // const auth = req.headers.authorization;
        // if (!auth) return new Boom.Boom(`Not Auth`, { statusCode: 401 });

        // const token = auth.split(` `)[1];

        // jwt.verify(token, accessJwtToken, (err, user) => {
        //   if (err) return new Boom.Boom(`Not access, nah!`, { statusCode: 403 });
        //   console.log('user: ', user);
          
        //   return user
        // });

        const query = req.query;
        if (Object.keys(query).length) {
          console.log('### req.query: ', query);
          return CHARACTERS.find(item => item.name === query.name) || { result: `Invalid request ` }
        }
        return CHARACTERS;
      },
      auth: {
        strategy: `my_jwt_strategy`
      }
    }
  });

  server.route({
    method: `GET`,
    path: `/api/v1/params/{name}`,
    handler: (req, h) => {
      console.log('### req.params: ', req.params);
      return req.params?.name
    }
  });

  server.route({
    method: `POST`,
    path: `/api/v1/login`,
    handler: (req, h) => {
      const payload = req.payload;

      const jwtToken = jwt.sign({
        aud: 'urn:audience:test',
        iss: 'urn:issuer:test',
        sub: false,
        maxAgeSec: 14400, // 4 hours
        timeSkewSec: 15
      }, accessJwtToken);

      return jwtToken
    }
  });
}
