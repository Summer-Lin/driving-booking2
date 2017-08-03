<style lang="less" scoped>
    .driving-school{

    }
</style>
<template>
    <div class="driving-school">
        <header-top>
            <span slot="header-title">驾校</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>
        <div @click="chooseSchool()">
            <common-backround >
                <i slot="icon-left" class="iconfont">&#xe64f;</i>
                <input slot="text" type="text" v-model="drivingSchool" readonly>
                <i slot="icon-right" class="iconfont" >&#xe621;</i>
            </common-backround>
        </div>



        <modal-ele :items="school" :title="schoolTitle" :style="{display:SchoolShow}" @CloseModal="SchoolCloseModal" @EnsureModal="SchoolEnsureModal"></modal-ele>

    </div>
</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
    import Modal from '../Modal.vue';
    export default {
        data(){
            return {
                drivingSchool:"",
                SchoolShow:'none',
                school:[],
                schoolTitle:"驾校",
            }
        },
        methods:{
            saveData(){
                this.$http({
                    //this指向vue实例
                    url:'http://localhost:3000/savepersondata',
                    //url请求地址
                    method:'POST',
                    //请求方法,这边采用GET,常用还有POST
                    params:{id:1,school:this.drivingSchool},
                }).then(
                    (res)=>{
                        //成功回调
                        if(res.status == 200){
                            console.log(res)
                            this.$router.push({name:'persondata'});
                        }
                    }
                    ,(err)=>{
                        //失败回调
                        console.log(err)
                    }
                )
            },
            chooseSchool(){
                this.SchoolShow = "block";
            },
            SchoolCloseModal(value){
                this.SchoolShow = value;
            },
            SchoolEnsureModal(value,index){
                this.SchoolShow = value;
                this.drivingSchool = this.school[index].item ;
            }
        },
        components:{
            HeaderTop,
            CommonBackround,
            'modal-ele':Modal,
        },
        computed:{

        },
        created(){

        },
        mounted(){
//            请求驾校数据
            this.$http({
                //this指向vue实例
                url:'http://localhost:3000/getschool',
                //url请求地址
                method:'GET',
                //请求方法,这边采用GET,常用还有POST
                params:{id:1},
            }).then(
                (res)=>{
                    //成功回调
                    if(res.status == 200){
                        this.school = res.body
                        console.log(this.school)
                    }
                }
                ,(err)=>{
                    //失败回调
                    console.log(err)
                }
            )
//            请求个人资料数据
            this.$http({
                //this指向vue实例
                url:'http://localhost:3000/getpersondata',
                //url请求地址
                method:'GET',
                //请求方法,这边采用GET,常用还有POST
                params:{id:1},
            }).then(
                (res)=>{
                    //成功回调
                    if(res.status == 200){
                        this.drivingSchool = res.body[0].school
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