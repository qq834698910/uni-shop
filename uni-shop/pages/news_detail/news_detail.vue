<template>
	<view>
	<view v-for="(del,index) in delArr" :key='index'>
		<text v-html="del.content"></text>
	</view>
	</view>
</template>

<script>
	import {ReqNewsDel} from '../../api/index.js'
	export default {
	
		data() {
			return {
				delArr:[]
			}
		},
		onLoad(options){
			this.getDel(options.id)
		},
		methods: {
			async getDel(id){
				let res = await ReqNewsDel(id)
				res=res.data
				console.log(res)
				this.delArr=res.message
			}
		}
	}
</script>

<style>

</style>
