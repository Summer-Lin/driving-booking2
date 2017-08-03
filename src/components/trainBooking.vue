<style lang="less" scoped>
    .train-exam {
        .picker-selected{
            font-size:14px !important;
        }
        >ul{
            margin-top: 15px;
            >li{
                input{
                    border:0;
                    font-size: 16px;
                    /*margin-left:-50px;*/
                    text-align: center;
                    width:190px;
                }
                >  a{
                    padding-left:35px;
                    background-position: inherit;
                    margin: 0 10px;
                    .icons{
                        position: absolute;
                        left:10px;
                    }
                }
            }
        }

        >.mint-button--normal {
            width: 315px;
            height:44px;
            display: block;
            background: #4183FF;
            border-radius: 4px;
            margin:40px auto 0;
            font-size:16px;
            color: #ececec;
            font-size:16px;

        }
        >p {
            text-align: center;
            color:#333;
            margin-top:15px;
        }

    }
</style>
<template>
    <div class="train-exam">
        <header-top>
            <span slot="header-title">训练预约选项</span>
        </header-top>


        <modal-ele :items="test" :title="title" :style="{display:isShow}" @CloseModal="closeModal" @EnsureModal="ensureModal"></modal-ele>
        <ul>
            <li @click="closeModal()">
                <mt-cell title="训练科目" is-link >
                    <input type="text" :value="examitem">
                    <i class="iconfont icons">&#xe62e;</i>
                </mt-cell>
            </li>
            <li @click="openPicker">
                <mt-cell title="训练时间" is-link>
                    <input type="text" :value="examTime">
                    <i class="iconfont icons">&#xe603;</i>
                </mt-cell>
            </li>
            <li @click="showModal()">
                <mt-cell title="训练地点" is-link>
                    <input type="text" :value="placeExamItem">
                    <i class="iconfont icons">&#xe689;</i>
                </mt-cell>
            </li>
        </ul>
        <mt-button type="default" @click="saveData()">保存</mt-button>
        <p>排队结束后才可以进行新的预约</p>
        <!--Mint-UI日期插件-->
        <mt-datetime-picker
                ref="picker"
                type="datetime"
                :startDate = "startDate"
                :endDate = "endDate"
                @confirm="dateTime"  >
        </mt-datetime-picker>
        <!--自己写的弹窗插件  -->
        <modal-ele :items="place" :title="placeTitle" :style="{display:placeShow}" @CloseModal="placeCloseModal" @EnsureModal="placeEnsureModal"></modal-ele>

    </div>
</template>
<script>

    import HeaderTop from './Header.vue'
    import Modal from './Modal.vue';

    import data from '../model/mock'

    export default {

        created(){},
        data(){
            return {
//                训练科目弹窗赋值
                isShow:"none",
                examitem:'',
                test:[],
                title:"训练科目",

//                训练时间
                examTime:'',
                startDate:new Date(),
                endDate:new Date(new Date().getTime()+604800000),

//                训练场地弹窗赋值
                placeShow:"none",
                placeExamItem:'',
                place:[],
                placeTitle:"训练场地",


            }
        },
        methods:{
//            训练预约
            closeModal(value){

                this.isShow = value;
                //            训练科目
                this.$http({
                    //this指向vue实例
                    url:'http://localhost:3000/booking',
                    //url请求地址
                    method:'GET',
                }).then(
                    (res)=>{
                        //成功回调
                        if(res.status == 200){
                            this.examitem = res.body.examitem,                       this.test = res.body.test
                        }
                    }
                    ,(err)=>{
                        //失败回调
                        console.log(err)
                    }
                )
            },
            ensureModal(value,index){
                this.isShow = value;
                this.examitem = this.test[index].item;
            },

//            训练时间
            openPicker() {
                this.$refs.picker.open();
            },
            dateTime(value){
                this.examTime = new Date(value).getFullYear() + "年" + (new Date(value).getMonth()+ 1) + "月" + new Date(value).getDate() + "日" + new Date(value).getHours() + "时" + new Date(value).getMinutes() + "分"
            },
//            训练场地
            showModal(value){
                this.placeShow = "block";
                this.$http({
                    //this指向vue实例
                    url:'http://localhost:3000/trainplace',
                    //url请求地址
                    method:'GET',
                }).then(
                    (res)=>{
                        //成功回调
                        if(res.status == 200){
                            console.log(res.body)
                            this.placeExamItem = res.body.placeExamItem,
                            this.place = res.body.place
                        }
                    }
                    ,(err)=>{
                        //失败回调
                        console.log(err)
                    }
                )

            },
            placeCloseModal(value){
                this.placeShow = value;
            },
            placeEnsureModal(value,index){
                this.placeShow = value;
                console.log(index)
                console.log(value)
                this.placeExamItem = this.place[index].item;
            },
//            保存按钮
            saveData(){
                this.$http({
                    url: 'http://localhost:3000/savebookingtrain',
                    //url请求地址
                    method: 'POST',
                    //请求方法,这边采用GET,常用还有POST
                    params: {
                        id: 1,
                        examitem: this.examitem,
                        examTime: this.examTime,
                        placeExamItem: this.placeExamItem
                    },
                }).then(
                    (res) => {
                        //成功回调
                        if (res.status == 200) {
                            this.$router.push({path: '/'});
                        }
                    },
                    (err) => {
                        //失败回调
                        console.log(err)
                    }
                )
            }
        },
        components:{
            'modal-ele':Modal,
            HeaderTop
        },

        mounted(){
            this.$http({
                //this指向vue实例
                url:'http://localhost:3000/bookingtrain',
                method:'GET',
            }).then(
                (res)=>{
                    //成功回调
                    if(res.status == 200){
                        console.log(res.body)
                        this.examitem = res.body.examitem
                        if(res.body.examTime){

                            var milliscond = res.body.examTime * 1000
                            var year = new Date(milliscond).getFullYear()
                            var month = new Date(milliscond).getMonth() + 1
                            var date = new Date(milliscond).getDate()
                            var hour = new Date(milliscond).getHours()
                            var minute = new Date(milliscond).getMinutes()
                            this.examTime = year+"年"+month+"月"+date+"日"+hour+"时"+ minute+"分"
                        }else{
                            this.examTime = "选择时间"
                        }

                            this.placeExamItem = res.body.placeExamItem
                    }
                }
                ,(err)=>{
                    //失败回调
                    console.log(err)
                }
            )

        }
    }
</script>