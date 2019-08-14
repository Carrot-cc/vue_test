<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: leftOffsetPercent, paddingRight: `${this.triggerWidth / 2}px` }">
      <!-- <button @click="handleClick">修改宽度</button> -->
      <!-- 具名插槽 -->
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px` }"></div>
    <div class="pane pane-right" :style="{ left: leftOffsetPercent, paddingLeft: `${this.triggerWidth / 2}px` }">
      <slot name="right"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  // 封装组件的名字
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    // 限制拖动最大最小值： 
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      // leftOffset: 0.3, 初始偏移量，被使用的组件传入的 value属性取代 
      // 记录鼠标状态： 
      canMove: false,
      // 按下时，trigger 条上的初始偏移量： 
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      // es6 语法 `${}` 变量
      return `${ this.value * 100 }%`
    },
    triggerLeft () {
      // console.log(`calc(${ this.leftOffset * 100 }% - ${ this.triggerWidth / 2 }px)`)
      // 红色的trigger,被左右一半，右侧一半
      return `calc(${ this.value * 100 }% - ${ this.triggerWidth / 2 }px)`
    }
  },
  methods: {
    handleClick () {
      // this.leftOffset -= 0.02
    },
    // 鼠标按下事件： 
    handleMousedown () {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      // trigger 的初始偏移量： 自身内部的偏移
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    // 鼠标移动事件： 
    handleMousemove (event) {
      // 鼠标距离页面左侧距离： 鼠标距离 - 父容器距页面左侧距离
      // event.pageX

      // 获取容器dom，ref
      // getBoundingClientRect() 自带方法，返回一个对象
      // console.log(this.$refs.outer.getBoundingClientRect())
      // console.log(this.$refs.outer.getBoundingClientRect().left)
      
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left)
      
      // 偏移的像素： 
      // 用 outerRect 保存返回的 对象， 方便复用
      // 判断鼠标状态： 
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      // const offset = event.pageX - outerRect.left
      // 完善trigger的偏移： 
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width

      // 判断最大最小值： 
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.value = offsetPercent
      // 子组件要不能直接修改父组件的值， 要通过事件传入修改
      // 抛出事件： 
      // this.$emit('input', offsetPercent)

      // .sync抛出事件： 
      this.$emit('update:value', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less">
  .split-pane-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    .pane{
      position: absolute;
      top: 0;
      // float: left;
      height: 100%;
      // width: 50%;
      &-left{
        background-color: pink;
        // width: 30%;
      }
      &-right{
        right: 0;
        bottom: 0;
        // left: 30%;
        background-color: lightseagreen;
      }
      &-trigger-con{
        width: 8px;
        height: 100%;
        background: red;
        position: absolute;
        // left: ;
        top: 0;
        z-index: 99;
        // 避免拖拽时，选中元素
        user-select: none;
        cursor: col-resize;
      }
    }
  }
</style>