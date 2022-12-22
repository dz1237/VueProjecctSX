export default {
  state:{
    isCollapse:false //控制导航栏展开收起
  },
  mutations:{
    //修改导航栏展开收起方法
    collapseMenu(state){
      state.isCollapse = !state.isCollapse;
    }
  }
}