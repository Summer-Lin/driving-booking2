const bodyParser = require('body-parser')
// 引入express中间组件
const express = require('express')
// 引入自定义的数据库
const db = require('./db.js')
const app = express()
// 引入路由
const routes = require('./routes/index')

// 跨域解决方案
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");//预检请求使用
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");//预检请求使用
    next();
});

// app.use(express.static('./www'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// 路由
routes(app)

// 监听端口
app.listen(3000)