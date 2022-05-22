console.log(`Request data...`);

// setTimeout(() => {
//   console.log(`Preparing data...`);

//   const backendData = {
//     server: `aws`,
//     port: 2000,
//     status: `working`
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log(`Data recived`, backendData);
//   }, 1000);

// }, 1000);

// const p = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log(`Preparing data...`);
    
//     const backendData = {
//       server : `aws`,
//       port   : 2000,
//       status : `working`
//     };
//     resolve(backendData)
//   }, 1000);
// });

// p.then(data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data)
//     }, 1000);
//   });
// })
//   .then(data => {
//     console.log(`Data recieved`, data);
//     data.added = false;
//     return data;
//   })
//   .then(data => {
//     console.log('data: ', data);
//   })
//   .catch(err => console.log(`Error:`, err))
//   .finally(data => {
//     console.log('Finally data: ', data);
  
//   });

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
};

// sleep(1000).then(() => console.log(`After 1 sec`));
// sleep(2000).then(() => console.log(`After 2 sec`));

Promise.all([sleep(2000), sleep(5000)])
  .then(() => {
    console.log(`End PromiseAll`);
  });

Promise.race([sleep(5000), sleep(2000)])
  .then(() => {
    console.log(`End PromiseRase`);
  });
