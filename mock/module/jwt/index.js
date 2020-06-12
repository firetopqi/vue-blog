// 引入模块依赖
const jwt = require('jsonwebtoken');
// 创建 token 类
class Jwt {
  constructor(data) {
    this.data = data;

  }

  //生成token
  generateToken(user) {
    let res = ""
    if (!user) return
    try {
      let rule = { id: user.id, name: user.name, avatar: user.avatar, istatus: user.istatus, email: user.email }
      res = jwt.sign(rule, 'Bearer ', { expiresIn: 3600 }, {
        expiresIn: 60 * 60 * 1  // 1小时过期
      });
    } catch (e) {
      res = "err"
    }
    return res
  }

  // 校验token
  verifyToken() {
    let token = this.data;
    let res;
    try {
      let result = jwt.verify(token, { algorithms: ['RS256'] }) || {};
      let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
      if (current <= exp) {
        res = result.data || {};
      }
    } catch (e) {
      res = 'err';
    }
    return res;
  }
}
module.exports = Jwt