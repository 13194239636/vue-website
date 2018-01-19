<template>
	<div class="wrapper">
		<div class="picture">
			<img :src="src">
		</div>
		<div class="text_and_button">
			<p  class="text_title"><slot name="title"></slot></p>
			<p  class="text_content"><slot name="content"></slot></p>
			<router-link :to="to" class="button">立即购买</router-link>
		</div>
	</div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  props: {
    src: {
      type: String
    },
    to: {
      type: String
    }
  }
}
</script>
<style scoped>
.wrapper{
	width:400px;
	height:120px;
	display: inline-block;
	padding:20px;
	background:white;
	margin:0px 20px 20px 0px;
}
.wrapper .picture{
	float:left;
	width:110px;
	height:110px;
	overflow: hidden;
}
.wrapper .picture .img{
	width:100%;
	height:100%;
}
.wrapper .text_and_button{
	padding-left:130px;
}
.wrapper .text_title{
	width:100%;
	line-height: 20px;
	color:black;
	font-weight: bold;
	font-size: 18px;
	margin-bottom:8px;
}
.wrapper .text_content{
	width:100%;
	line-height: 30px;
	color:gray;
	font-size: 14px;
	margin-bottom:8px;
}
.wrapper .button{
	display: inline-block;
	border-radius: 4px;
	padding:10px;
	background: #4fc08d;
	color:white;
	text-decoration: none;
}
</style>