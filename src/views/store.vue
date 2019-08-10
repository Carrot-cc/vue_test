<template>
  <div>
    <!-- 封装 input 父子组件传值 -->
    <a-input v-model="inputValue"/>

    <!-- getter 类似 计算属性 -->
    <p>{{ inputValue }} --- LastLetter is {{ inputValueLastLetter }}</p>

    <!-- 封装 show 兄弟组件传值-->
    <a-show :content="inputValue"/>

    <!-- Vuex-基础-state -->
    <p>根管理: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }} firstLetter is: {{ firstLetter }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

// 方法二: es6解构赋值
import { mapState, mapGetters } from 'vuex'

/* // 方法三: 命名空间
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('user') */

export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  // 计算属性
  computed: {
    /* // 方法一: 
    appName () {
      return this.$store.state.appName
    },
    userName () {
      return this.$store.state.user.userName
    } */

    // 方法二: mapState
    // 2.1 传入数组: 
    /* ...mapState([
      'appName'
    ]) */
    // 2.2 传入对象
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),

    // 方法三: 在模块中使用命名空间
    // 模块名称 user 在上面已经引入
    /* ...mapState({
      userName: state => state.userName
    }) */

    // getter 类似 计算属性 
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  },
}
</script>