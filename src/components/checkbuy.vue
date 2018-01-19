<template>
	<div>
		<div class="bg">
		</div>
		<div class="check_buy">
			<p>
				请检查您的支付状态！
				<a href="#" @click="buySuccess()">支付成功</a>
				<a href="#" @click="buyFail()">支付失败</a>
			</p>
		</div>
	</div>
	
</template>
<script>
export default{
  data () {
    return {
    }
  },
  methods: {
  	buySuccess () {
  	  this.$emit('buySuccess')
  	},
  	buyFail () {
  	  this.$emit('buyFail')
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
	.check_buy{
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
	.check_buy p{
		line-height: 20px;
		font-size: 14px;
	}
	.check_buy p a{
		display: inline-block;
		border-radius: 4px;
		padding:10px;
		background: #4fc08d;
		color:white;
		text-decoration: none;
	}
</style>