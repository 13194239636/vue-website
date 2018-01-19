<template>
	<div>
		<div class="bg">
		</div>
		<div class="check_buy">
			<router-link to="/my"><span class="close" @click="hiddenResult()">X</span></router-link>
			<p>
				购买<slot name="text">成功</slot>
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
  	hiddenResult () {
  	  this.$emit('hiddenResult')
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
	.check_buy .close{
		width:10px;
		height:10px;
		position: absolute;
		right:8px;
		top:10px;
		color:red;
		font-size: 14px;
		cursor: pointer;
	}
	.check_buy p{
		line-height: 20px;
		font-size: 14px;
	}
</style>