<template>
	<view>
		<page-head title="swiper,可滑动视图"></page-head>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<image class="imgSr" src="http://img5.adesk.com/5e625158e7bce739db1282fe?imageMogr2/thumbnail/!750x480r/gravity/Center/crop/750x480" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image class="imgSr" src="http://img5.adesk.com/5ddd240231f61344e284036a?imageMogr2/thumbnail/!750x480r/gravity/Center/crop/750x480" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image class="imgSr" src="http://img5.adesk.com/5df758e0e7bce739c4b3b699?imageMogr2/thumbnail/!750x480r/gravity/Center/crop/750x480" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {
			console.log(this.initData());
		},
		methods: {
			initData(){
				this.$myRequest({
					url:'/image/v1/vertical/category',
				})
			}
		}
	}
</script>

<style>
	.uni-margin-wrap {
		/* width: 690rpx; */
	}
	.imgSr{
		width: 100%;
		height: 300rpx;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
</style>
