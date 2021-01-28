<template>
		<view class="goods_list">
			<view v-for="(goods,index) in goodsArr" :key='index' @click="toDel(goods.id)">
				<view>
					<image :src="goods.img_url && 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=387264399,2368088084&fm=26&gp=0.jpg'"></image>
				</view>
		
				<view class="price">
					<text>￥{{goods.sell_price}}</text>
					<text>￥{{goods.market_price}}</text>
				</view>
				<view>
					<text>
						{{goods.title}}
					</text>
				</view>
			</view>
		</view>
</template>

<script>
	export default{
		props:['goodsArr'],
		methods:{
			toDel(id){
				this.$emit('toGoodsDel',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	
		view {
			width: 373rpx;
			background: #fff;
			margin-bottom: 4rpx;
	
			image {
				width: 100%;
			}
		}
	
		.price {
			text:first-of-type {
				font-size: 18px;
				color: red;
				margin-right: 20rpx;
			}
	
			text:last-of-type {
				font-size: 16px;
				text-decoration: line-through;
	
			}
		}
	}
</style>
