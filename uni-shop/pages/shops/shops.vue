<template>
	<goodsList :goodsArr="goodsArr" @toGoodsDel='toGoodsDel'></goodsList>
</template>

<script>
	import goodsList from '../../components/goods-list.vue'
	import { ReqGoods} from '../../api/index.js'
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				page:1,
				goodsArr:[]
			}
		},
		mounted() {
			this.getGoods()
		},	
		methods: {
			async getGoods() {
				let res = await ReqGoods(this.page)
			
				res = res.data
				console.log(res)
				this.goodsArr =this.goodsArr.concat(res.message)
			},
			onReachBottom(){
				if(this.page<=3){
					this.page++
					this.getGoods()
				}
			
			},
			onPullDownRefresh(){
				if(this.page<=3){
					this.page++
					this.getGoods()
				}
				 setTimeout(function () {
				            uni.stopPullDownRefresh();
				  }, 1000);
				
			},
			toGoodsDel(id){
				uni.navigateTo({
					url:'/pages/goods_detail/goods_detail?id='+id
				})
			}
		}
	}
</script>

<style>

</style>
