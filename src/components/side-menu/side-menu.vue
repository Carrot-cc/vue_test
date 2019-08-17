<template>
  <div class="side-menu-wrapper">
    <!-- logo -->
    <!-- 插槽 slot -->
    <slot></slot>
    <!-- 展开时:  -->
    <Menu width="auto" theme="dark">
      <!-- <menu-item></menu-item> -->
      <!-- 做递归组件: 深层遍历 v-for -->
      <template v-for="item in list">
        <re-submenu
          v-if="item.children" 
          :key="`menu_${item.name}`" 
          :name="item.name"
          :parent="item"
        >
          <!-- 层级不确定有多少级, 用递归组件, 不使用v-for -->
          <!-- <menu-item></menu-item> -->
        </re-submenu>         
        <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"/>
          {{ item.title }}
        </menu-item>
      </template>
    </Menu>
    <div></div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'

export default {
  name: 'SideMenu',
  components: {
    ReSubmenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      // 默认返回一个数组, 数组 &对象不能直接写,必须是个函数返回的
      default: () => []
    }
  },
  created () {
    console.log(this.list)
  }
}
</script>

<style lang="less">
  .side-menu-wrapper{
    width: 100%;
  }
</style>