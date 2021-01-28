<template>
	<view>
		<view class="banner">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(lunbo,index) in lunboArr" :key="index">
					<image :src="lunbo.img ? lunbo.img :'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3405729749,1040550632&fm=26&gp=0.jpg' "></image>
				<text>{{lunbo.img}}</text>
				</swiper-item>

			</swiper>
		</view>
		<view class="slide-bar">
			<view @click="toGoal('/pages/shops/shops')">
				<view class="iconfont icon-shipin"></view>
				<text>黑马超市</text>
			</view>
			<view @click="toGoal('/pages/contact/contact')">
				<view class="iconfont icon-tupian"></view>
				<text>联系我们</text>
			</view>
			<view @click="toGoal('/pages/pictures/pictures')">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>社区图片</text>
			</view>
			<view @click="toGoal('/pages/videos/videos')">
				<view class="iconfont icon-ziyuan"></view>
				<text>学习视屏</text>
			</view>
		</view>
		<view class="hot_goods">
			<view class="title">
				<text>推荐商品</text>
			</view>
			<goodsList :goodsArr='hotGoodsArr'></goodsList>
		</view>


	</view>
</template>

<script>
	import '../../static/fonts/iconfont.css'
	import {
		Reqlubo,
		ReqGoods
	} from '../../api/index.js'
	import goodsList from '../../components/goods-list.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				lunboArr: [],
				hotGoodsArr: []
			}
		},
		components:{goodsList},
		onLoad() {
			this.getlunbo()
			this.getHotGoods()
		},
		methods: {
			async getlunbo() {
				let res = await Reqlubo()
				res = res.data

				this.lunboArr = res.message
			},
			//获取推荐商品
			async getHotGoods() {
				let res = await ReqGoods(1)

				res = res.data
				console.log(res)
				this.hotGoodsArr = res.message
			},
			toGoal(url) {
				uni.navigateTo({
					url
				})
			}

		}
	}
</script>

<style lang="scss">
	.banner {
		margin-bottom: 20rpx;

		image {
			width: 750rpx;
			height: 375rpx;
		}

		uni-swiper {
			height: 375rpx;
		}
	}

	.slide-bar {
		display: flex;
		margin-bottom: 20rpx;

		view {
			flex: 1;
			text-align: center;

			view {
				width: 140rpx;
				height: 140rpx;
				background: red;
				line-height: 140rpx;
				margin: 0 auto 10rpx;
				border-radius: 50%;
			}

			.iconfont {
				font-size: 80rpx;
				color: #fff;
			}

			text {
				font-size: 36rpx;
			}
		}

	}

	.hot_goods {
		background: #e2e2e2;
		padding-top: 6rpx;

		.title {
			line-height: 80rpx;
			background: #fff;
			text-align: center;
			font-size: 22px;
			color: red;
			letter-spacing: 10px;
			margin-bottom: 4rpx;
		}

	
	}
</style>
