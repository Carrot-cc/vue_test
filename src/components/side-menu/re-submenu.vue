<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <Icon :type="parent.icon"/>
      {{ parent.title }} 
    </template>
    
    <template v-for="item in parent.children">
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
  </Submenu>
</template>

<script>

export default {
  name: 'ReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({}) // 默认返回一个空对象
    }
  },
  /* methods: {
    handler: {
      call () {

      }
    }
  } */
  
}
</script>