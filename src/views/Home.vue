<template>
  <div class="home">
    <!-- <b>{{ food }}</b>
    <h1>456</h1>
    <button @click="handClick('back')">返回上一页</button>
    <button @click="handClick('push')">跳转到parent</button>
    <button @click="getInfo">请求按钮</button> -->

    <!-- 栅格组件：  -->
    <Row>
      <i-col></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="8"></i-col>
      <i-col span="8"></i-col>
      <i-col span="8"></i-col>
    </Row>
    <Row :gutter="10">
      <i-col span="4" offset="1"></i-col>
      <i-col span="4"></i-col>
      <i-col span="4"></i-col>
    </Row>

    <!-- 响应式栅格： -->
    <Row :gutter="10" class="pink">
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
  
</template>


<script>
// 跨域： 
// import axios from 'axios'
// 封装后引入： 
import { getUserInfo } from '@/api/user'
import { log } from 'util';

export default {
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  // 组件内守卫, 1. 页面还未渲染, 要进入该页面
  beforeRouteEnter(to, from, next) {
    console.log(from.name)
    // 此处this不能使用, 要使用可以在next()里面vm实例使用
    next()
  },
  // 组件内守卫, 2. 页面已经渲染, 要离开该页面
  /* beforeRouteLeave (to, from, next) {
    const leave = confirm('您确认要离开吗?')
    if (leave) next()
    else next(false)
  }, */
  methods: {
    handClick(type) {
      // this.$router.go(-1)
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
    },
    // axios 获取用户信息的请求： 
    getInfo () {
      /* axios.post('http://localhost:3000/getUserInfo', { userId: 21 }).then(res => {
        // console.log(res)
        // 因为没有写后端，所以代理错误，这里会报错
        
      }) */
      
      // 封装后： 传入参数： userId: 21，
      getUserInfo({ userId: 21 }).then(res => {
        console.log('res: ', res);
        
      })
    }
  }
}
</script>

<style lang="less">
  .home{
    .ivu-col{
      height: 50px;
      margin-top: 10px;
      background-color: lightseagreen;
      // 内容区背景色： 
      background-clip: content-box;
    }
    .pink{
      .ivu-col{
        background-color: pink;
      }
    }
  }
</style>