<template>
  <div class="tel">
    <p>{{ message }}</p>
    tel: 13939394949
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style lang="less" scoped>
.tel{
  border: 1px solid red;
}
</style>
