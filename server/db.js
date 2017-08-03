// 引入数据库模块
const mysql = require('mysql')
// 创建连接
const pool = mysql.createPool({
    connectionLimit: 100,
    // 跟自己建的数据库host一样
    host: 'localhost',
    // 数据库用户名
    user: 'root',
    // 数据库密码
    password: 'root',
    // 数据库名字
    database: 'driving_school'
})

function query(sql, arr, callback) {
    pool.query.apply(pool, arguments)
}
//测试一下是否该数据库可用
// query('select* from persondata where id = 1', function (err, result) {
//     console.log(result)
//     console.log(err)
//     console.log(111)
// })

module.exports = {
    query
}