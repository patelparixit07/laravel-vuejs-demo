<template>
	<div :style="{ width: width + 'px', height: height + 'px' }" class="aaa"> 
		<slot></slot>
	</div>
</template>

<script>
	import Flickity from 'flickity';
	import 'flickity/dist/flickity.min.css';
	
	export default{
		props: {
			wraparound: { default: true },
			autoplay: { default: true },
			width: { default: '1200' },
			height: { default: '300' },
		},
		mounted() {	
			new Flickity(this.$el,{
				wrapAround: this.wraparound,
				autoPlay: this.autoplay,
				cellAlign: "left",
				contain: true
			});
		}		
	}
</script>