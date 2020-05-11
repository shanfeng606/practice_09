<template>
  <div>
      <div class="personal">
        <header class="g-header-container">
          <personal-header/>
        </header>

        <me-scroll ref="scroll">
          <div class="content">
            <!-- <img class="personal-img" src="./personal.png" alt=""> -->
            <div class="content-header">
              <div class="personal-header-pic">
                <i class="iconfont icon-people"></i>
              </div>
              <div class="personal-header-login">
                <span class="item">注册</span>
                <span class="item">|</span>
                <span class="item">登录</span>
              </div>
            </div>

            <div class="order">
              <div class="order-left">
                <i class="iconfont icon-order"></i>
                <span>我的订单</span>
              </div>
              <div class="order-right">
                <span>查看我的全部订单</span>
                <i class="iconfont icon-arr"></i>
              </div>
            </div>

            <div class="four-list">
              <div class="item">
                <i class="iconfont icon-purse"></i>
                <span>待付款</span>
              </div>
              <div class="item">
                <i class="iconfont icon-box"></i>
                <span>待收货</span>
              </div>
              <div class="item">
                <i class="iconfont icon-msg"></i>
                <span>待评价</span>
              </div>
              <div class="item">
                <i class="iconfont icon-money"></i>
                <span>退货/退款</span>
              </div>
            </div>

            <div class="mymoney">
              <i class="iconfont icon-Money"></i>
              <span>我的资产</span>
            </div>
            <div class="money-list">
              <span>红包</span>
              <span>余额</span>
              <span>现金券</span>
              <span>礼品卡</span>
            </div>

            <div class="detail-list">
              <div class="detail-list-item">
                <i class="iconfont icon-aftersale"></i>
                <span>售后服务</span>
                <i class="iconfont icon-arr right"></i>
              </div>
              <div class="detail-list-item">
                <i class="iconfont icon-idea"></i>
                <span>意见反馈</span>
                <i class="iconfont icon-arr right"></i>
              </div>
              <div class="detail-list-item">
                <i class="iconfont icon-address"></i>
                <span>收货地址</span>
                <i class="iconfont icon-arr right"></i>
              </div>
              <div class="detail-list-item">
                <i class="iconfont icon-exit"></i>
                <span>退出登录</span>
                <i class="iconfont icon-arr right"></i>
              </div>
              <div class="detail-list-item">
                <i class="iconfont icon-tel"></i>
                <span>400-123-8888</span>
                <i class="iconfont icon-arr right"></i>
              </div>
            </div>

            <div class="footer">
              <p>客服热线400-123-8888（8:00-22:00）</p>
              <p>拨打前请记录你的UID 0</p>
            </div>
          </div>


        </me-scroll>

      </div>
  </div>
</template>

<script>
import PersonalHeader from './header';
import MeScroll from 'base/scroll';

export default {
    name:'Personal',
    components: {
      PersonalHeader,
      MeScroll
    }
}
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 @import "~assets/scss/icons2";
 @import "./style";
.personal {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  // z-index: $product-z-index;
  width: 100%;
  height: 100%;
  background-color:$bgc-theme;
}




</style>