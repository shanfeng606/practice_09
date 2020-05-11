<template>
  <me-navbar class="header">
    <i
      class="iconfont"
      slot="left"
     
    ></i>
    <div slot="center" class="header-title">
        我的慕淘
    </div>
    <i class="iconfont icon-setting" slot="right"></i>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  
  export default {
    name: 'PersonalHeader',
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
    &.mine-navbar {
      background-color: $header-bgc-translucent     ;
    }
   
    .iconfont {
      color: #fff;
      font-size: $icon-font-size;
      margin:0 5px;
      
    }

    .header-title{
        font-size: 18px;
        text-align: center;
        color: #fff;
        padding-left:68px;
    }
  }
</style>
