<template>
    <div class="container">
        <div class="row">
          <div class="col-md-6">
              <h4>Reusability of Components (With Dynamic Data)</h4>
          </div>
          <div class="col-md-6">
			<div class="component-block">
				<label>Parent Component : Accordion</label>
				<label>Child Component : AccordionItem</label>
			</div>
          </div>
        </div>
        <div class="row">
			<div class="col-md-12 mt-5">
				<h4 class="text-center mb-5"><i class="fa fa-star"></i> Accordion 1 <i class="fa fa-star"></i></h4>
				<accordion :items = languages></accordion>
			</div>
			<div class="col-md-12 mt-5">
				<h4 class="text-center mb-5"><i class="fa fa-star"></i> Accordion 2 <i class="fa fa-star"></i></h4>
				 <accordion :items = contacts></accordion> 
			</div>
        </div>
    </div>
</template>

<script>
	import Accordion from '../components/Accordion.vue';

	export default {
		components: { Accordion },
		data() {
	        return {
	        	contacts: [],
                languages: []
	        }
	    },
		created() {
            let self = this;
            
            axios.get('/contacts')
            .then( function (response) {
                self.contacts = response.data;
            });

            axios.get('/languages')
            .then( function (response) {
                self.languages = response.data;
            });
        }
	}
</script>