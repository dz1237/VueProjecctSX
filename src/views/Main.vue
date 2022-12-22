<template>
  <div>
    <!-- <h3>我是Main</h3> -->
    <el-container>
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
export default {
  name: "MainVue",
  components:{
    CommonAside,
    CommonHeader
  }
}
</script>

<style scoped lang="less">
.el-header{
  padding: 0px;
}
</style>