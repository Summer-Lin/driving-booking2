const exress = require('express')
const router = exress.Router()
// 引入数据库
const db = require('../db')
// 获取个人资料
router.get('/getpersondata',function (req,res,next) {
    db.query('select * from persondata where id = ?',[req.query.id],(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        res.send(result)
    })
})
// 保存个人资料
router.post('/savepersondata',function (req,res,next) {
    // 修改姓名
    if(req.query.name){
        db.query('update persondata set name = ? where id = ?',[req.query.name,req.query.id],(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            res.send(result)
        })
    }
    // 修改性别
    if(req.query.gender){
        db.query('update persondata set gender = ? where id = ?',[req.query.gender,req.query.id],(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            res.send(result)
        })
    }
    // 修改身份证
    if(req.query.idnum){
        db.query('update persondata set idnum = ? where id = ?',[req.query.idnum,req.query.id],(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            res.send(result)
        })
    }
    // 修改驾校
    if(req.query.school){
        db.query('update persondata set school = ? where id = ?',[req.query.school,req.query.id],(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            res.send(result)
        })
    }

    // 修改驾照类型
    if(req.query.type){
        db.query('update persondata set type = ? where id = ?',[req.query.type,req.query.id],(err,result) =>{
            if(err){
                console.log(err)
                return
            }
            res.send(result)
        })
    }

})
module.exports = router