<style lang="less" scoped>
    .personal-data{
        >.content{
            margin-top:15px;
            >ul{
                padding:0 10px;
                background: #fff;
                >li{
                    height: 50px;
                    padding:15px 20px 15px 10px;
                    >span{
                        font-size:16px;
                        margin-left:20px;
                        vertical-align: top;
                        color: #333333;
                    }
                    >a{
                        float: right;
                    }
                    /*>i{*/
                        /*&:nth-child(3){*/
                            /*float: right;*/
                        /*}*/
                    /*}*/
                    &:nth-child(3){
                        >span{
                            margin-left:15px;
                        }

                    }
                }
            }
        }
    }
</style>
<template>
    <div class="personal-data">
        <header-top>
            <span slot="header-title">个人资料</span>
        </header-top>

        <div class="content">
            <ul>
                <li>
                    <i class="iconfont">&#xe603;</i>
                    <span>{{personData.name}}</span>

                    <router-link :to="{name:'name'}">
                        <i class="iconfont">&#xe654;</i>
                    </router-link>
                </li>
                <li>
                    <i class="iconfont">&#xe602;</i>
                    <span v-if="personData.gender == 0">男性</span>
                    <span v-if="personData.gender == 1">女性</span>
                    <router-link :to="{name:'gender'}">
                        <i class="iconfont">&#xe654;</i>
                    </router-link>

                </li>
                <li>
                    <i class="iconfont">&#xe674;</i>
                    <span>{{personData.idnum}}</span>
                    <router-link :to="{name:'idnum'}">
                        <i class="iconfont">&#xe654;</i>
                    </router-link>
                </li>
                <li>
                    <i class="iconfont">&#xe64f;</i>
                    <span>{{personData.school}}</span>
                    <router-link :to="{name:'drivingschool'}">
                        <i class="iconfont">&#xe654;</i>
                    </router-link>
                </li>
                <li>
                    <i class="iconfont">&#xe604;</i>
                    <span>{{personData.type}}</span>
                    <router-link :to="{name:'cartype'}">
                        <i class="iconfont">&#xe654;</i>
                    </router-link>
                </li>
                <li>
                    <i class="iconfont">&#xe654;</i>
                    <span>{{personData.phone}}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import HeaderTop from './Header.vue'
    export default {
        data(){
            return {
                personData:{}
            }
        },
        computed: {
        },
        components:{HeaderTop},
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
                        this.personData = res.body[0]
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