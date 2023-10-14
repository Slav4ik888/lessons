function pos (x: string | number) {
  if (typeof x === `number`) return x.toFixed()

  return x.trim();
}

//  ==============================

class MyResponse {
  header = `response header`
  result = `response result`
}

class MyError {
  header = `error header`
  message = `error message`
}


function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) return { info: res.header + res.result }
  return { info: res.header + res.message }
}

//  ==============================

type AlertType = `success` | `warning` | `danger`;

function setAlertType(type: AlertType) {
  //....
}
setAlertType(`success`);