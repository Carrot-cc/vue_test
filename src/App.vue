<template>
  <div id="app">
    <!-- 使用iview响应式布局layout取代了Home页， 注释， 其他页面放开 注释 -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> | -->
      <!-- 三. 命名路由 name属性对象 v-bind可简写 -->
      <!-- <router-link v-bind:to="{ name: 'about' }">About</router-link>
    </div> -->

    <!-- 过渡效果 -->
    <!-- <transition-group :name="routerTransirion"> -->
      <router-view key="default"/>
      <!-- 四. 命名视图: 同一个页面使用多个视图 -->
      <router-view key="email" name="email"/>
      <router-view key="tel" name="tel"/>
    <!-- </transition-group> -->
    
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
html.body{
  height: 100%;
}
body{
  height: 2000px;
  margin: 0;
}
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
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  height: 100%;
}
</style>
