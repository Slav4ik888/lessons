const http = require('http');

let requestCounts = 0;


const server = http.createServer((req, res) => {
  requestCounts++;

  switch (req.url) {
    case '/students':
      res.write('Students!');
      break;
    
    case '/':
    case '/courses':
      res.write('Courses!');
      break;
    
    default: res.write('404 not found');
  }

  res.write(` requestCounts: ${requestCounts}`);
  res.end();
});

server.listen(3003, () => console.log(`Listening on port 3003!`));
