<template>
  <div>
    <!-- 封装 input 父子组件传值 -->
    <!-- <a-input v-model="inputValue"/> -->

    <!-- vuex 状态管理, 双向绑定  多处 inputValue 改成了 stateValue-->
    <!-- v-model 语法糖: 相当于直接赋值修改 -->
    <!-- v-model 给组件绑定一个 value 属性, 传入一个值, 同时绑定 一个 input 事件,进行监听 -->
    
    <!-- 方式一： 还原语法糖 + 在...mapState 中传入 -->
    <!-- <a-input :value="stateValue" @input="handleStateValueChange"/> -->
    <!-- 方式二： 还是使用 v-model + 在...mapState 外面传入 -->
    <a-input v-model="stateValue"/>


    <!-- getter 类似 计算属性 -->
    <p>{{ stateValue }} --- LastLetter is {{ inputValueLastLetter }}</p>

    <!-- 封装 show 兄弟组件传值-->
    <a-show :content="stateValue"/>

    <!-- Vuex-基础-state -->
    <p>根管理: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }} firstLetter is: {{ firstLetter }}</p>

    <!-- mutations 修改 appName -->
    <button @click="handleChangeAppName">修改appName</button>

    <!-- mutations 修改 appVersion -->
    {{ appVersion }}

    <!-- 修改模块中的 userName -->
    <button @click="changeUerName">修改用户名</button>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

// 方法二: es6解构赋值
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

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
      appVersion: state => state.appVersion,
      userName: state => state.user.userName,
      // stateValue: state => state.stateValue
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
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
      return this.stateValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleChangeAppName () {
      // this.appName = 'newAppName'
      // 会报错, 不能直接修改

      // 正确修改: 
      // this.$store.commit('SET_APP_NAME', 'newAppName')

      // 对象的书写方式: 
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })

      // 使用...mapMutations 时的写法: 
      // this.SET_APP_NAME('newAppName')

      // 使用...Actions 时的写法: 
      this.updateAppName()

      // appVersion: 
      this.$store.commit('SET_APP_VERSION')
    },
    // 模块中 修改 userName
    changeUerName () {
      this.SET_USER_NAME('carrot')

      // 除了使用mapActions, 还可以使用store上的方法来触发一个action: 
      // this.$store.dispatch('updateAppName', '123')

    },

    // 上面还原 v-model 语法糖， 绑定的input方法
    handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  }
}
</script>