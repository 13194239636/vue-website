<template>
	<div class="selectform">
		<span>&darr;</span>
		<div class="selected_show" @click="toggle()">{{str}}</div>
		<ul v-if="show">
			<li v-for="(val,key) in data" @click="sel(val)">{{val}}</li>
		</ul>
	</div>
</template>
<script>
import Bus from '../bus/'
export default {
  data () {
    return {
      show: false,
      temp:''
    }
  },
   mounted () {
  	var _this = this
    Bus.$on('getData',function () {
      Bus.$emit('getsf',_this.str)
    })
  },
  computed: {
    str () {
      return this.temp||this.data[0]
    }
  },
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    sel (str) {
      this.temp = str
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
	.selectform{
		display: inline-block;
	}
	.selected_show{
		height: 25px;
		line-height: 25px;
		padding:0px 20px 0px 10px;
		font-size: 14px;
		border:1px solid #e3e3e3;
		border-radius: 3px;
		cursor: pointer;
	}
	.selectform span{
		float: right;
		line-height: 25px;
		padding-right:6px;
		color:#e3e3e3;
		cursor: pointer;
	}
	.selectform ul{
		background: white;
		border:1px solid #e3e3e3;
	}
	.selectform ul.show{
		display: block
	}
	.selectform ul li{
		line-height: 25px;
		padding:0px 20px 0px 10px;
		cursor: pointer;
	}
	.selectform ul li:hover{
		background:#e3e3e3;
	}
</style>