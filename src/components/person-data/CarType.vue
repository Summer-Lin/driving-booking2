<style lang="less" scoped>

</style>
<template>
    <div class="car-type">
        <header-top>
            <span slot="header-title">车架类型</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>

        <div @click="chooseSchool">
            <common-backround >
                <i slot="icon-left" class="iconfont">&#xe604;</i>
                <input slot="text" type="text" v-model="carType" readonly>
                <i slot="icon-right" class="iconfont" >&#xe621;</i>
            </common-backround>
        </div>


        <modal-ele :items="type" :title="carTypeTitle" :style="{display:CarShow}" @CloseModal="SchoolCloseModal" @EnsureModal="SchoolEnsureModal"></modal-ele>
    </div>
</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
    import Modal from '../Modal.vue';
//    import { mapGetters } from 'vuex'
    export default {
        data(){
            return {
                carType:"",

                CarShow:'none',
                type:[],
                carTypeTitle:"车架类型",
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
                    params:{id:1,type:this.carType},
                }).then(
                    (res)=>{
                        //成功回调
                        if(res.status == 200){
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
                console.log(this.CarShow)
                this.CarShow = "block";
                console.log(this.CarShow)
            },
            SchoolCloseModal(value){
                this.CarShow = value;
            },
            SchoolEnsureModal(value,index){
                this.CarShow = value;
                this.carType = this.type[index].item ;
            }
        },
        components:{
            HeaderTop,
            CommonBackround,
            'modal-ele':Modal,
        },
        computed:{
//            ...mapGetters([
//                'personData'
//            ])
        },
        created(){
//            this.carType = this.personData.type
        },
        mounted(){
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
                        this.carType = res.body[0].type
                    }
                }
                ,(err)=>{
                    //失败回调
                    console.log(err)
                }
            )

            //            请求驾照类型
            this.$http({
                //this指向vue实例
                url:'http://localhost:3000/gettype',
                //url请求地址
                method:'GET',
            }).then(
                (res)=>{
                    //成功回调
                    if(res.status == 200){
                        console.log(res.body)
                        this.type = res.body
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