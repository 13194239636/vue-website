<template>
	<div>
		<div class="container">
		</div>
		<div class="input">
			<span @click="hidden()">x</span>
			<p class="username">
				<label for="username">用户名：</label>
				<input type="text" name="username" id="username" v-model="username">
			</p>
			<p class="password">
				<label for="password">密码  ：</label>
				<input type="password" name="password" id="password" v-model="password">
			</p>
		</div>
	</div>
	
</template>
<script>
export default{
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    hidden () {
      this.$emit('hidden', 1)
    }
  }
}
</script>
<style scoped>
	.container{
		position: absolute;
		z-index: 100;
		top:0px;
		left:0px;
		right:0px;
		bottom:0px;
		background:#444;
		opacity:0.4;
	}
	.input{
		width:360px;
		border:4px solid #444;
		border-radius: 6px;
		position: absolute;
		z-index: 101;
		top:20%;
		left:50%;
		margin:-70px 0px 0px -200px;
		background: white;
		opacity:0.95;
		padding:20px;
	}
	.input p{
		margin: 15px 0px;
		text-align:center;
	}
	.input span{
		width:10px;
		height:10px;
		position: absolute;
		right:10px;
		top:6px;
		color:red;
		font-size: 20px;
		cursor: pointer;
	}
</style>