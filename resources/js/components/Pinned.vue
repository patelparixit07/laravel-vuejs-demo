<template>
	<div :class="fixedToTop">
		<slot></slot>
	</div>
</template>

<script>
	import {throttle} from 'lodash';

	export default {		
		data() {
			return {
				fixedToTop: ''
			}
		},
		mounted() {
			let self = this;
			let el = this.$el;
			let offset = this.getOffsetTop(el);
			window.addEventListener('scroll', 
				throttle(function() {
					let scroll = window.scrollY;
					if ( scroll > offset )
						self.fixedToTop = 'top-fixed';
					else
						self.fixedToTop = '';
				},100)
			);
		},
		methods: {
			getOffsetTop(element) {
				let offsetTop = 0;
				while ( element ) {
					offsetTop += element.offsetTop;
					element = element.offsetParent;
				}
				return offsetTop;
			}
		}
	}
</script>