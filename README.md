### 项目技术
    vue + MintUI + express + VueRouter + VueResource + mysql(navicat) 入门项目

### 同上个项目对比
    增加了express中间件，连接数据库，本地地址请求数据,删除了vuex和mock.js
### 动态图
![image](https://github.com/Summer-Lin/driving-booking2/blob/master/images/driving.gif)
![image](https://github.com/Summer-Lin/driving-booking2/blob/master/images/sql.gif)

### 项目结构
- express-mysql
    - sql 数据库文件，导入你的数据库 
    - images    //忽略
    - server    //express搭建的服务器+ 连接mysql数据库
        - routes//路由
            - booking.js//训练预约数据库请求
            - index.js//服务器配置路由
            - personData.js//个人资料数据库请求
            - school.js//驾校数据库请求
            - type.js//驾照类型数据库请求
        - db.js//数据库连接mysql
        - package.json//express服务器需要的模块信息
        - server.js//express服务器文件
    - src       //vue项目
    - .babelrc  //忽略
    - package.json //需要的模块信息
    - webpack.config.json//webpack配置信息
    
### 运用到请求数据库的部分（其他没有用到）
- 首页的“训练预约选项”
- 首页的“本人预约”中的 “训练预约”
- 首页的“本人资料”

### 项目注意事项

```
前提：

1、本机安装有mysql 和 navicat（navicat是mysql的图形界面）

2、导入sql文件夹的driving_school.sql，到navicat

3、安装webpack-dev-server 模块（npm install webpack-dev-server -g //全局安装）

```


### 启动项目

```

npm install     //在express-mysql文件夹下面，安装vue项目

npm install     //在server文件夹下面，安装express服务器

node server.js  //在server文件夹下面,启动服务器

webpack-dev-server --hot --open //在express-mysql文件夹下面，启动vue项目


```


