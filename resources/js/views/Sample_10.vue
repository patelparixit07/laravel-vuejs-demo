<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h4>Wrap Existing Tools Into Components</h4>
            </div>
            <div class="col-md-6">
            	<div class="component-block">
            		<label>Component : Carousel</label>
            	</div>
            </div>            
        </div>
        <div class="row">
        	<div class="col-md-12">
        		<h5><label class="badge badge-dark rounded-0 p-2"> Carousel 1 :</label> { width: default(1200), height: default(300), autoplay: false, wraparound: false } </h5>
                <carousel :autoplay='false' :wraparound='false'>
                    <img src="https://placeimg.com/300/300/any?1" style="max-height: 300px">
                    <img src="https://placeimg.com/300/300/any?2" style="max-height: 300px">
                    <img src="https://placeimg.com/300/300/any?3" style="max-height: 300px">
                    <img src="https://placeimg.com/300/300/any?4" style="max-height: 300px">
                    <img src="https://placeimg.com/300/300/any?5" style="max-height: 300px">
                </carousel>   
            </div>
        </div>
        <div class="row mt-5">
        	<div class="col-md-12">
        		<h5><label class="badge badge-dark rounded-0 p-2"> Carousel 2 :</label> { width: 500, height: 100, autoplay: default(true), wraparound: default(true) } </h5>
                <carousel :width='500' :height='100'>
                    <img src="https://placeimg.com/100/100/any?6" style="max-height: 100px">
                    <img src="https://placeimg.com/100/100/any?7" style="max-height: 100px">
                    <img src="https://placeimg.com/100/100/any?8" style="max-height: 100px">
                    <img src="https://placeimg.com/100/100/any?9" style="max-height: 100px">
                    <img src="https://placeimg.com/100/100/any?10" style="max-height: 100px">
                </carousel>            
            </div>
        </div>
    </div>
</template>

<script>
	import Carousel from '../components/Carousel.vue';
	
	export default {
		components: { Carousel },
		data() {
	        return {
	        }
	    }
	}
</script>