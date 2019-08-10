<template>
  <div>
    <b>{{ food }}</b>
    <h1>456</h1>
    <button @click="handClick('back')">返回上一页</button>
    <button @click="handClick('push')">跳转到parent</button>
  </div>
  
</template>


<script>
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
    }
  },
}
</script>