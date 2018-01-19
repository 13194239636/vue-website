<template>
  <div id="app">
    <app-header @showLogoin="show(1)"  @showRegister="show(2)"  @showFollow="show(3)"></app-header>
    <app-logoin @hidden="hiddenAlert" v-if="logoin"></app-logoin>
    <app-follow @hidden="hiddenAlert" v-if="follow"></app-follow>
    <app-register @hidden="hiddenAlert" v-if="register"></app-register>
    <router-view v-if="path.match(/\/detail/)"></router-view>
    <router-view v-if="path.match(/\/my/)"></router-view>
    <div class="main" v-if="path=='/'">
      <div id="sidebar">
        <div class="all_product">
          <h1>全部产品</h1>
          <div class="PC_pro">
            <h3>PC产品</h3>
            <ul>
              <li><a href="">数据统计</a></li>
              <li><a href="">数据统计</a></li>
              <li><a href="">数据统计</a></li>
              <li><a href="">数据统计</a></li>
            </ul>
          </div>
          <div class="phone_app">
            <h3>手机应用类</h3>
            <ul>
              <li><a href="">91助手</a></li>
              <li><a href="">产品助手</a></li>
              <li><a href="">团队语音</a></li>
              <li><a href="">智能地图</a></li>
            </ul>
          </div>
        </div>
        <div class="latest_messages">
          <h1>最新消息</h1>
          <ul>
            <li><a href="">新闻条目1新闻条目1新闻条目1新闻条目1新闻条目1新闻条目1</a></li>
            <li><a href="">新闻条目1新闻条目1新闻条目1</a></li>
            <li><a href="">新闻条目1新闻条目1新闻条目1新闻条目1新闻条目1新闻条目1</a></li>
            <li><a href="">新闻条目1新闻条目1新闻条目1</a></li>
          </ul>
        </div>
      </div>
      <div class="content">
        <app-slide></app-slide>

        <app-buy :src="'static/'+img[0]+'.png'" :to="'/detail/count'">
          <p slot="title">开放产品</p>
          <p slot="content">开放产品是一款开放产品</p>
        </app-buy>

        <app-buy :src="'static/'+img[1]+'.png'"  :to="'/detail/forecast'">
          <p slot="title">品牌营销</p>
          <p slot="content">品牌营销帮助你的产品更好地找到定位</p>
        </app-buy>

        <app-buy :src="'static/'+img[2]+'.png'"  :to="'/detail/analysic'">
          <p slot="title">使命必达</p>
          <p slot="content">使命必达快速迭代永远保持最前端的速度</p>
        </app-buy>

        <app-buy :src="'static/'+img[3]+'.png'"  :to="'/detail/publish'">
          <p slot="title">勇攀高峰</p>
          <p slot="content">帮你勇闯高峰，到达事业的顶峰</p>
        </app-buy>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
import appFooter from './components/footer.vue'
import appSlide from './components/slidepicture.vue'
import appBuy from './components/buymodel.vue'
import appLogoin from './components/logoin.vue'
import appFollow from './components/follow.vue'
import appRegister from './components/register.vue'
import appMy from './components/my.vue'
export default {
  name: 'app',
  data () {
    return {
      img: [1, 2, 3, 4],
      path: '/',
      logoin: false,
      follow: false,
      register: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.path = this.$route.path
    }
  },
  components: {
    appHeader,
    appFooter,
    appSlide,
    appBuy,
    appLogoin,
    appFollow,
    appRegister,
    appMy
  },
  methods: {
    show (i) {
      switch (i) {
        case 1: this.logoin = true; break
        case 2: this.register = true; break
        case 3: this.follow = true; break
        default:;
      }
    },
    hiddenAlert (i) {
      switch (i) {
        case 1: this.logoin = false; break
        case 2: this.register = false; break
        case 3: this.follow = false; break
        default:;
      }
    }
  }
}
</script>

<style scoped>
  #app{
    background: #f0f2f5;
  }
  .main{
    margin:0 auto;
    width:1200px;
  }
  .content{
    width:930px;
    padding-left: 285px;
  }
  .content .wrapper{
    float: left;
  }
  #sidebar{
    float:left;
    font-size: 14px;
    font-weight: none;
    background: white;
    margin-right:15px;
    background: #f0f2f5;
  }
  .all_product{
    width:240px;
    margin:15px;
    background: white;
  }
  .latest_messages{
    width:240px;
    margin:15px;
    background: white;
    min-height: 512px;
  }
  .all_product h1,.latest_messages h1{
    font-size: 14px;
    font-weight: normal;
    padding:10px 15px;
    color:white;
    background: rgb(79,192,141);
  }
  .all_product .PC_pro,.all_product .phone_app{
    padding:15px;
    border-bottom: 1px solid #e3e3e3;
  }
  .all_product .PC_pro h3,.all_product .phone_app h3{
    padding-bottom:15px;
    font-size: 14px;
    font-weight: none;
  }
  .all_product .PC_pro ul li a,.all_product .phone_app ul li a{
    display: inline-block;
    width:100%;
    padding:5px;
    text-decoration:none;
    font-size: 14px;
    font-weight: none;
    color: #444;
  }
  .latest_messages ul{
    margin:15px;
  }
  .latest_messages ul li a{
    display: inline-block;
    width:100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    color: #444;
    padding: 5px;
    text-decoration-line: none;
  }    
</style>
