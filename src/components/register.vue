<template>
	<div>
		<div class="container">
		</div>
		<div class="reg">
			<span @click="hidden()">x</span>
			<p class="username_for_reg">
				<label for="username_for_reg">用户名：</label>
				<input type="text" name="username_for_reg" id="username_for_reg" v-model="username">
			</p>
			<p class="password1">
				<label for="password1">密码  ：</label>
				<input type="password" name="password1" id="password1" v-model="password1">
			</p>
			<p class="password2">
				<label for="password1">确认密码  ：</label>
				<input type="password" name="password2" id="password2" v-model="password2">
			</p>
		</div>
	</div>
	
</template>
<script>
export default{
  data () {
    return {
      username: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    hidden () {
      this.$emit('hidden', 2)
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
	.reg{
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
	.reg p{
		margin: 15px 0px;
		text-align:center;
	}	
	.reg span{
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