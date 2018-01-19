<template>
	<div>
		<div class="bg">
		</div>
		<div class="buy_main">
			<span class="close" @click="hidden()">X</span>
			<table class="buy_content">
				<th>
					<td>购买数量</td>
					<td>产品类型</td>
					<td>有效时间</td>
					<td>产品版本</td>
					<td>总价</td>
				</th>
				<tr>
					<td>{{pro.num}}</td>
					<td>{{types}}</td>
					<td>{{times}}</td>
					<td>{{versions}}</td>
					<td>{{pro.totalPrice}}</td>
				</tr>
			</table>
			<div class="bank">
				<h3>请选择银行</h3>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<p class="but_p"><a href="#" class="but" @click="showCheck()">立即购买</a></p>
		</div>
	</div>
	
</template>
<script>
export default{
  data () {
    return {
    }
  },
  computed: {
    types () {
      if(!this.pro.type)return
      return this.pro.type.join(',')
    },
    times () {
      if(!this.pro.time)return
      return this.pro.time.join(',')
    },
    versions () {
      if(!this.pro.version)return
      return this.pro.version.join(',')
    }
  },
  methods: {
    hidden () {
      this.$emit('hidden')
    },
    showCheck () {
      this.$emit('showCheck')
    }
  },
  props: {
    pro: {
      type: Object
    }
  }
}
</script>
<style scoped>
	.bg{
		position: absolute;
		top:0px;
		left:0px;
		right:0px;
		bottom:-300px;
		z-index: 100;
		background:#444;
		opacity:0.4;
	}
	.buy_main{
		width:50%;
		border:4px solid #444;
		border-radius: 6px;
		position: fixed;
		z-index: 101;
		top:20%;
		left:25%;
		background: white;
		opacity:0.95;
		padding:20px;
	}
	.buy_main .buy_content{
		width:100%;
		margin-bottom: 23px;
		margin-top:10px;
	}
	.buy_main .buy_content th{
		background: #4fc08d;
		color:white;
		display: flex;
		justify-content: space-around;
		font-size: 14px;
	}
	.buy_main .buy_content th td{

		border:1px solid #4fc08d;
	}
	.buy_main .buy_content tr{
		display: flex;
		justify-content: space-around;
	}
	.buy_main .buy_content td{
		padding:5px 0px;
		line-height: 22px;
		text-align: center;
		width:100%;
		border-right:1px solid #e3e3e3;
	}
	.buy_main .bank{
		margin-bottom: 20px;
	}
	.buy_main .bank h3{
		line-height: 26px;
		margin-bottom: 6px;
	}
	.buy_main .bank ul li{
		display: inline-block;
		border: 1px solid #e3e3e3;
		cursor: pointer;
		width:117px;
		height:32px;
		margin:5px;
	}
	.buy_main .bank ul li:nth-child(1){
		background: url("../assets/banks/banks.png");
	}

	.buy_main .bank ul li:nth-child(2){
		background: url("../assets/banks/banks.png") -117px 0px;
	}

	.buy_main .bank ul li:nth-child(3){
		background: url("../assets/banks/banks.png") -238px 0px;
	}

	.buy_main .bank ul li:nth-child(4){
		background: url("../assets/banks/banks.png") -356px 0px;
	}

	.buy_main .bank ul li:nth-child(5){
		background: url("../assets/banks/banks.png") -480px 0px;
	}

	.buy_main .bank ul li:nth-child(6){
		background: url("../assets/banks/banks.png") -599px 0px;
	}
	.buy_main .bank ul li:nth-child(7){
		background: url("../assets/banks/banks.png") -719px 0px;
	}	
	.buy_main .bank ul li:nth-child(8){
		background: url("../assets/banks/banks.png") -839px 0px;
	}
	.buy_main .but_p{
		text-align: center;
	}
	.buy_main .but_p .but{
		display: inline-block;
		border-radius: 4px;
		padding:10px;
		background: #4fc08d;
		color:white;
		text-decoration: none;
	}
	.buy_main .close{
		width:10px;
		height:10px;
		position: absolute;
		right:8px;
		top:10px;
		color:red;
		font-size: 14px;
		cursor: pointer;
	}
</style>