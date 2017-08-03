const express = require('express')
const router = express.Router()
const db = require('../db')
// 获取驾校
router.get('/getschool',function (req,res,next) {
    db.query('select * from school',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(result)

    })
})
module.exports = router