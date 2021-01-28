<template>
	<view>
	        <view class="page-body">
	            <view class="page-section page-section-gap">
	                <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
	                </map>
	            </view>
	        </view>
	    </view>
</template>

<script>
	export default {
		data() {
			return  {
            id:0, // 使用 marker点击事件 需要填写id
            title: '啦啦啦啦',
            latitude: 36.119464,
            longitude: 103.677153,
            covers: [{
                latitude:36.119464,
                longitude: 103.677153,
                iconPath: 'https://hellouniapp.dcloud.net.cn/static/location.png',
				
            }]
        }
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
