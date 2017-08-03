<style lang="less" scoped="">
    .name{

    }
</style>
<template>
    <div class="name">
        <header-top>
            <span slot="header-title">姓名</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>

        <common-backround>
            <i slot="icon-left" class="iconfont">&#xe603;</i>
            <input slot="text" type="text" v-model="name">
            <i slot="icon-right" class="iconfont" @click="clearMsg">&#xe606;</i>
        </common-backround>
    </div>

</template>
<script>
    import HeaderTop from '../Header.vue'
    import CommonBackround from './common.vue'
//    import { mapGetters } from 'vuex'
    export default {
        data(){
            return{
                name:""
            }
        },
        methods:{
//            X图标 清除内容
            clearMsg(){
                this.name = "";
            },
//            保存数据
            saveData(){

                this.$http({
                    //this指向vue实例
                    url:'http://localhost:3000/savepersondata',
                    //url请求地址
                    method:'POST',
                    //请求方法,这边采用GET,常用还有POST
                    params:{id:1,name:this.name},
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


            }
        },
        components:{
            HeaderTop,
            CommonBackround
        },
        computed:{
//            ...mapGetters([
//                'personData'
//            ])
        },
        created(){
//            这样做，v-model才不会直接更改store.state里面的值，我们要通过mutations或Actions来更改
//            this.name = this.personData.name
        },
        mounted(){
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
                        this.name = res.body[0].name
                        console.log(res.body[0])
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