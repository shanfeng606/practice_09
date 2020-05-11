<template>
  <div class="wrap">
    <me-loading v-if="!loaded"/>
    <div class="content" v-else>
      <div class="price">
        <span class="price-num">￥{{contentData.priceText}}</span>
        <div class="sell-num">{{contentData.soldCount}}件已售</div>
      </div>
      <div class="title">
        <h1>{{contentData.title}}</h1>
        <div class="title-detail">
          <span>{{contentData.postage}}</span>
          <span>月销售量{{contentData.soldCount}}件</span>
          <span>{{contentData.from}}</span>
        </div>
      </div>

      <div class="evaluate">
        <h1 class="evaluate-title">商品评价（{{contentData.totalCount}}）</h1>
        <div class="evaluate-tag">
          <ul class="evaluate-tag-list" >
              <li v-for="(item,i) in contentData.keywords" style="display:inline-block" :key="i">
                <span>{{item.word}}({{item.count}})</span>
              </li>
          </ul>
        </div>
        <div class="custom">        
              <img :src="contentData.headPic" alt="" />
              <span>{{contentData.userName}}</span>
          
            <div class="evaluate-content">
              {{contentData.content}}
            </div>
         
        </div>
        <div class="evaluate-detail">
          {{contentData.dateTime}}
        </div>
      </div>

      <div class="shop">
        <div class="shop-name">
          <img class="shop-pic" :src="contentData.shopIcon" alt="" />
          <span>{{contentData.shopName}}</span>
          <img class="shop-style" :src="contentData.creditLevelIcon" alt="" />
        </div>
        <div class="shop-detail">
            <span>宝贝描述{{contentData.evaluates[0].score}}</span>
            <span>卖家服务{{contentData.evaluates[1].score}}</span>
            <span>物流服务{{contentData.evaluates[2].score}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MeLoading from 'base/loading';

export default {
  name: "ProductContent",
  components: {     
      MeLoading
    },
  props: {
    contentData: {
      type: Object,
      default:{}
    },
    loaded:{
        type:Boolean,
        default:false
    }
  },

};

</script>

<style lang="scss" scoped>
.price {
  background-color: #ef3563;
  height: 46px;
  position: relative;
  &-num {
    color: #fff;
    line-height: 46px;
    font-size: 18px;
    padding-left: 5px;
  }
  .sell-num {
    background-color: rgba(204, 46, 62, 0.8);
    color: #fff;
    position: absolute;
    right: 9px;
    top: 12px;
    padding: 5px;
    border-radius: 3px;
  }
}
.title {
  background-color: #fff;
  margin-bottom: 10px;
  padding:0 10px;
  h1 {
    line-height: 36px;
    // margin:0 10px;
    color: black;
  }
  &-detail {
    display: flex;
    justify-content: space-between;
    // margin: 0 10px;
    line-height: 28px;
  }
}
.evaluate {
  padding: 0 10px;
  background-color: #fff;
  line-height: 30px;
  margin-bottom: 10px;

  &-tag {
    // line-height: 36px;
    span {
      margin:10px 10px 10px 0;
      padding: 5px;
      border-radius: 3px;
      background-color: rgba(255, 238, 238, 0.8);
    }
  }
  .custom {
    // text-indent: 16px;
    margin-top:10px; 
    position: relative;
    img:nth-child(1){
      width: 22px;
      height: 22px;
      border-radius: 50%;
    }
    span{
      position: absolute;
      left:30px;
      top:3px;
      line-height: 16px;
    }
    img:nth-child(2){
      // width: 22px;
      // height: 22px;
      border-radius: 50%;
    }
  }
  &-content {
    line-height: 16px !important;
    display: inline-block
  }
  &-detail{
    line-height: 20px; 
  }
}

.shop{
    background-color: #fff;
    padding: 10px;
    position: relative;


    &-name{
      width: 100%;
      height:50px;
      position: relative;
      .shop-pic{
        width: 50px;
        height:50px;
      }
      span{
        // float: left;
        position:absolute;
        left:54px;
        top:7px;
      }
      .shop-style{
        position:absolute;
        left:54px;
        top:32px;
        height: 14px;
        // width: 20px;
      }
    }
    &-detail{
      padding:20px 0;
      display: flex;
      justify-content: space-around;
      line-height: 16px;
      margin-bottom:50px; 
    }
}
</style>