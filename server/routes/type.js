const express = require('express')
const router = express.Router()
const db = require('../db')
// 获取驾照类型
router.get('/gettype',function (req,res,next) {
    db.query('select * from cartype',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(result)

    })
})
module.exports = router