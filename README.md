# 前言

[README in English](https://github.com/junephone/vue-taobao/blob/master/README-en.md)

刚开始学vue2.xxx(2.0以上更到2.5了吧好像)感觉vue有点难！主要是逻辑思维吧！要适应那种逻辑思维！光靠看文档api视频知乎百度还是不行的！
还不如抄起键盘来写项目来的实际！只有在实践中不断解决问题突破！！才感觉能学到很多！同时也有动力去学习不会枯燥！所以废话不多说就上网搜索了下各种资源
感觉淘宝不错！!还能研究下flexible(自适应伸缩布局)

这个小项目基于(vue2.XXX+vue-router+vuex+webpackr+axios+better-scroll)等完成的还有一些插件吧！具体自己去看

写完这个项目我学到了很多比如各种组件指令、计算属性、父与子传值、子与父传值、v-model的双向绑定、还有vue-router的路由守卫、嵌套路由等等有了一定的了解
还有感觉vuex就是管理数据的，对组件的的状态管理说白了就是对数据执行一些操作（过滤计算）！唯一不太懂的是Action。。


还有记得给我个star哦！(或者watch、fork我 后续我会出更多的项目的)谢谢^_^！
我的QQ672315226,Weacheat:672315226，欢迎各位来找我交流提出建议指出不足！谢谢！(半夜别来找我)
我有很多资源哦！各种框架项目的都有！你懂的哈哈！




# 技术栈
> [vue.js](https://cn.vuejs.org/) 构建用户界面的 MVVM 框架，核心思想是：数据驱动、组件系统。

> [vue-cli](https://www.npmjs.com/package/vue-cli) 是vue的脚手架工具，目录结构、本地调试、代码部署、热加载、单元测试。

> [vue-router](https://router.vuejs.org/zh-cn/) 是官方提供的路由器，使用vue.js构建单页面应用程序变得轻而易举。

> [vue-resource](https://www.npmjs.com/package/vue-resource) 请求数据，服务器通讯，官方推荐[axios](https://www.npmjs.com/package/axios)请求数据，本项目后期改用[axios](https://www.npmjs.com/package/axios)。

> [vuex](https://vuex.vuejs.org/zh-cn/) 是一个专为  vue.js 应用程序开发的状态管理模式，简单来说Vuex就是管理数据的。

主要是这几个吧!还有的swiper、Mint UI、等等这些自己上网百度吧一堆!




# 效果演示
:point_right: [在线预览](http://vuetaobao.top "在线预览")<br>
因为域名还没有备案好！所以在线预览就访问不了！还有路径太麻烦也不想用gh-pages了<br>
等我域名备案好就能在线访问啦!:blush:想看效果的话就下载到本地运行吧！<br>
建议在手机或谷歌、火狐、uc、op等浏览器F12用手机模拟器查看!<br>
用手机直接输入vuetaobao.top就可以查看<br>


# 目标功能
* home(首页)轮播图效果
* home(首页)商品实现链接跳转
* home(首页)倒计时功能
* home(首页)最下面的每个商品都有各自的商品详情页
* 商品详情页(goodDetail)的轮播图(可以点开的！)
* 商品详情页(goodDetail)的导航栏(head)文字实时跳转(点哪跳哪)
* 商品详情页的sku(点加入购物知道了),商品的加入购物车功能
* 商品详情页的评论(点更多评论或评论那一行知道了)
* 商品详情页的评论里的照片可以点击放大,评论分类,评论统计等
* 购物车加减数量删除商品，合计moeny功能全选商品等
* Localstorage本地存储数据


# 最终目标

打算写出整个完完整整的淘宝！后台还不会所以订单和支付那一块，物流那些就先不写了
后续有时间会慢慢的完善！我还年轻的很呢！ 敬请期待吧！



# 项目效果截图
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good1.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good2.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good3.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/home.jpg)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/express.png)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/shopcart.png)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/mytaobao.png)


## 如果喜欢该项目或觉得该项目对你学习vue有帮助的话！欢迎打赏O(∩_∩)O哈哈~
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/pays.png)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/weacheats.png)<br>


## 注意
router的history模式还玩不来所以就没写了。
项目还有些bug如果遇到404或者图片不显示请刷新或重新输入vuetaobao.top
欢迎各位踊跃提建议或者和我一起修改！代码有点乱别介意哈！^_^!



## 项目运行

``` bash
# 安装项目依赖
npm install

# 启动服务 浏览器本地访问http://localhost:8080
npm run dev

# 编译打包
npm run build






