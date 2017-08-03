<style lang="less" scoped>

</style>
<template>
    <div class="idnum">
        <header-top>
            <span slot="header-title">身份证号</span>
            <span slot="save-data" @click="saveData">保存</span>
        </header-top>
        <common-backround>
            <i slot="icon-left" class="iconfont">&#xe674;</i>
            <input slot="text" type="text" v-model="idnum">
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
                idnum:null
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
                    params:{id:1,idnum:this.idnum},
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
            clearMsg(){
                this.idnum = null;
            }
        },
        components:{
            HeaderTop,
            CommonBackround
        },
        computed:{

        },
        created(){
//            this.idnum = this.personData.idnum
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
                        this.idnum = res.body[0].idnum
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