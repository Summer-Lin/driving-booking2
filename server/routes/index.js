// 引入各个路由
module.exports = function (app) {
    app.use(require('./personData'))
    app.use(require('./school'))
    app.use(require('./type'))
    app.use(require('./booking'))
}