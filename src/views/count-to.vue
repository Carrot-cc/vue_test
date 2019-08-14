<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
      <!-- ref用在封装的组件上，获取组件的实例 -->
      <!-- ref用在原生的html标签上，获取DOM -->
      <!-- vue自带的 插槽用法：  -->
      <span slot="left">总金额： </span>
      <span slot="right"> 人民币 </span>
    </count-to>
    <button @click="getNumber">获取数值</button>
    <button @click="up">更新值</button>
  </div>
</template>

<script>
// 引入组件： 
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  // 实例下注册组件： 
  components: {
    CountTo
  },
  data() {
    return {
      endVal: 100 // 默认最终值
    }
  },
  methods: {
    getNumber () {
      this.$refs.countTo.getCount()
    },
    // 更新值
    up () {
      this.endVal += Math.random() * 100
    },
    handleEnd (endVal) {
      console.log('end-> ', endVal)
      
    }
  }
}
</script>