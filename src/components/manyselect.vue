<template>
	<div class="radio">
		<ul>
			<li v-for="item in data" :class="{'selected':item.sel}" @click="item.sel=!item.sel">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
import Bus from '../bus/'
export default{
  props: {
    data: {
      type: Array
    }
  },
  computed: {
    selectedOption () {
      let arr=[]
      for(let i=0; i<this.data.length; i++){
        if(this.data[i].sel){
          arr.push(this.data[i])
        }
      }
      return arr
    }
  },
   mounted () {
  	var _this = this
    Bus.$on('getData',function () {
      Bus.$emit('getms',_this.selectedOption)
    })
  },
}
</script>
<style scoped>
	.radio{
		display: inline-block;
	}
	.radio ul li{
	float: left;
	line-height: 25px;
	padding:0px 8px;
	margin-right:5px;
	background: white;
	border:1px solid #e3e3e3;
	border-radius: 3px;
	cursor: pointer;
	font-size: 14px;
}
.radio ul li.selected{
	border-color:#4fc08d;
	background: #4fc08d;
	color:white;
}
</style>