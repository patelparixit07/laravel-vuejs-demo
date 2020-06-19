<template>
	<span class="badge badge-dark p-5">
		<h1 v-text="count"></h1>
	</span>
</template>

<script>
	import inViewport from 'in-viewport';

	export default {
		props: ['to'],
		data() {
			return {
				count: 0,
				interval: null
			}			
		},
		computed: {
			increment() {
				return Math.ceil(this.to / 20);
			}
		},
		mounted() {		
			inViewport(this.$el, () => {
				this.interval = setInterval(this.tick,50);
			});			
		},
		methods: {
			tick() {
				if ( this.count + this.increment >= this.to ) {
					this.count = this.to;
					return clearInterval(this.interval);
				}					
				return this.count += this.increment;				
			}
		}
	}
</script>