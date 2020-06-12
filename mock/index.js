const express = require('express')
const bodyParser = require('body-parser');
// const { reject } = require('core-js/fn/promise');
const app = express()
const jwt = require('./module/jwt')
let token = ""
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('hello world')
})
app.post('/login', (req, res) => {
  new Promise((resolve, reject) => {
    //jwt
    const jwts = new jwt
    token = jwts.generateToken(req.body)
    // 根据用户名查询用户
    if (req.body.name == "admin") {
      resolve(req.body.name);
    } else {
      reject("未知错误");
    }
  }).then(() => {

    // 返回数据
    res.json({
      code: "0",
      message: "登录成功！",
      token,
      data: {
        // id: newRes[0].id,
        // userName: newRes[0].user_name
      }
    });
    res.end();
  })
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