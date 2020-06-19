<template>
	<li :class="isDropdown ? 'nav-item dropdown' : 'nav-item'" v-if="isVisible">
		<router-link
		  :to="{name: route.name}"
		  :class="isDropdown ? 'nav-link dropdown-toggle' : 'nav-link'" 
		  :role="isDropdown ? 'button' : '' " :data-toggle="isDropdown ? 'dropdown' : '' " :aria-haspopup="isDropdown ? true : '' " :aria-expanded="isDropdown ? false : '' "
		  :event="isDropdown ? '' : 'click'"
		>{{ title }}</router-link>   

		<div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="route.children && route.children.length">
			<spa-menu-item v-for="(r,i) in route.children" :key="i" :route="r" class="ml-3"></spa-menu-item>
		</div>    
	</li>
</template>

<script>
    export default {
    	name: "spa-menu-item",
    	props: {
			route: {
			  type: Object
			}
		},
        computed: {
	        title() {
	            return this.route.meta.title
	                   .toLowerCase()
	                   .split("-")
	                   .map(s => s.charAt(0).toUpperCase() + s.slice(1))
	                   .join(" ");
	        },
	        isDropdown() {
	        	let childs = [];
	        	if ( this.route.children && this.route.children.length ) {
					$.each(this.route.children, function(key, value) {
					    (value.meta.visible == true) ? childs.push(key) : '';
					});
				}
	            return  (childs.length) ? true : false;
	        },
	        isVisible() {
				if ( this.route.meta && (this.route.meta.visible === undefined || this.route.meta.visible) ) {
					return true;
				}
				return false;
		    },
	    },
    }
</script>
