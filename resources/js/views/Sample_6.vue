<template>
    <div class="container">
        <div  class="row">
            <div class="col-md-6">
            	<div class="row">
            		<div class="col-md-6">
            			<h4>Named Slot</h4>
            		</div>
            		<div class="col-md-6">
            			<div class="component-block">
		            		<label>Component : Modal</label>
		            	</div>
            		</div>
            	</div>                
                <div class="row">
                	<div class="col-md-12">
		                <modal @close="is_active=false" v-show="is_active">
		                    <template slot="header">
		                        Modal title
		                    </template>
		                    This is modal content
		                    <template slot="footer">
		                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		                        <button type="button" class="btn btn-secondary-custom">Save changes</button>
		                    </template>
		                </modal>
		                <button @click="is_active=true" class="btn btn-dark">Open Modal</button>
		            </div>
                </div>
            </div>
            <div class="col-md-6">
            	<div class="row">
            		<div class="col-md-6">
            			<h4>Inline Template</h4>
            		</div>
            		<div class="col-md-6">
            			<div class="component-block">
		            		<label>Component : ProgressView</label>
		            	</div>
            		</div>
            	</div>
                <div class="row">
            		<div class="col-md-12">
            			<progress-view inline-template>
		                    <div class="progress-view">
		                        <h5><label>Completion rate is : {{ completionRate }}% </label></h5>
		                        <button @click="completionRate += 10" class="btn btn-dark">Update Completion Rate</button>
		                    </div>
		                </progress-view>
            		</div>
            	</div>
            </div>            
        </div>
        <div class="row mt-5">
        	<div class="col-md-6">
            	<div class="row">
            		<div class="col-md-6">
            			<h4>Scoped Slots</h4>
                        <h6><small>To override rendering of third party packages</small></h6>
            		</div>
            		<div class="col-md-6">
            			<div class="component-block">
		            		<label>Component : TodoList</label>
		            	</div>
            		</div>
            	</div>
                <div class="row">
            		<div class="col-md-12">
            			<todo-list :items="['One','Two','Three']">
		                    <template slot-scope="data" slot="todo-item">
		                        <i v-text="data.itemValue"></i>    
		                    </template>
		                </todo-list>
            		</div>
            	</div>
            </div>
        </div>
    </div>
</template>

<script>
	import TodoList from '../components/TodoList';
	import Modal from '../components/Modal';
	import ProgressView from '../components/ProgressView';	
	
	export default {
		components: { TodoList, Modal, ProgressView },
		data() {
	        return {
	        	is_active: false
	        }
	    }
	}
</script>