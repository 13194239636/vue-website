<template>
	<div class="content">
			<div class="main_content">
				<p class="title">数据统计</p>
				<p class="introudce">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备</p>
				<div class="selectArea">
					<p class="type">
						<label for="type">产品类型：</label>
						<el-checkbox-group v-model="selectType" size="mini"  id="type" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in types" :label="item" :key="item">{{item}}</el-checkbox-button>
					    </el-checkbox-group>
					</p>
					<p class="area">
						<label for="area">适用地区：</label>
						<el-select v-model="selectArea" placeholder="请选择" size="mini"  id="area" >
					      <el-option
					        v-for="(item,key) in area"
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
					<p>
						<label for="count">总价：</label>
						<span>500元</span>
					</p>
					<a href="#" id="to_buy" @click="show()">立即购买</a>
				</div>
			</div>
			<div class="product_messages">
				<h3>产品说明</h3>
				<p>广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
				<app-table></app-table>
			</div>
		</div>
</template>
<script>
import manySelect from './manyselect.vue'
import selectForm from './selectform.vue'
import appTable from './table.vue'
import appNumber from './number.vue'
export default {
  data () {
    return {
      selectType: [],
      selectTime: [],
      selectArea: '',
      area: ['北京', '上海', '广州', '重庆', '武汉', '天津'],
      time: ['半年', '一年', '三年'],
      types: ['红色版', '绿色版', '紫色版']
    }
  },
  computed: {
    countProduct () {
      return {
        num: 1,
        type: this.selectType,
        time: this.selectTime,
        area: this.selectArea
      }
    }
  },
  methods: {
    show () {
      this.$emit('show',this.countProduct)
    }
  },
  components: {
    manySelect,
    selectForm,
    appTable,
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
	.content .main_content .selectArea p #type{
		display: inline-block;
		position: relative;
		top:-4px;
	}
	.content .main_content .selectArea p #time{
		display: inline-block;
		position: relative;
		top:-4px;
	}
	.content .main_content .selectArea p #area{
		display: inline-block;
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