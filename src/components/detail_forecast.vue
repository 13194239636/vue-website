<template>
	<div class="content">
			<div class="main_content">
				<p class="title">数据预测</p>
				<p class="introudce">未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
				<div class="selectArea">
					<p class="count">
						<label for="count">购买数量：</label>
						<el-input-number size="mini" id="count" v-model="num" :min="1"></el-input-number>
					</p>
					<p class="source">
						<label for="source">媒介：</label>
						<el-checkbox-group v-model="selectTime" size="mini"  id="source" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in source" :label="item" :key="item">{{item}}</el-checkbox-button>
					    </el-checkbox-group>
					</p>
					<p class="time">
						<label for="time">有效时间：</label>
						<el-checkbox-group v-model="selectTime" size="mini"  id="time" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in time" :label="item" :key="item">{{item}}</el-checkbox-button>
					    </el-checkbox-group>
					</p>
					<p>
						<label for="count">总价：</label>
						<span>368元</span>
					</p>
					<a href="#" id="to_buy" @click='show()'>立即购买</a>
				</div>
			</div>
			<div class="product_messages">
				<h3>产品说明</h3>
				<p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。</p>
			</div>
		</div>
</template>
<script>
import manySelect from './manyselect.vue'
import appNumber from './number.vue'
export default {
  data () {
    return {
      num: 1,
      selectTime: [],
      selectSource: [], 
      time: ['半年', '一年', '三年'],
      source: ['纸质报告',  'pdf', '页面报告', '邮件',]
    }
  },
  methods: {
    show () {
      this.$emit('show')
    }
  },
  components: {
    manySelect,
    appNumber
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
	.content .main_content .selectArea p #source{
		display: inline-block;
		position: relative;
		top:-4px;
	}
	.content .main_content .selectArea p #time{
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