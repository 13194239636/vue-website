<template>
	<div class="nav">
			<p class="img"><img :src="'static/'+num+'.png'"></p>
			<ul>
				<router-link tag="p" to="/detail/count"><li @click="toggle(1)">数据统计</li></router-link>
				<router-link tag="p"   to="/detail/forecast"><li  @click="toggle(2)">数据预测</li></router-link>
				<router-link tag="p"  to="/detail/analysic"><li @click="toggle(3)">流量分析</li></router-link>
				<router-link  tag="p"  to="/detail/publish"><li @click="toggle(4)">广告发布</li></router-link>
			</ul>
		</div>
</template>
<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    toggle (num) {
      this.num = num
    }
  }
}
</script>
<style scoped>
	.nav{
		float: left;
		width:200px;
		padding:20px 0px;
		background: white;
	}
	.nav .img{
		text-align: center;
		margin-bottom: 15px;
	}
	.nav .img img{
		width:100px;
		height:100px;
	}
	.nav ul li{
		padding:10px 15px;
		font-size: 14px;
	}
	.nav ul p:hover{
		background: #4fc08d;
		color:white;
	}
	.nav ul p.router-link-active{
		background: #4fc08d;
		color:white;
	}
</style>