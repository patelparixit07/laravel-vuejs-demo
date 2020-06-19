<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h4>Component Example 1 (Message Box)</h4>
            </div>
            <div class="col-md-6">
                <div class="component-block">
            		<label>Component : MessageBox</label>
            	</div>
            </div>
        </div>
        <div class="row">
        	<div class="col-md-6">
                <message-box title="Example Message" message="This is description of example message!"></message-box>    
            </div>
            <div class="col-md-6">
                <message-box title="Another Example Message" message="This is description of another example message!"></message-box>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
            	<div class="row">
                    <div class="col-md-6">
                        <h4>Component Example 2 (Modal Popup)</h4>
                    </div>
                    <div class="col-md-6">
                    	<div class="component-block">
		            		<label>Component : SimpleModal</label>
		            	</div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-2">
            	<div class="col-md-6">
	                <div class="row">
	                	<div class="col-md-4">
	                        <simple-modal v-show="loginModal" @close="loginModal = false" title="Login">
	                            This is Login Modal content
	                        </simple-modal>
	                        <button type="button" class="btn btn-dark" @click="loginModal = true">
	                          Login
	                        </button>
	                    </div>
	                    <div class="col-md-4">
	                        <simple-modal v-show="registerModal" @close="registerModal = false" title="Register">
	                            This is Register Modal content
	                        </simple-modal>
	                        <button type="button" class="btn btn-dark" @click="registerModal = true">
	                          Register
	                        </button>
	                    </div>
	                    <div class="col-md-4">
	                        <simple-modal v-show="shareModal" @close="shareModal = false" title="Share">
	                            This is Share Modal content
	                        </simple-modal>
	                        <button type="button" class="btn btn-dark" @click="shareModal = true">
	                          Share
	                        </button>
	                    </div>
	                </div>
	            </div>
            </div>            
        </div>
    </div>
</template>

<script>
	import MessageBox from '../components/MessageBox';
	import SimpleModal from '../components/SimpleModal';
    
	export default {
		components: { MessageBox, SimpleModal },
		data() {
	        return {
	        	loginModal: false,
                registerModal: false,
                shareModal: false
	        }
	    }
	}
</script>