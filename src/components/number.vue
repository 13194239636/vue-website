<template>
	<div class="number_selecter">
		<div class="decrease" @click="decrease()">-</div>
		<div class="number_show">{{num}}</div>
		<div class="increase" @click="increase()">+</div>
	</div>
</template>
<script>
import Bus from '../bus/'
export default {
  data () {
    return {
      num: 1
    }
  },
  mounted () {
  	var _this = this
    Bus.$on('getData',function () {
      Bus.$emit('getNum',_this.num)
    })
  },
  methods: {
    decrease () {
      if (this.num !== 1) this.num--
    },
    increase () {
      this.num++
    }
  }
}
</script>
<style scoped>
.number_selecter{
	width:84px;
	height:27px;
	display: flex;
	justify-content:space-around;
	align-items: center; 
	border:1px solid #e3e3e3;
}
.number_selecter div{
	width:27px;
	line-height: 27px;
	text-align: center;
	font-weight: bold;
}
.number_selecter .decrease{
	border-right:1px solid #e3e3e3;
	cursor: pointer;
}
.number_selecter .number_show{
	width:30px;
	line-height: 23px;
	font-size: 12px;
}
.number_selecter .increase{
	border-left:1px solid #e3e3e3;
	cursor: pointer;
}
</style>