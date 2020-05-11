<template>
  <me-navbar class="header">
    <i
      class="iconfont"
      slot="left"
     
    ></i>
    <div slot="center" class="header-title">
        购物车
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  
  export default {
    name: 'CartHeader',
    components: {
      MeNavbar,
    },
    methods:{
      // getQuery(query) {
      //   console.log(query);
      // },
      // goBack() {
      //   this.$router.back();
      // }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    // &.mine-navbar {
    //   background-color: $header-bgc-translucent;
    // }
   
    .iconfont {
      color: #666;
      font-size: $icon-font-size;
      
    }

    .header-title{
        font-size: 18px;
        text-align: center;
        color: #222;
        padding-left:24px;
    }
  }
</style>
