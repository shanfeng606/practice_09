<template>
  <transition name="product" appear>
  <div class="product">
    <header class="g-header-container">
      <product-header/>
    </header>

    <me-scroll
    ref="scroll"
    >
      <product-slider @load="updateScroll" :picData="items" :loaded="loaded"/>
      <product-content :contentData="contents" :loaded="loaded"></product-content>
    </me-scroll>

    <div class="g-footer-container">
      <me-cart></me-cart>
    </div>
    

  </div>
  </transition>
</template>

<script>
import {getProductDetail} from 'api/product';
import ProductHeader from './header';
import MeScroll from 'base/scroll';
import ProductSlider from './slider';
import ProductContent from './content'
import MeCart from 'components/cart'

export default {
  name: 'Product',
  components: {
    MeScroll,
    ProductHeader,
    ProductSlider,
    ProductContent,
    MeCart
  },
  data(){
    return{
      items:[],//保存幻灯片
      contents:{},//保存产品详情
      loaded:false
    }
  },
  methods:{
    updateScroll() {
        this.$refs.scroll && this.$refs.scroll.update();
        console.log(1);
    }
  },
  created() {
    getProductDetail(this.$route.params.id).then(data =>{
      // console.log(data);
      // this.products=data.data;
      setTimeout(()=>{
        if(data){
        this.items=data.data.item.images;
        const apiStack=JSON.parse(data.data.apiStack[0].value);
        // const shuju=res.data;
        this.contents.priceText=apiStack.price.price.priceText; //单价  
        this.contents.soldCount=apiStack.item.sellCount;//已售件数
        this.contents.title=apiStack.item.title;//货物名称
        this.contents.postage=apiStack.delivery.postage;//包邮信息
        this.contents.from=apiStack.delivery.from;//寄出地址
        this.contents.sellCount=apiStack.item.sellCount;//总共出售
        this.contents.totalCount=data.data.rate.totalCount;//评价总数
        this.contents.keywords=data.data.rate.keywords;//评价语句及人数

        this.contents.headPic=data.data.rate.rateList[0].headPic;//评价用户信息
        this.contents.userName=data.data.rate.rateList[0].userName;//评价用户名
        this.contents.content=data.data.rate.rateList[0].content;//评价用户内容
        this.contents.dateTime=data.data.rate.rateList[0].dateTime;//评价日期
        // console.log(data.data.rate)
        this.contents.shopIcon=data.data.seller.shopIcon;//商店图标
        this.contents.shopName=data.data.seller.shopName;//商店名称
        this.contents.creditLevelIcon=data.data.seller.creditLevelIcon;//商店名称
        this.contents.evaluates=data.data.seller.evaluates
        console.log(data.data.seller);

        // console.log(data);


        this.loaded=true;}
      },300)
      // if(data){
      //   this.items=data.data.item.images;
      //   const apiStack=JSON.parse(data.data.apiStack[0].value);
      //   this.contents.priceText=apiStack.price.price.priceText; //单价  
      //   this.contents.soldCount=apiStack.vertical.jhs.soldCount;//已售件数
      //   console.log(this.contents);


      //   this.loaded=true;
      

    })
  }
};
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

  .product-enter-active,
  .product-leave-active {
      transition: all 0.3s;
  }

  .product-enter,
  .product-leave-to {
     transform: translate(100%, 0);
  }


</style>