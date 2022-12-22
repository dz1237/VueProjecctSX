<template>
  <div>
    <el-row >
      <el-col :span="8">
        <div class="grid-content bg-purple">1-1</div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-row >
            <el-col :span="8"  >2-1</el-col>
            <el-col :span="8"  >2-2</el-col>
            <el-col :span="8"  >2-3</el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeVue"
}
</script>

<style>

</style>