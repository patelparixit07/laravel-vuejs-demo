<template>
    <div class="container">
        <div class="row">                
            <div class="col-md-4 list-type1" v-for="route in routes" v-if="route.children && route.children.length">
              <ul>
                <li>{{ title(route) }}</li>
                <li v-for="childRoute in route.children">
                    <span>{{ title(childRoute) }}</span>
                    <router-link
                      :to="{name: childRoute.name}"
                    >{{ routeInfo(childRoute) }}</router-link>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
	        return {
	        }
	    },
        computed: {
            routes() {
              return this.$router.options.routes;
            },
            title: function () {
                return function (route) {
                  return route.meta.title
                       .toLowerCase()
                       .split("-")
                       .map(s => s.charAt(0).toUpperCase() + s.slice(1))
                       .join(" ");  
                };
            },
            routeInfo: function () {
                return function (route) {
                  return route.meta.info || ''
                };
            }            
        }
	}
</script>