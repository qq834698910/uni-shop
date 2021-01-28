<template>
	<view class="news">
		<view v-for="(news,index) in newsArr" :key="index" @click="toDetail(news.id)"  >
			<text>
				{{news.title}}
			</text>
		</view>
	</view>
</template>

<script>
	import {ReqNews} from '../../api/index.js'
	export default {
		data() {
			return {
				newsArr:[]
			}
		},
		onLoad(){
			this.getNews()
		},
		methods: {
			async getNews(){
				let res = await ReqNews()
				res = res.data
				this.newsArr=res.message
			},
			toDetail(id){
				uni.navigateTo({
					url:`/pages/news_detail/news_detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
 .news{
	 view{
		 height: 200rpx;
		 line-height: 200rpx;
		 border-bottom: 2rpx #e2e2e2 solid;
	 }
 }
</style>
