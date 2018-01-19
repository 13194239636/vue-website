<template>
	<div class="my">
		<h2>您的产品</h2>
		<p class="chioce">
			<span>
				<label for="type">产品类型：</label>
				 <el-select v-model="selecttype" placeholder="请选择" 
			      @change="request()">
				    <el-option
				      v-for="(item,key) in type"
				      :key="key"
				      :label="item"
				      :value="item">
				    </el-option>
				  </el-select>
			</span>
			<span>
				<label for="startTime">开始日期：</label>
			    <el-date-picker
			      @change="request()"
			      v-model="startTime"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</span>
			<span>
				<label for="endTime">结束日期：</label>
			    <el-date-picker
			      @change="request()"
			      v-model="endTime"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
			</span>
			<span>
				<label for="keyword">关键词：</label>
				<input @change="request()"  v-model="keyword" placeholder="请输入内容" id="keyword"></input>
			</span>
		</p>
		<table>
			<th>
				<td class="select">订单号</td>
				<td>购买产品</td>
				<td>版本类型</td>
				<td>有效时间</td>
				<td>购买日期</td>
				<td>数量</td>
				<td>总价</td>
			</th>
			<tr v-for="item in data">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.type}}</td>
				<td>{{item.useTime}}</td>
				<td>{{item.buyTime}}</td>
				<td>{{item.num}}</td>
				<td>{{item.totalPrice}}元</td>
			</tr>
		</table>
	</div>
</template>
<script>
import selectForm from './selectform.vue'
export default {
  data () {
    return {
      data: [
        {'id': 1, 'name': '广告发布', 'type': '商铺版', 'useTime': 1200, 'buyTime': 234543546, 'num': 12, 'totalPrice': 7890},
        {'id': 2, 'name': '数据预测', 'type': '商铺版', 'useTime': 365, 'buyTime': 234543746, 'num': 3, 'totalPrice': 740},
        {'id': 3, 'name': '数据统计', 'type': '商铺版', 'useTime': 1000, 'buyTime': 234443546, 'num': 4, 'totalPrice': 19340}
        ],
      filterData: [],
      type: ['数据统计', '数据预测', '广告发布', '流量分析'],
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      selecttype: '',
      startTime: '',
      endTime: '',
      keyword: ''
    }
  },
  methods: {
  	request () {
  	  let query = {
  	  	'type': this.selecttype,
  	  	'startTime': this.startTime,
  	  	'endTime': this.endTime,
  	  	'keyword': this.keyword
  	  }
  	  this.$http.post('',query)
  	  .then((res) => {
  	  	this.filterData = res.data
  	  }, (err) => {})
  	}
    
  },
  components: {
    selectForm
  }
}
</script>
<style scoped>
	.my{
		width:1200px;
		margin:20px auto;
		min-height: 536px;
	}
	.my p{
		line-height: 30px;
		font-size: 14px;
	}
	.my p span{
		margin:0px 2px;
	}
	.my h2{
		margin-bottom: 20px;
	}
	.my table{
		width:100%;
		margin-bottom: 23px;
		margin-top:40px;
	}
	.my table th{
		background: #4fc08d;
		color:white;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
		font-weight: normal;
	}
	.my table th td{

		border:1px solid #4fc08d;
	}
	.my table th td.select{
		background: #35495e;
		border-color: #35495e;
	}
	.my table tr{
		display: flex;
		justify-content: space-around;
	}
	.my table tr td{
		background: white;
	}
	.my table td{
		padding:5px 0px;
		line-height: 22px;
		text-align: center;
		width:100%;
		border-right:1px solid #e3e3e3;
	}
	.my p span #keyword{
		display: inline-block;
		width:100px;
	    -webkit-appearance: none;
	    background-color: #fff;
	    border-radius: 4px;
	    border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 40px;
	    line-height: 1;
	    outline: 0;
	    padding: 0 15px;
	    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width:220px;
	}
</style>