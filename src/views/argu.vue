<template>
  <div>
    <!-- 动态路由 -->
    <!-- {{ $route.params.name }} -->

    <!-- 路由组件传参 -->
    {{ name }}
  </div>
</template>

<script>
export default {
  //
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  // 组件内守卫, 3. 组件路由发生变化, 组件被复用时调用
  beforeRouteUpdate(to, from, next) {
    console.log(to.name, from.name);
    
  }
}
</script>