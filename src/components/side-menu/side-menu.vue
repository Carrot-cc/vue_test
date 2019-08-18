<template>
  <div class="side-menu-wrapper">
    <!-- logo -->
    <!-- 插槽 slot -->
    <!-- <slot></slot> -->
    <!-- 展开时:  -->
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
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

    <!-- 收缩后的:  -->
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown 
          @on-select="handleSelect"
          v-if="item.children"
          :showTitle="false"
          icon-color="#fff"
          :key="`drop_${item.name}`"
          :parent="item"
        >
        </re-dropdown> 
        <Tooltip v-else transfor :content="item.title" placement="right" :key="`drop_${item.name}`">          
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'

export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
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
  methods: {
    handleSelect (name) {
      console.log(name)
      
    },
    handleClick (name) {
       console.log(name)
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
    // .ivu-tooltip 自带的行内块
    .ivu-tooltip, .drop-menu-span{
      display: block;
      width: 100%;
      text-align: center;
      /* color: #fff; */
      padding: 5px 0;
    }
    .drop-wrapper > .ivu-dropdown{
      display: block;
      margin: 0 auto;
      padding: 5px;
    }
  }
</style>