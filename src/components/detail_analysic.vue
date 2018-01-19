<template>
	<div class="content">
			<div class="main_content">
				<p class="title">流量分析</p>
				<p class="introudce">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
				<div class="selectArea">
					<p class="count">
						<label for="count">购买数量：</label>
						<el-input-number size="mini" id="count" v-model="num" :min="1"></el-input-number>
					</p>
					<p class="type">
						<label for="type">产品类型：</label>
						<el-select v-model="type" placeholder="请选择" size="mini"  id="type" >
					    <el-option
					      v-for="(item,key) in types"
					      :key="key"
					      :label="item"
					      :value="item">
					    </el-option>
					  </el-select>
					</p>
					<p class="time">
						<label for="time">有效时间：</label>
						<el-checkbox-group v-model="selectTime" size="mini"  id="time" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in time" :label="item" :key="item">{{item}}</el-checkbox-button>
					    </el-checkbox-group>
					</p>
					<p class="version">
						<label for="version">产品版本：</label>

						<el-checkbox-group v-model="selectVersion" size="mini"  id="version" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in version" :label="item" :key="item">{{item}}</el-checkbox-button>
					    </el-checkbox-group>
					</p>
					<p>
						<label for="count">总价：</label>
						<span>368元</span>
					</p>
					<a href="#" id="to_buy" @click="show">立即购买</a>
				</div>
			</div>
			<div class="product_messages">
				<h3>产品说明</h3>
				<p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

				<h3>用户行为指标</h3>
				<p>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：<br/>用户在网站的停留时间；<br/>用户来源网站（也叫“引导网站”）；<br/>用户所使用的搜索引擎及其关键词；<br/>在不同时段的用户访问量情况等。</p>

				<h3>浏览网站方式</h3>
				<p>用户上网设备类型<br/>用户浏览器的名称和版本<br/>访问者电脑分辨率显示模式<br/>用户所使用的操作系统名称和版本<br/>用户所在地理区域分布状况等</p>

			</div>
		</div>
</template>
<script>
import manySelect from './manyselect.vue'
import selectForm from './selectform.vue'
import appNumber from './number.vue'
import Bus from '../bus/'
export default {
  data () {
    return {
      num:1,
      type:'',
      types: ['入门版', '中级版', '高级版'],
      time: ['半年', '一年', '三年'],
      version: ['客户版', '代理商版', '专家版' ],
      selectTime: [],
      selectVersion: []
    }
  }, 
  computed: {
    countProduct () {
      return {
        num: 1,
        type: this.type,
        time: this.selectTime,
        version: this.selectVersion
      }
    }
  },
  components: {
    manySelect,
    selectForm,
    appNumber
  },
  mounted () {
  	var obj = new Object()
    Bus.$on('getNum', function(num){
      obj.num = num
    })
    // Bus.$on('getms', function(type){
    //   for(let i=0;i<type.length;i++){
	   //    if(!obj.time){
	   //    	obj.time=new Array()
	   //      obj.time.push(type[i].name)
	   //    }
	   //    else if(!obj.version){
	   //    	obj.version = new Array()
	   //    	obj.version.push(type[i].name)
	   //    }
	   //    else{}
    //   }
    // })
    // Bus.$on('getsf', function(type){
    //   console.log(type)
    //   obj.type = type
    // })
    // this.product = obj
    // console.log(this.product)
  },
  methods: {
    show () {
    	this.$emit('show')
    	Bus.$emit('getData')
    }
  }
}
</script>
<style scoped>
	.content{
		width:980px;
		margin-left:220px;
		background: #f0f2f5;
	}
	.content .main_content{
		width:980px;
		background: white;
	}
	.content .main_content .title{
		padding:20px;
		font-size: 20px;
	}
	.content .main_content .introudce{
		padding:10px 20px;
		line-height: 1.8;
		color:#999;
		background:#f7fcff;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.content .main_content .selectArea{
		font-size: 13px;
		padding:20px;
	}
	.content .main_content .selectArea p{
		padding-bottom: 20px;
		line-height: 27px;
		height: 27px;
		position: relative;
	}
	/*.content .main_content .selectArea .count{
	}*/
	.content .main_content .selectArea p #count{
	}
	.content .main_content .selectArea p #type{
	}
	.content .main_content .selectArea p #time{
		display: inline-block;
		position: relative;
		top:-4px;
	}
	.content .main_content .selectArea p #version{
		display: inline-block;
		position: relative;
		top:-4px;
	}
	.content .main_content .selectArea #to_buy{
		display: inline-block;
		border-radius: 4px;
		padding:10px;
		background: #4fc08d;
		color:white;
		text-decoration: none;
		margin-left:100px;
		margin-bottom: 20px;
		font-size: 14px;
	}
	.content .product_messages{
		margin-top:15px;
		width:940px;
		background: white;
		padding:20px;
	}
	.content .product_messages h3{
		font-size: 20px;
		padding-bottom: 15px;
		font-weight: normal;
	}
	.content .product_messages p{
		padding:10px 0px;
		line-height: 1.8;
		font-size: 14px;
		margin-bottom: 20px;
	}
</style>