<template> 
  <div class="slider-wapper" >
    <div class="loading-container" v-if="!loaded">
      <me-loading  />
    </div> 

    <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      v-else
      >
      <swiper-slide
        v-for="(item, index) in picData"
        :key="index"
      >
        <a href="#" class="slider-link">
          <img @load="updateScroll" :src="item" alt="pic" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import MeLoading from 'base/loading';

  export default {

    name: 'ProductSlider',
    components: {
      MeSlider,
      MeLoading,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        
      };
    },
    props:{
      picData:{
        type:Array,
        default(){
          return []
        }       
      },
      loaded:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      updateScroll() {
        this.$refs.scroll && this.$refs.scroll.update();
      }
    }

  };
</script>

<style lang="scss" scoped>

  .slider-wapper {
    // width: 100%;
    // height: 375px;
    position: relative;
    width: 100%;
    padding-bottom:100%;
  }
  .swiper-container,
  .loading-container{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }

  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

</style>
