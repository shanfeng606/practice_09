<template>
  <div class="g-cart">
      <div class="g-tabbar-item">
        <i class="iconfont icon-shop"></i>
        <span>店铺</span>
      </div>
      <div class="g-tabbar-item">
        <i class="iconfont icon-shop"></i>
        <span>客服</span>
      </div>
      <div class="g-tabbar-item">
        <i class="iconfont icon-shop"></i>
        <span>收藏</span>
      </div> 
      <div class="cart-text cart">加入购物车</div>
      <div class="cart-text buy">马上抢</div>
     
  </div>
</template>

<script>
export default {
    name:"MwCart"
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
    .router-link-active {
    color: $link-active-color;
    }
    .g-cart{
        display: flex;
        background-color: #fff;
        height: 50px;
        width: 100%;
        .g-tabbar-item{
            flex:1;
        }
        .cart-text{
            color: #fff;
            flex:2;
            display: flex;
            justify-content:space-around;
            align-items: center;

        }
        .cart{
            background-color: #ff9500;
        }
        .buy{
            background-color: #ff0036;
        }
    }
</style>