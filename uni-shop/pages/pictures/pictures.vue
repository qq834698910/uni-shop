<template>
	<view class="picture">
			<scroll-view scroll-y  class="left">
				<view v-for="(picture,index) in pictureArr" @click="changeNum(index,picture.id)" :class="num===index?'active':'' "  :key='index'>
					<text>{{picture.title}}</text>
				</view>
		
			</scroll-view>
			<scroll-view class="right" scroll-y>
				<view v-for="(p,index) in picArr" :key='index' >
					<image :src="p.img_url"></image>
					<text>{{p.title}}</text>
					
				</view>
				<view v-show="picArr.length===0">
					<text>暂时没有图片</text>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {ReqPictures,ReqPic} from '../../api/index.js'
	export default {
		data() {
			return {
				pictureArr:[],
				num:0,
				picArr:[],
				id:14
			}
		},
		onLoad(){
			this.getPiceture()
			this.getPic()
		}
		,
		methods: {
			async getPiceture(){
				let res = await ReqPictures()
				
				res = res.data
				this.pictureArr = res.message
			},
			changeNum(num,id){
				this.num=num
				this.id=id
				this.getPic()
			},
			async getPic(){
				let res = await ReqPic(this.id)
				
				res = res.data
				this.picArr = res.message
			},
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.picture {
		height: 100%;
		display: flex;
    .left {
		width: 300rpx;
		
		height: 100%;
		border-right: 2rpx solid #e2e2e2;
		
		view {
			 height: 150rpx;
			 line-height: 150rpx;
			 text-align: center;
			 font-size: 40rpx;
			 border-bottom: 2rpx solid #e2e2e2;
		}
		.active {background: red;}
	}
	.right {
		width:450rpx;
	}
	 
	}

</style>
