<template>
	<div>
		<div class="container">
		</div>
		<p>
			<span @click="hidden()">x</span>
			本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。
		</p>
	</div>
	
</template>
<script>
export default{
  data () {
    return {
      type: 3
    }
  },
  methods: {
    hidden () {
      this.$emit('hidden', this.type)
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
	p{
		width:360px;
		border:2px solid #444;
		border-radius: 6px;
		position: absolute;
		z-index: 101;
		top:20%;
		left:50%;
		margin:-70px 0px 0px -200px;
		background: white;
		opacity:0.95;
		padding:20px;
		font-size: 14px;
		line-height: 1.5;
		text-indent:28px;
	}
	p span{
		width:20px;
		height:20px;
		position: absolute;
		right:30px;
		top:2px;
		color:red;
		font-size: 20px;
		cursor: pointer;
	}
</style>