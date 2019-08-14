<template>
  <div class="layout-wrapper">
    <layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="md" v-model="collapsed"></Sider>
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
export default {
  data () {
    return {
      collapsed: false
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