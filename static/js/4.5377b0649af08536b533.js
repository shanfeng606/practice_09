webpackJsonp([4],{"8X+b":function(t,a){},IZSk:function(t,a){},"Jhn/":function(t,a,e){"use strict";var n=e("PQth"),s={name:"MeSlider",components:{swiper:n.swiper},props:{direction:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].indexOf(t)>-1}},interval:{type:Number,default:3e3,validator:function(t){return t>=0}},loop:{type:Boolean,default:!0},pagination:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{keyId:Math.random()}},watch:{data:function(t){0!==t.length&&(this.swiperOption.loop=1!==t.length&&this.loop,this.keyId=Math.random())}},created:function(){this.init()},methods:{init:function(){this.swiperOption={watchOverflow:!0,direction:this.direction,autoplay:!!this.interval&&{delay:this.interval,disableOnInteraction:!1},slidesPerView:1,loop:!(this.data.length<=1)&&this.loop,pagination:{el:this.pagination?".swiper-pagination":null}}}}},i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("swiper",{key:this.keyId,attrs:{options:this.swiperOption}},[this._t("default"),this._v(" "),this.pagination?a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):this._e()],2)},staticRenderFns:[]};var o=e("C7Lr")(s,i,!1,function(t){e("IZSk")},"data-v-6a074cac",null);a.a=o.exports},KDAN:function(t,a){},QaMr:function(t,a){},taF9:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("cQcd"),s=e("T452"),i={name:"ProductHeader",components:{MeNavbar:e("/l8+").a},methods:{getQuery:function(t){console.log(t)},goBack:function(){this.$router.back()}}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("me-navbar",{staticClass:"header"},[a("i",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:this.goBack},slot:"left"}),this._v(" "),a("div",{staticClass:"header-title",attrs:{slot:"center"},slot:"center"},[this._v("\n      商品详情\n  ")]),this._v(" "),a("i",{staticClass:"iconfont icon-cart",attrs:{slot:"right"},slot:"right"})])},staticRenderFns:[]};var r=e("C7Lr")(i,o,!1,function(t){e("QaMr")},"data-v-6e4c52e8",null).exports,c=e("8MDr"),l=e("Jhn/"),d=e("PQth"),p="horizontal",u=!0,v=0,_=!0,h=e("odKQ"),f={name:"ProductSlider",components:{MeSlider:l.a,MeLoading:h.a,swiperSlide:d.swiperSlide},data:function(){return{direction:p,loop:u,interval:v,pagination:_}},props:{picData:{type:Array,default:function(){return[]}},loaded:{type:Boolean,default:!1}},methods:{updateScroll:function(){this.$refs.scroll&&this.$refs.scroll.update()}}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"slider-wapper"},[t.loaded?e("me-slider",{attrs:{direction:t.direction,loop:t.loop,interval:t.interval,pagination:t.pagination}},t._l(t.picData,function(a,n){return e("swiper-slide",{key:n},[e("a",{staticClass:"slider-link",attrs:{href:"#"}},[e("img",{staticClass:"slider-img",attrs:{src:a,alt:"pic"},on:{load:t.updateScroll}})])])}),1):e("div",{staticClass:"loading-container"},[e("me-loading")],1)],1)},staticRenderFns:[]};var C=e("C7Lr")(f,m,!1,function(t){e("8X+b")},"data-v-a7dd1766",null).exports,g={name:"ProductContent",components:{MeLoading:h.a},props:{contentData:{type:Object,default:{}},loaded:{type:Boolean,default:!1}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[t.loaded?e("div",{staticClass:"content"},[e("div",{staticClass:"price"},[e("span",{staticClass:"price-num"},[t._v("￥"+t._s(t.contentData.priceText))]),t._v(" "),e("div",{staticClass:"sell-num"},[t._v(t._s(t.contentData.soldCount)+"件已售")])]),t._v(" "),e("div",{staticClass:"title"},[e("h1",[t._v(t._s(t.contentData.title))]),t._v(" "),e("div",{staticClass:"title-detail"},[e("span",[t._v(t._s(t.contentData.postage))]),t._v(" "),e("span",[t._v("月销售量"+t._s(t.contentData.soldCount)+"件")]),t._v(" "),e("span",[t._v(t._s(t.contentData.from))])])]),t._v(" "),e("div",{staticClass:"evaluate"},[e("h1",{staticClass:"evaluate-title"},[t._v("商品评价（"+t._s(t.contentData.totalCount)+"）")]),t._v(" "),e("div",{staticClass:"evaluate-tag"},[e("ul",{staticClass:"evaluate-tag-list"},t._l(t.contentData.keywords,function(a,n){return e("li",{key:n,staticStyle:{display:"inline-block"}},[e("span",[t._v(t._s(a.word)+"("+t._s(a.count)+")")])])}),0)]),t._v(" "),e("div",{staticClass:"custom"},[e("img",{attrs:{src:t.contentData.headPic,alt:""}}),t._v(" "),e("span",[t._v(t._s(t.contentData.userName))]),t._v(" "),e("div",{staticClass:"evaluate-content"},[t._v("\n            "+t._s(t.contentData.content)+"\n          ")])]),t._v(" "),e("div",{staticClass:"evaluate-detail"},[t._v("\n        "+t._s(t.contentData.dateTime)+"\n      ")])]),t._v(" "),e("div",{staticClass:"shop"},[e("div",{staticClass:"shop-name"},[e("img",{staticClass:"shop-pic",attrs:{src:t.contentData.shopIcon,alt:""}}),t._v(" "),e("span",[t._v(t._s(t.contentData.shopName))]),t._v(" "),e("img",{staticClass:"shop-style",attrs:{src:t.contentData.creditLevelIcon,alt:""}})]),t._v(" "),e("div",{staticClass:"shop-detail"},[e("span",[t._v("宝贝描述"+t._s(t.contentData.evaluates[0].score))]),t._v(" "),e("span",[t._v("卖家服务"+t._s(t.contentData.evaluates[1].score))]),t._v(" "),e("span",[t._v("物流服务"+t._s(t.contentData.evaluates[2].score))])])])]):e("me-loading")],1)},staticRenderFns:[]};var D=e("C7Lr")(g,y,!1,function(t){e("KDAN")},"data-v-330f2cf4",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"g-cart"},[e("div",{staticClass:"g-tabbar-item"},[e("i",{staticClass:"iconfont icon-shop"}),t._v(" "),e("span",[t._v("店铺")])]),t._v(" "),e("div",{staticClass:"g-tabbar-item"},[e("i",{staticClass:"iconfont icon-shop"}),t._v(" "),e("span",[t._v("客服")])]),t._v(" "),e("div",{staticClass:"g-tabbar-item"},[e("i",{staticClass:"iconfont icon-shop"}),t._v(" "),e("span",[t._v("收藏")])]),t._v(" "),e("div",{staticClass:"cart-text cart"},[t._v("加入购物车")]),t._v(" "),e("div",{staticClass:"cart-text buy"},[t._v("马上抢")])])}]};var w=e("C7Lr")({name:"MwCart"},b,!1,function(t){e("zS3Z")},"data-v-2d02a558",null).exports,S={name:"Product",components:{MeScroll:c.a,ProductHeader:r,ProductSlider:C,ProductContent:D,MeCart:w},data:function(){return{items:[],contents:{},loaded:!1}},methods:{updateScroll:function(){this.$refs.scroll&&this.$refs.scroll.update(),console.log(1)}},created:function(){var t,a,e=this;(t=this.$route.params.id,a={api:"mtop.taobao.detail.getdetail",ttid:"2017@taobao_h5_6.6.0",data:'{"itemNumId":"'+t+'"}',appKey:123/44/8,dataType:"jsonp",type:"jsonp"},Object(n.a)("https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/",a,s.d)).then(function(t){setTimeout(function(){if(t){e.items=t.data.item.images;var a=JSON.parse(t.data.apiStack[0].value);e.contents.priceText=a.price.price.priceText,e.contents.soldCount=a.item.sellCount,e.contents.title=a.item.title,e.contents.postage=a.delivery.postage,e.contents.from=a.delivery.from,e.contents.sellCount=a.item.sellCount,e.contents.totalCount=t.data.rate.totalCount,e.contents.keywords=t.data.rate.keywords,e.contents.headPic=t.data.rate.rateList[0].headPic,e.contents.userName=t.data.rate.rateList[0].userName,e.contents.content=t.data.rate.rateList[0].content,e.contents.dateTime=t.data.rate.rateList[0].dateTime,e.contents.shopIcon=t.data.seller.shopIcon,e.contents.shopName=t.data.seller.shopName,e.contents.creditLevelIcon=t.data.seller.creditLevelIcon,e.contents.evaluates=t.data.seller.evaluates,console.log(t.data.seller),e.loaded=!0}},300)})}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"product",appear:""}},[e("div",{staticClass:"product"},[e("header",{staticClass:"g-header-container"},[e("product-header")],1),t._v(" "),e("me-scroll",{ref:"scroll"},[e("product-slider",{attrs:{picData:t.items,loaded:t.loaded},on:{load:t.updateScroll}}),t._v(" "),e("product-content",{attrs:{contentData:t.contents,loaded:t.loaded}})],1),t._v(" "),e("div",{staticClass:"g-footer-container"},[e("me-cart")],1)],1)])},staticRenderFns:[]};var L=e("C7Lr")(S,k,!1,function(t){e("vS6e")},"data-v-fb5e7c04",null);a.default=L.exports},vS6e:function(t,a){},zS3Z:function(t,a){}});
//# sourceMappingURL=4.5377b0649af08536b533.js.map