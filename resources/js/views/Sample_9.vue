<template>
    <div class="container">
        <div  class="row">
            <div class="col-md-12">
                <h4>Vue Routers (With Sub RouterView)</h4>
                <small>For Single Page Application</small>
            </div>
            <div class="col-md-12">
            	<h5 class="text-center"><label class="badge badge-dark rounded-0 p-2">>>>>>> Click on below links to navigate ! <<<<<< </label></h5>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark is-active">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        	<router-link :to="{ name: 'sample9.home' }" exact><a class="nav-item nav-link">Home</a></router-link>
                        	<router-link :to="{ name: 'about' }" exact><a class="nav-item nav-link">About</a></router-link>
                            <router-link :to="{ name: 'contact' }" exact><a class="nav-item nav-link">Contact</a></router-link>
                        </div>
                    </div>
                </nav>	                
                <section class="mt-2 border border-dark">
                    <router-view class="mt-5 mb-3" name="childRouterView"></router-view>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
	        return {
	        }
	    }
	}
</script>