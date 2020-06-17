<template>
  <div class="main">
    <div class="sidebar">
      <div class="logo">
        <span>SupreMe</span>
      </div>
      <at-menu active-name="1-1" inline-collapsed>
        <at-submenu v-for="item in routeMenu" :key="item.name">
          <template slot="title">
            <i class="icon" :class="item.icon"></i>
            {{item.name}}
          </template>
          <at-menu-item
            v-for="ikid in item.children"
            :key="ikid.name"
            :name="ikid.name"
            :to="ikid.path"
          >{{ikid.name}}</at-menu-item>
        </at-submenu>
      </at-menu>
    </div>
    <div class="content">
      <div class="top"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import router from "@/router/index";
export default {
  data() {
    return {
      routeMenu: [],
      routeParseChildren: [],
    };
  },
  created() {
    this.routeMenu = router.options.routes[1].children.splice(1);
  },
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .sidebar {
    width: 240px;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    .logo {
      width: 240px;
      height: 100px;
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;
      text-align: center;
      span {
        display: inline-block;
        margin-top: 27px;
        font-size: 28px;
        color: #333;
        cursor: pointer;
      }
    }
  }
}
.content {
  position: absolute;
  top: 0;
  display: inline-block;
  width: calc(100% - 240px);
  height: 100vh;
  .top {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #eee;
  }
}
.main ::v-deep .at-menu {
  height: 100%;
}
</style>