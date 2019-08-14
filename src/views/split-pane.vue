<template>
  <div class="split-pane-con">
    <!-- <split-pane :value="offset" @input="handleInput"></split-pane> -->
    
    <!-- v-model: 语法糖简写 -->
    <!-- <split-pane v-model="offset"></split-pane> -->

    <!-- .sync修饰符，双向绑定，抛出事件update -->
    <!-- .sync修饰符: 2件事： 绑定value， 更新value值事件 -->
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  // 注册组件： 
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.8
    }
  },
  methods: {
    /* handleInput (value) {
      this.offset = value
    } */
  }
}
</script>

<style lang="less">
  .split-pane-con{
    width: 400px;
    height: 200px;
    text-align: left;
    background-color: papayawhip;
  }
</style>