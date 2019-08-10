import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      // 使用 beforeEnter, 一定要调用next(), 不然不会跳转
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 起到懒加载的作用, 页面优化
    // 写法不同, 注释实在打包时,起到标注作用, 以(about.[hash].js)打包
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: {
      food: 'banana'
    },
    // 路由元信息: 
    meta: {
      title: '关于'
    }
  },
  {
    // 一. 动态路由
    path: '/argu/:name', // name为动态路由参数
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    // 二. 嵌套路由
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      } 
    ]
  },
  {
    // 四. 命名视图: 
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }  
  },
  {
    // 五. 重定向
    path: '/main',
    redirect: '/'
    // 这个地方还可以是
    // 1. 一个对象 {name: home}
    // 2. 一个方法函数 to => { 
        // 判断逻辑,根据参数判断跳转页面
        // return 一个路径字符串 或者 对象
        // }
  },
  
    // 六. 别名
    // alias, 如home页面, url 访问home_page时,一样是home页面
  
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  // history模式,
  { 
    // 在最后匹配, 匹配不到静态资源: 
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
  
]