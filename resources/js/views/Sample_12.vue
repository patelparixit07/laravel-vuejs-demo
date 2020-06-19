<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Mega Menus (One To One Relationship) & Vue Portal</h4>
            </div>
        </div>
        <div class="row">
        	<div class="col-md-12">
        		<div class="component-block">
            		<label>Components : MenuLink, Pinned</label>
            	</div>
				<pinned>
					<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white p-0">
					  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					    <span class="navbar-toggler-icon"></span>
					  </button>
					  <div class="collapse navbar-collapse" id="navbarNav">
					    <ul class="navbar-nav mx-auto">
					      <li class="nav-item">
					        <menu-link></menu-link>
					      </li>
					      <li class="nav-item">
					        <div class="p-2">
					          <a class="nav-link" href="#">Services</a>  
					        </div>
					      </li>
					    </ul>
					  </div>
					</nav>
					<portal-target name="nav-content">	                  
					</portal-target>
				</pinned>                                        
            </div>

            <div class="col-md-12 mt-5 text-center">
				<div class="component-block">
            		<label>Component : Counter</label>
            	</div>
				<counter :to="15"></counter>
				<counter :to="2000"></counter>
				<counter :to="5155"></counter>
            </div>

            <div class="col-md-12 mt-5">
            	<div class="component-block">
            		<label>Component : Testimonials</label>
            	</div>
				<testimonials></testimonials>
            </div>

            <div class="col-md-12 mt-5">
            	<div class="component-block">
            		<label>Component : Carousel</label>
            	</div>
				<carousel :autoplay='false' :wraparound='false' :width='1110' :height='300'>
				  <img src="https://placeimg.com/300/300/any?1" style="max-height: 300px">
				  <img src="https://placeimg.com/300/300/any?2" style="max-height: 300px">
				  <img src="https://placeimg.com/300/300/any?3" style="max-height: 300px">
				  <img src="https://placeimg.com/300/300/any?4" style="max-height: 300px">
				  <img src="https://placeimg.com/300/300/any?5" style="max-height: 300px">
				</carousel>   
            </div> 
        </div>
        <div class="row">
			<div class="col-md-12 text-center">
				<div class="component-block">
            		<label>Component : Counter, With ViewPort</label>
            	</div>
				<counter :to="99"></counter>
				<counter :to="888"></counter>
				<counter :to="9000"></counter>
			</div>
        </div>
        <div  class="row">
			<div class="col-md-12">
				<div class="component-block">
            		<label>Components : ContactUs, Modal</label>
            	</div>
				<contact-us></contact-us>                    
			</div>
        </div>
    </div>
</template>

<script>
	import Carousel from '../components/Carousel.vue';
	import Testimonials from '../components/Testimonials.vue';
	import MenuLink from '../components/MenuLink.vue';
	import ContactUs from '../components/ContactUs.vue';
	import Pinned from '../components/Pinned.vue';
	import Counter from '../components/Counter.vue';

	export default {
		components: { Carousel, Testimonials, MenuLink, ContactUs, Pinned, Counter},
		data() {
	        return {
	        }
	    }
	}
</script>