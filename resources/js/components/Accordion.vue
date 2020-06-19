<template>
	<div class="accordion" id="accordion_example">
		<accordion-item 
			v-for="(item,index) in items" 
			:item="item"
			:key="index" 
			:is-open="activeIndex == index" 
			@toggled="onToggle"
			></accordion-item>
    </div>
</template>

<script>
	import AccordionItem from './AccordionItem.vue';

	export default {
		props: ['items'],
		components: { AccordionItem },
		data() {
			return {
				activeIndex: null
			}			
		},
		methods: {
			onToggle (index) {
				if ( this.activeIndex == index ) 
				{
					return ( this.activeIndex = null );					
				}
				this.activeIndex = index;
			}
		}
		
	}
</script>