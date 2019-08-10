<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- 三. 命名路由 name属性对象 v-bind可简写 -->
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
    </div>

    <!-- 过渡效果 -->
    <transition-group :name="routerTransirion">
      <router-view key="default"/>
      <!-- 四. 命名视图: 同一个页面使用多个视图 -->
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransirion: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransirion = to.query.transitionName)
    }
  }
}
</script>

<style lang="less">
/* 页面过渡 */
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
