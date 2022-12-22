<template>
  <el-menu  
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" 
      default-active="1-4-1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen" 
      @close="handleClose"
      :collapse="isCollapse"
  >
    <h3>{{isCollapse ? '后台' : '后台管理系统'}}</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <template slot="title">
        <i :class='`el-icon-${item.icon}`'></i>
        <span slot="title">{{ item.label }}</span>
      </template>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" index="1">
      <template slot="title">
        <i :class='`el-icon-${item.icon}`'></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <!-- <i :class='`el-icon-${subItem.icon}`'></i> -->
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      
      menuData: [
        {
          path: '/',
          name: "home",
          label: '首页',
          icon: 's-home',
          url: "Home/Home"
        },
        {
          path: '/mall',
          name: "mall",
          label: '商品管理',
          icon: 'video-play',
          url: "MallManage/MallManage"
        },
        {
          path: '/user',
          name: "user",
          label: '用户管理',
          icon: 'user',
          url: "UserManage/UserManage"
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: "/page1",
              name: "page1",
              label: '页面1',
              icon: 'setting',
              url: "Other/PageOne"
            },
            {
              path: "/page2",
              name: "page2",
              label: '页面3',
              icon: 'setting',
              url: "Other/PageTwo"
            },
          ]
        },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    //点击导航栏跳转
    clickMenu(item){
      // console.log(item);
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
        this.$router.push(item.path);
      }
      
    }
  },
  computed:{
    //没有子菜单
    noChildren(){
     return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren(){
      return this.menuData.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>

<style lang="less"  scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
  height: 100vh;
  h3{
    text-align: center;
    color: #fff;
    line-height: 48px;
  }
}
</style>

