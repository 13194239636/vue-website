<template>
	<div class="detail_container">
		<app-nav></app-nav>
    <app-confirm :pro="product" v-if="Confirmshow" @hidden="hidden()" @showCheck="showCheck()"></app-confirm>
    <app-Check v-if="Checkshow" @buySuccess="buySuccess()" @buyFail="buyFail()"></app-Check>
    <app-result v-if="Resultshow" @hiddenResult='hiddenResult()'></app-result>
		<router-view  @show="show"></router-view>
	</div>
</template>
<script>
import appNav from './detail_nav.vue'
import appCount from './detail_count.vue'
import appForecast from './detail_forecast.vue'
import appAnalysic from './detail_analysic.vue'
import appPublish from './detail_publish.vue'
import appConfirm from './confirmbuy.vue'
import appCheck from './checkbuy.vue'
import appResult from './buyresult.vue'
export default {
  data () {
    return {
      Confirmshow: false,
      Checkshow: false,
      Resultshow: false,
      product: null
    }
  },
  components: {
    appCount,
    appNav,
    appForecast,
    appAnalysic,
    appPublish,
    appConfirm,
    appCheck,
    appResult
  },
  methods: {
    show (obj) {
      this.Confirmshow = true
      this.product = obj
    },
    hidden () {
      this.Confirmshow = false
    },
    showCheck () {
      this.Confirmshow = false
      this.Checkshow = true
    },
    buySuccess () {
      this.Checkshow = false
      this.Resultshow = true
    },
    buyFail () {
      this.Checkshow = false
      this.Resultshow = true
    },
    hiddenResult () {
      this.Resultshow =false
    }
  },
  watch: {
    '$route' (from, to) {
     //  console.log(from);
    }
  }
}
</script>
<style>
    .detail_container{
		width:1200px;
		margin:10px auto;
		background: #f0f2f5;
	}

</style>