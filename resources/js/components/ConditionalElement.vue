<template>
	<transition name="fade">
		<div v-show="isVisible">
			<slot> </slot>
		</div>
	</transition>
</template>

<script>
	import inViewport from 'in-viewport';

	export default {
		props: ['whenHidden', 'whenVisible'],
		data() {
			return {
				isVisible: false
			}
		},
		mounted() {
			this.checkDisplay();
			window.addEventListener('scroll',this.checkDisplay,{passive:true});
		},
		methods: {
			checkDisplay() {
				this.whenVisible ?
					this.isVisible = inViewport(
						document.querySelector(this.whenVisible)
					) :
					this.isVisible = !inViewport(
						document.querySelector(this.whenHidden)
					);
			}
		}
	}
</script>

<style type="text/css">
	.fade-enter-active,.fade-leave-active {
		transition: opacity 0.3s;
	}
	.fade-enter,.fade-leave-to {
		opacity: 0;
	}
</style>