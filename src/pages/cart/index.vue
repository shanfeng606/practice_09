<template>
  <div>  
      <div class="cart">
        <header class="g-header-container">
          <cart-header/>
        </header>

        <me-scroll ref="scroll">
          <div class="content">
            <img class="cart-img" src="./cart.png" alt="">
          </div>
        </me-scroll>
      </div>

      


      
   
  </div>

</template>

<script>
import CartHeader from './header';
import MeScroll from 'base/scroll';

  export default {
    name: 'Cart',
    components: {
      CartHeader,
      MeScroll
    }
  };
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
.cart {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}

.cart-img{
  width: 100%;
  margin: 50px auto;

}
// .swiper-scollbar{
//   height: 0;
// }


</style>