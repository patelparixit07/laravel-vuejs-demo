<template>
    <div class="container">
        <div class="row">
          <div class="col-md-6">
              <h4>Conditional Visibility ( Using Component )</h4>
          </div>
          <div class="col-md-6">
          	<div class="component-block">
        		<label>Components : ConditionalElement, Modal, With ViewPort</label>
        	</div>
          </div>             
        </div>
        <div class="row">
			<div class="col-md-12 mt-5">
				<a href="javascript:void(0);" @click="is_active=true" class="btn btn-dark" id="js-reply">Reply</a>
                <h5 class="text-center"><label class="badge badge-dark rounded-0 p-2">>>>>>> Scroll Down <<<<<< </label></h5>
			</div>
			<div class="spacer1000"></div>
			<div class="col-md-12">
                <h5 class="text-center"><label class="badge badge-dark rounded-0 p-2">>>>>>> Scroll Up <<<<<< </label></h5>
				<conditional-element when-hidden="#js-reply" when-visible="">
				    <a href="javascript:void(0);" @click="is_active=true" class="btn btn-dark rounded-circle bottom-fixed"><i class="fa fa-plus"></i></a>
				</conditional-element>            
			</div> 
        </div>

        <modal @close="is_active=false" v-show="is_active">
            <template slot="header">
                Reply
            </template>
            <textarea cols="10" rows="5" class="form-control"></textarea>
            <template slot="footer">
                <button type="button" class="btn btn-secondary-custom">Reply</button>
            </template>
        </modal>
    </div>
</template>

<script>
	import Modal from '../components/Modal.vue';
	import ConditionalElement from '../components/ConditionalElement.vue';

	export default {
		components: { Modal, ConditionalElement },
		data() {
	        return {
	        	is_active: false
	        }
	    }
	}
</script>
