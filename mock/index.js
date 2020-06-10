const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('hello world')
})
app.post('/login', (req, res) => {
  res.send('hey')
})
//处理请求跨域

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Headers", "content-type");
  next();
});
const server = app.listen(9999, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});