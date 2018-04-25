# Preface

[README inChinese] (https://github.com/junephone/vue-taobao/blob/master/README.md)


Just started learning vue2.xxx (more than 2 to 2.5) as if Vue felt a little difficult. It's mainly logical thinking. To adapt to that logical thinking! It's not enough for Baidu to read API videos.
It's better to copy the keyboard to write the reality of the project. It is only in practice to solve problem breakthroughs!! I feel a lot to learn! At the same time, there is also motivation to learn not boring! So if we didn't talk much, we searched the Internet for all kinds of resources.
It feels like a good Taobao! You can also study flexible (adaptive expansion layout)



This project is based on (vue2.XXX+vue-router+vuex+webpackr+axios+better-scroll) and so on. There are still some plug-ins. Look at yourself.
I've learned a lot about this project, such as various component instructions, computing attributes, parent and Subtransmission values, child and parent values, V-model bi-directional binding, vue-router routing guard, nested routing, and so on.

There is also the feeling that vuex is the management of data, and the state management of components is the operation of data (filtering calculation). The only thing you don't understand is Action.



By the way, I am a little P child (how little I do not want to tell you! )! It's going to be an internship soon. The front end of the company asked me to accept my student dog's ability to admit his own learning, which is not bad.



And remember to give me a star! (or watch, fork, I will do more projects later) thank you!

My QQ672315226, Weacheat:672315226, welcome you to come to me to exchange suggestions and points out deficiencies. Thank you Don't come to me at midnight.

I have a lot of resources. All kinds of frame projects are! You know what you know!




# Technical stack

> [vue.js] (https://cn.vuejs.org/) constructs the MVVM framework of user interface. The core idea is data driven and component system.

> [vue-cli] (https://www.npmjs.com/package/vue-cli) is a scaffolding tool for Vue, directory structure, local debugging, code deployment, hot loading, unit testing.

> [vue-router] (https://router.vuejs.org/zh-cn/) is an official router, and it is easy to build single page application using vue.js.

> [vue-resource] (https://www.npmjs.com/package/vue-resource) requests data, server communication, and the official recommendation [axios] (https://www.npmjs.com/package/axios) requests data, later the project is converted to [axios] (https://www.npmjs.com/package/axios).

> [vuex] (https://vuex.vuejs.org/zh-cn/) is a state management mode developed specifically for vue.js application programs. In simple terms, Vuex is the management of data.



These are the main ones! There are also swiper, Mint UI and so on. These are a bunch of Baidu!






# Demonstration effect demonstration

Point_right: (online preview) (http://vuetaobao.top "online preview") <br>

It is recommended to use mobile phone simulator in mobile phone or Google, Firefox, UC, OP and other browser F12! <br>

You can view <br> directly by typing vuetaobao.top directly with your cell phone.




# Target function

* effect of home (home page) map

* home (home page) product link jump

* home (home page) countdown function

* home (front page) the bottom of each commodity has its own product details page.

* the carousel of the details page (goodDetail) of the commodity (which can be opened! )

* the navigation bar (head) of the product details page (goodDetail) text jumps in real time (where to jump).

* SKU for merchandise details page (click Add shopping), add shopping cart function.

* comment on the product details page.

* the photos in the comment page of the product details can be enlarged by click, comments, classification, comments, statistics, etc.

* the number of shopping cart addition and subtraction to remove goods, total moeny function, all selected products, etc.

* Localstorage local storage data




# Ultimate goal



I'm going to write the whole whole Taobao! The backstage will not order and pay that piece, the logistics will not be written first.

The following time will be slowly improved! I'm still young! Please look forward to it.





# Project effect screenshot

![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good1.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good2.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/good3.gif)<br>
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/home.png)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/express.png)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/shopcart.png)
![](https://github.com/junephone/vue-taobao/blob/master/src/assets/zs/mytaobao.png)




## Operation of the project



` ` ` ` ` ` ` bash '

Install project dependency

NPM install



Start service browser to local access http://localhost:8080

NPM run dev



Compiling and packing

NPM run build
