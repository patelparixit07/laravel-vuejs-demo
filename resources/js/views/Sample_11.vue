<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h4>Testimonials</h4>
            </div>
            <div class="col-md-6">
            	<div class="component-block">
            		<label>Component : Testimonials</label>
            	</div>
            </div>
        </div>
        <div class="row">
        	<div class="col-md-12">
        		<h5 class="text-center"><label class="badge badge-dark rounded-0 p-2">>>>>>> Hover over thumbnails to get info on right side bar ! <<<<<< </label></h5>
            	<testimonials></testimonials>
        	</div>
        </div>
    </div>
</template>

<script>
	import Testimonials from '../components/Testimonials.vue';
	
	export default {
		components: { Testimonials },
		data() {
	        return {
	        }
	    }
	}
</script>