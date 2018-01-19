<template>
	<div class="container">
		<router-link to="/detail/count">
	      	<ul class="slide-ul">
				<li><img src="../assets/slideShow/pic1.jpg"></li>
				<li><img src="../assets/slideShow/pic2.jpg"></li>
				<li><img src="../assets/slideShow/pic3.jpg"></li>
				<li><img src="../assets/slideShow/pic4.jpg"></li>
			</ul>
		</router-link>
		<div class="controlbar">
			<ul>
				<li @click="increase"><</li>
				<li @click="select(1)" :class="{selected:1==selnum}">1</li>
				<li @click="select(2)"  :class="{selected:2==selnum}">2</li>
				<li @click="select(3)"  :class="{selected:3==selnum}">3</li>
				<li @click="select(4)"  :class="{selected:4==selnum}">4</li>
				<li @click="decrease">></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      marginLeft: 0,
      selnum: 1
    }
  },
  mounted () {
    setInterval(function () {
      this.marginLeft >= 2700 ? this.marginLeft = 0 : this.marginLeft += 900
      this.selnum >= 4 ? this.selnum = 1 : this.selnum++
    }, 4000)
  },
  watch: {
    marginLeft () {
      var oSlideUl = document.getElementsByClassName('slide-ul')[0]
      oSlideUl.style.marginLeft = -this.marginLeft + 'px'
    }
  },
  methods: {
    select (num) {
      this.marginLeft = (num - 1) * 900
      this.selnum = num
    },
    increase () {
      this.marginLeft <= 0 ? this.marginLeft = 2700 : this.marginLeft -= 900
      this.selnum <= 1 ? this.selnum = 4 : this.selnum--
    },
    decrease () {
      this.marginLeft >= 2700 ? this.marginLeft = 0 : this.marginLeft += 900
      this.selnum >= 4 ? this.selnum = 1 : this.selnum++
    }
  }
}
</script>
<style scoped>
.container{
		width:900px;
		height:400px;
		overflow: hidden;
		position: relative;
	}
	.container .slide-ul{
		width:3600px;
		transition: linear .3s;
	}
	.container .slide-ul li{
		float:left;
		width:900px;
		height:400px;
		overflow: hidden;
	}
	.container .slide-ul li img{
		width:100%;
		height:100%;
	}
	.container .controlbar{
		position: absolute;
		right: 0px;
		left:0px;
		bottom:0px;
		background:black;
		opacity: 0.5;
		padding:0px 15px;
		height:30px;
		line-height: 30px;
	}
	.container .controlbar ul{
		float: right;
	}
	.container .controlbar li{
		float: left;
		width:10px;
		height:10px;
		text-align: center;
		color:white;
		margin-right:10px;
		cursor:pointer;
	}
	.container .controlbar li:hover{
		color:red;
	}
	.container .controlbar li.selected{
		text-decoration: underline;
	}
</style>