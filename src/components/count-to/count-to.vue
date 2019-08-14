<template>
  <div>
    <!-- vue自带的插槽 solt 用法： 添加自定义文字 -->
    <slot name="left"></slot><span ref="number" :class="counClass" :id="eleId"></span><slot name="right"></slot>
    <!-- 多次复用，要确保id值 不同，  -->
  </div>
</template>

<script>
// 引入第三方js： npm安装
import CountUp from 'countup'
// 引入less文件： 方法一： 
import './count-to.less'
export default {
  name: 'CountTo',
  computed: {
    // 计算属性： 绑定计算属性用v-bind， 简写 ：
    eleId () {
      // 确保每个组件id不同， 每个vue实例， this都有个_uid， 全局自增，不同 
      return `count_up_$(this._uid)`
    },
    counClass () {
      return [
        'count-to-number',// 默认样式
        this.className // 使用组件时， 传入的类名
      ]
    }
  },
  data () {
    // 储存便于以后使用， 不是一次性的
    return {
      // counter初始是个空对象
      counter: {}
    }
  },
  props: {
    /**
     * 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * 最终值， true表示必须要传， 不然会报错
     */
    endVal: {
      type: Number,
      require: true 
    },
    /**
     * 小数点起保留几位小数， 默认为0
     */
    decimals: {
      type: Number,
      default: 0
    },
    // 自定义配置： 延迟开始， 单位毫秒
    /**
     * 动画延迟
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * 渐变时长， 默认为1
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * 是否使用分组效果： 4,820  三个值一组
     */
    useGrouping:{
      type: Boolean,
      default: true
    },
    /**
     * 分组用什么隔开： 4,820  逗号隔开
     */
    separator:{
      type: String,
      default: ','
    },
    /**
     * 整数和小数分隔符号： 3.6  小数点隔开
     */
    decimal:{
      type: String,
      default: '.'
    },
    // 自定义类名， 使用组件时传入
    className: {
      type: String,
      default: ''
    }
  },

  // 自定义： 组件内部方法， 供外界使用： 
  methods: {
    getCount () { // 获取span的动态数值
    // 父组件调用子组件内部方法的方法： 
      console.log(this.$refs.number.innerText)
      return this.$refs.number.innerText
    },
    // 封装方法：
    emitEndEvent () {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('on-animation-end', this.getCount())
        })   
      }, this.duration * 1000 + 5)
    }
  },

  // 监听 endVal 的变化，更新值
  watch: { // 监听器
    endVal(newVal, oldVal) {
      this.counter.update(newVal)
      // 动画结束之后触发事件： 
      /* setTimeout(() => {
        this.$emit('on-animation-end', this.getCount())
      }, this.duration * 1000) */
      // 多次使用，封装，调用
      this.emitEndEvent()
    }
  },
  mounted () {
    // 所有元素渲染完成之后： 调用
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      // 自定义延迟动画方法： 
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}

/**
 * 1. 给组件传入属性 props
 * 2. 在组件中使用id值， this._uid 组件唯一
 * 3. ref, this.$refs
 * 4. slot 插槽使用
 */
</script>

<style lang="less">
/* 引入less 方法二：  */
/* .count-to-number{
  color: lightseagreen;
} */


/* 引入less 方法三：  */
/* @import './count-to.less' */
</style>