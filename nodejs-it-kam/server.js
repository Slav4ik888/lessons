const
  http = require('http');
  fs = require('fs');

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  })
}

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case '/home': {
      console.log('/home');
      try {
        const data = await readFile('src/pages/home.html');
        if (data) {
          res.write(data);
          res.end();
        }
      }
      catch (e) {
        res.write('Some error');
        res.end();
      }
      
      break;
    }
      
    case '/about': {
      console.log('/about');

      await delay(3000);
      res.write('About page...');
      res.end();

      break;
    }
      
    default: {
      console.log('404 not found');
      res.write('404 not found');
      res.end();
    }
  }
})

server.listen(8585, () => console.log(`Listening on port 8585!`));
