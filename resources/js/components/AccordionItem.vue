<template>
	<div class="card text-white bg-dark" >
	    <div class="card-header">
	        <a class="" href="Javascript:void(0);" @click="toggle">
	          <i class="fa fa-plus-circle fa-1x text-light"></i>
	        </a>
	        <span class="fa-1x pl-3"> {{ item.title }} </span>  
	    </div>

	    <div class="collapse show" v-show="isOpen">
	      <div class="card-body">
	        {{ item.description }}
	      </div>
	    </div>
	</div>
</template>

<script>
	export default {
		props: ['item','isOpen'],
		methods: {
			toggle() {
				this.$emit('toggled',this.$vnode.key)
			}
		}
	}
</script>