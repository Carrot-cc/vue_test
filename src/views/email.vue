<template>
  <div class="email">
    <button @click="handleClick">按我</button>
    email: 417727510@qq.com
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () {
    console.log(this.$bus);
    
  }
}
</script>

<style lang="less" scoped>
.email{
  border: 1px solid green;
}
</style>
