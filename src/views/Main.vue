<template>
  <div>
    <!-- <h3>我是Main</h3> -->
    <el-container>
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
export default {
  name: "MainVue",
  components:{
    CommonAside
  }
}
</script>

<style>

</style>