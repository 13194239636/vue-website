<template>
	<div class="content">
			<div class="main_content">
				<p class="title">广告发布</p>
				<p class="introudce">广告活动按照广告计划执行，到完成广告创作并形成广告作品之后，经过广告主的最后审核同意，即可送到预定的媒介发布刊播。这项工作一般由媒介部门的有关专业人员负责，他们的任务就是专门负责与有关媒介单位接洽，安排有关广告的发播事宜，并对发播质量实施监督。</p>
				<div class="selectArea">
					<p class="count">
						<label for="count">购买数量：</label>
						<el-input-number size="mini" id="count" v-model="num" :min="1"></el-input-number>
					</p>
					<p class="job">
						<label for="job">行业：</label>
						<el-select v-model="selectjob" placeholder="请选择" size="mini"  id="job" >
					    <el-option
					      v-for="(item,key) in jobs"
					      :key="key"
					      :label="item"
					      :value="item">
					    </el-option>
					  </el-select>
					</p>
					<p class="version">
						<label for="version">产品版本：</label>
						<el-checkbox-group v-model="selectVersion" size="mini"  id="version" fill="#4fc08d">
					      <el-checkbox-button  v-for="item in version" :label="item" :key="item">{{item}}</el-checkbox-button>
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
import appTable from './table.vue'
export default {
  data () {
    return {
      selectjob: '',
      selectVersion: [],
      selectTime: [],
      num: 1,
      jobs: ['出版业', '媒体', '游戏', '金融', '互联网'],
      time: ['半年', '一年', '三年'],
      version: ['初级版', '中级版', '高级版', '专家版']
    }
  },
  methods: {
  	show () {
  	  this.$emit('show')
  	}
  },
  components: {
    appTable
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
		display: inline-block;
	}
	.content .main_content .selectArea p #job{
		display: inline-block;
	}
	.content .main_content .selectArea p #time{
		display: inline-block;
	}
	.content .main_content .selectArea p #version{
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