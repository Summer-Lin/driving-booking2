const express = require('express')
const router = express.Router()
// 引入数据库
const db = require('../db')
// 训练预约请求
router.get('/bookingtrain',function (req,res,next) {
    db.query('select b.*from booking b',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        let arr={}
        arr.examitem =result[0].examitem
        arr.examTime =result[0].examTime
        arr.placeExamItem =result[0].placeExamItem
        res.send(arr)

    })
})
// 查询本人资料，训练预约
router.get('/booking',function (req,res,next) {
    db.query('select b.*,t.item from booking b, booking_item t',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        let arr={}
        arr.examitem =result[0].examitem
        let temp = []
        result.forEach(function(value){
            temp.push({"item":value.item})
        })
        arr.test = temp
        res.send(arr)

    })
})
// 查询训练场地
router.get('/trainplace',function (req,res,next) {
    db.query('select b.*,t.placeExamItem from train_place b, train_placeitem t',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
       let arr = {}
       let temp = []
       arr.placeExamItem = result[0].placeExamItem
        result.forEach(function(value){
            temp.push({"item":value.item,"disabled":value.disabled})
        })
        arr.place = temp
        res.send(arr)
    })
})

// 保存训练预约
router.post('/savebookingtrain',function (req,res,next) {

    var date = DateToMilliscond(req.query.examTime)
    console.log(DateToMilliscond(req.query.examTime))

    db.query('update booking set examitem = ?,examTime = ?,placeExamItem = ? where id = ? ',[req.query.examitem,date,req.query.placeExamItem,req.query.id],(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        res.send(result)
    })
})
// 日期转换毫秒函数
function DateToMilliscond(date) {
    var yearIndex = date.indexOf("年")
    var monthIndex = date.indexOf("月")
    var dateIndex = date.indexOf("日")
    var hourIndex = date.indexOf("时")
    var minuteIndex = date.indexOf("分")
    console.log(yearIndex, monthIndex, dateIndex, hourIndex, minuteIndex)
    var year = date.slice(0, yearIndex)
    var month = date.slice(yearIndex + 1, monthIndex) - 1
    var date1 = date.slice(monthIndex + 1, dateIndex)
    var hour = date.slice(dateIndex + 1, hourIndex)
    var minute = date.slice(hourIndex + 1, minuteIndex)

    return new Date(year, month, date1, hour, minute).getTime() / 1000
}
module.exports = router