<template>
	<div class="header">
		<router-link to="/"><img src="../assets/logo.png"></router-link>
		<ul>
			<li @click="showLogoin()"><a href="#">登录</a></li>
			<li></li>
			<li @click="showRegister()"><a href="#">注册</a></li>
			<li></li>
			<li @click="showFollow()"><a href="#">关于</a></li>
		</ul>
	</div>
</template>
<script>
export default {
  methods: {
    showLogoin () {
      this.$emit('showLogoin')
    },
    showRegister () {
      this.$emit('showRegister')
    },
    showFollow () {
      this.$emit('showFollow')
    }
  }
}
</script>
<style scoped>
	.header{
		width:100%;
		height:90px;
		background:#363636;
		color:#b2b2b2;
		vertical-align: baseline;
	}
	.header img{
		float: left;
		width:50px;
		height:50px;
		padding-left:50px;
		margin-top:20px;
	}
	.header ul{
		float: right;
		padding-right:50px;
		margin-top:38px;
	}
	.header ul li {
		float: left;
		height: 14px;
	}
	.header ul li:nth-child(2),.header ul li:nth-child(4){
		display: inline-block;
		background: #b2b2b2;
		width:1px;
		height:10px;
		margin:0px 10px;
		padding-top:6px;
	}
	.header ul li a{
		color:#b2b2b2;
		font-size: 14px;
		text-decoration: none;
	}
</style>