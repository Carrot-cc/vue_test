<template>
  <div class="layout-wrapper">
    <layout class="layout-outer">
      <Sider :width="300" collapsible hide-trigger breakpoint="md" v-model="collapsed">
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"/>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </layout>
    </layout>
  </div>
</template>

<script>
// 引入 SideMenu 组件
import SideMenu from '_c/side-menu'
export default {
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: true,
      menuList: [
        {
          title: '1',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '2',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '3',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '1-111',
              name: 'menu11',
              icon: 'ios-alarm'
            },
            {
              title: '1-222',
              name: 'menu12',
              icon: 'ios-alarm',
              children: [
                {
                  title: '1-222-111',
                  name: 'menu121',
                  icon: 'ios-alarm',
                },
                {
                  title: '1-222-222',
                  name: 'menu122',
                  icon: 'ios-alarm',
                }
              ]
            }
          ]
        }
      ]
    }  
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}

</script>

<style lang="less">
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background-color: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 24px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .content-con{
    padding: 10px;
    .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
  }
  
}

</style>