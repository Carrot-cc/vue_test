# demo1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



---

---





## vue项目

### vue-cli3.0创建项目

> - <u>vue-cli3.0与vue-cli2.0区别主要得益于webpack4的零配置特性</u>

#### 项目创建 | Vue UI可视化项目管理工具

> 1. 空文件夹进入命令行
> 2. `npm install @vue/cli -g`
> 3. `记得npm包, 如vue-router, vuex,等`
> 4. `vue create 项目名称`
>
> - <u>使用可视化项目管理工具vue ui 时, 先安装vue-cli3.0</u> 

#### 项目结构

> - public(公共文件)
>   - index.html(webpack运行,打包时作为模板生成最后的index.html)
> - ==src(主文件)==
>   - api(接口, ajax请求统一管理)
>   - assets(静态资源)
>     - img(图片)
>     - font(图标字体)
>   - config(项目配置)
>     - index.js
>   - components(组件, 代码复用)
>   - directive(自定义指令)
>   - lib 
>     - util.js 与业务耦合的函数
>     - tool.js 与业务无关的工具函数
>   - router(路由)
>     - index.js
>     - router.js
>   -  views(视图,页面基本写在里面)
>   - APP.vue(基础组件)
>   - main.js(项目入口文件)
> - vue.config.js(配置文件 | 自己添加)
> - package.json(项目描述 | 依赖)

#### 基本配置 | 跨域配置

> - `productionSourceMap: false,` // 打包时不生成.map文件, 减少打包体积, 加快打包速度
>
> - 跨域 | 代理
>
>   ```js
>   devServer: { // 跨域,代理
>       proxy: 'http://localhost:4000' // 没有匹配到静态文件的请求,代理到这个url, 
>     }
>   ```
>
> - <u>配置vue.config.js</u>

### 路由详解

> - index.js | 创建路由实例 + 路由守卫
> - router.js | 配置路由列表

#### router-link & router-view

> - `<router-link>`  链接标签, 封装`<a>` 标签
> - `<router-view/>` 视图渲染组件

#### 基本路由对象

> - `path:`  路径
> - `component:`  组件
>
> `一个基本的路由对象,至少要有这两个属性` 

#### 路由配置

> - 动态路由
>
>   - `:id` 
>   - `$route.params.id` // $route,当前路由对象
>
> - 嵌套路由
>
>   - `children` 属性
>
> - 命名路由
>
>   - `name` 属性
>
> - 命名视图
>
>   - 同一个页面显示多个视图, 每个视图显示在指定位置
>
> - 重定向
>
>   ```js
>   {
>      path: '/main',
>      redirect: '/'
>      // 这个地方还可以是
>      // 1. 一个对象 {name: home}
>      // 2. 一个方法函数 to => { 
>           // 判断逻辑,根据参数判断跳转页面
>           // return 一个路径字符串 或者 对象
>           // }
>   },
>   ```
>
> - 别名
>
>   ```js
>   // 别名
>   // alias属性, 如home页面, url 访问home_page时,一样是home页面
>   ```
>
> - 编程式导航
>
>   - **本质: 借用router实例**
>   - `this.$router.push(字符串 | 对象 | 命名的路由 | 带查询参数)` 
>   - <u>*注意: 如果提供了 `path`，`params` 会被忽略*</u> 

#### 路由组件传参

> <u>解耦, 组件更大程度的复用, props</u>
>
> - 布尔模式 | [argu.vue]
> - 对象模式 | [About.vue]
> - 函数模式 | [Home.vue]

#### HTML5History模式

> - <u>mode, 默认值, hash模式 # 后的路由变化</u>
> - <u>history模式, 当没有匹配到静态资源时,  后端匹配一个404</u>

#### 导航守卫

> - 全局前置守卫, 在跳转之前处理 `router.beforeEach((to, from, next)`
> - 全局后置钩子, 在跳转之后处理 `router.afterEach((to, from)`
> - 导航被确认之前 `router.beforeResolve`
> - 路由独享守卫 `beforeEnter: (to, from, next)`
> - 组件内守卫
>   1. 页面还未渲染, 要进入该页面 `beforeRouteEnter(to, from, next)`
>   2. 页面已经渲染, 要离开该页面 `beforeRouteLeave (to, from, next)` 
>   3. 组件路由发生变化, 组件被复用时调用 `beforeRouteUpdate(to, from, next)`
>
> `主要是在: index.js | router.js | Home.vue | argu.vue` 

#### 路由元信息

> - meta字段信息
>
> `主要是在: router.js | index.js | utils.js` 

#### 过渡动效

> - `transiton组件` 
>
> `主要是在App.vue` 

### 状态管理

#### Bus

> `主要是在: lib/bus.js` 

#### Vuex-基础-state&getter

> `主要是在:store.vue | state.js | getters.js | user.js  ` 

#### Vuex-基础-mutation&action/module

> - <u>当我们在组件中需要修改vuex中store中的数据时, 不能在组件中直接修改,</u> 
>   - ==commit 一个 mutation 来进行修改== 
>   - dispatch 一个 action , commit,  mutation 来进行修改
>
> `主要是在: store.vue | mutations.js | actions.js | state.js | api/app.js` 

#### Vuex-进阶

> - 插件
> - 严格模式
> - vuex + 双向绑定
>
> `主要是在: store/plugin | store/index.js | store.vue | mutations.js | state.js`

### ajax请求

#### 解决跨域问题

> - 后端设置`res.header(Access-Control-Allow-Origin, *)` 
> - 前端代理proxy
>
> `主要是在: Home.vue | vue.config.js` 

#### 封装axios

> `主要是在: axios.js | user.js | api/index.js | config/index.js | Home.vue` 

### Mock模拟ajax

#### 响应模拟

#### Mock语法

### vue 中的第三方js库使用

#### 组件封装基础

> - 数字动画: `CountUp.js` 

#### 组件中使用id值

> - `this._uid` 组件唯一id

#### 组件中获取DOM

> - `ref   this.$refs` 

` 主要是在:views/count-to.vue | components/count-to.vue | router.js ` 

### vue操作DOM

> `主要是在: views/split-pane.vue | components/split-pane.vue | router.js` 

#### 两列布局

#### 两个div改变宽度

#### 鼠标拖动效果

#### v-model & .sysc修饰符

### 递归组件

> - 待补充

#### 登录登出

> - 待补充

### 响应式布局

#### vue-cli3.0使用iview

#### 布局组件使用

> `主要是在: layout.vue | app.vue | router.js | main.js`  

#### 栅格组件实现响应式布局

> `主要是在: Home.vue` 













