<template>
    <div class="container">
	    <div  class="row">
	    	<div class="col-md-12">
	    		<div class="component-block">
            		<label>Component : Modal</label>
            	</div>
	    	</div>
	    </div>
        <div  class="row">
            <div class="col-md-12">
            	<button class="btn btn-dark" data-toggle="modal" @click="openModal">Add New</button>
                <table class="table mt-2 mb-5">
				  <thead>
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Name</th>
				      <th scope="col">Description</th>
				      <th scope="col">Action</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr v-for="project, index in projects">
				      <th scope="row">{{ index + 1 }}</th>
				      <td>{{ project.name }}</td>
				      <td>{{ project.description | stripText }}</td>
				      <td>
						    <a href="javascript:void(0);" data-id="project.id" @click="editProject(project)">
	                            <i class="fa fa-edit"></i>
	                        </a>
	                        <a href="javascript:void(0);" @click="deleteProject(project.id)">
	                            <i class="fa fa-trash"></i>
	                        </a>					      		
				      </td>
				    </tr>
				    <tr v-if="projects.length == 0" class="text-center">
				    	<td colspan="4">No project found</td>
				    </tr>
				  </tbody>
				</table>
            </div>
	    </div>	

		<form class="form-horizontal" role="form" method="POST" @submit.prevent="editMode ? updateProject() : createProject()" @keydown="form.errors.clear($event.target.name)">
			<modal @close="closeModal" v-show="showModal">
	            <template slot="header">
	                <h5 v-show="!editMode" class="modal-title">Add New Project</h5>
		            <h5 v-show="editMode" class="modal-title">Update Project</h5>
	            </template>
				<input type="hidden" name="_token" :value="csrf">
				<div class="form-group">
				    <label for="name">Project Name</label>
				    <input type="text" name="name" class="form-control" autocomplete="off" v-model="form.name">
				    <span class="help-block" v-if="form.errors.has('name')">
				        <strong v-text="form.errors.get('name')"></strong>
				    </span>
				</div>
				<div class="form-group">
				    <label for="description">Project Description</label>
				    <textarea name="description" class="form-control" autocomplete="off" v-model="form.description"></textarea>
				    <span class="help-block" v-if="form.errors.has('description')">
				        <strong v-text="form.errors.get('description')"></strong>
				    </span>
				</div>
	            <template slot="footer">
	                <button type="button" class="btn btn-danger" data-dismiss="modal" @click="closeModal">Close</button>
	                <button v-show="editMode" type="submit" class="btn btn-secondary-custom" :disabled="form.errors.any()">Update</button>
	                <button v-show="!editMode" type="submit" class="btn btn-secondary-custom" :disabled="form.errors.any()">Create</button>
	            </template>
	        </modal>
		</form>

    </div>
</template>

<script>
	import 'sweetalert2/dist/sweetalert2.min.css';
	import Modal from '../components/Modal.vue';

	export default {
		components: { Modal },
		data() {
	        return {
	        	showModal: false,
	        	editMode: false,
	        	projects: [],
                form: new Form({
                    name: '',
                    description: '',
                }),                
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
	        }
	    },
	    created() {
	    	this.loadProjects();
            this.$on('completed', () => {
            	this.showModal = false;
                this.loadProjects();
            });
        },
        filters: {
			stripText(text) {
				let body = text.replace(/(<([^>]+)>)/ig, '');
            	return body.length > 25 ? body.substring(0, 25) + '...' : body;
			}
		},
		methods: {
			openModal() {
	           this.editMode = false;
	           this.form.reset();
	           this.showModal = true;
	        },
	        closeModal() {
				this.showModal = false;
				this.form.reset();
			},
	        loadProjects() {
	        	axios.get("/projects")
	        	.then( response => {
	        		this.projects = response.data
	        	});
	        },
			createProject() {
                this.form.post('/project')
                .then( data => {
                	if ( data.success ) {
	                	this.$emit('completed');
	                    this.$swal({
						  type: 'success',
						  title: 'Created!',
						  text: data.message,
						  confirmButtonColor: '#3fb984',
						});
                    }
                }).catch( error => {                	
                });
            },
            editProject(project) {
	           this.editMode = true;
	           this.form.reset();
	           this.showModal = true;
	           this.form.fill(project);
	        },
            updateProject() {
				this.form.put('/project/'+this.form.id)
			    .then( data => {
			   		if ( data.success ) {
			   			this.$emit('completed');
			            this.$swal({
						  type: 'success',
						  title: 'Updated!',
						  text: data.message,
						  confirmButtonColor: '#3fb984',
						});
			   		}						
			    }).catch( error => {
			    });
	        },
	        deleteProject(id) {
	            this.$swal({
	              title: 'Are you sure?',
	              text: "You won't be able to revert this!",
	              type: 'warning',
	              showCancelButton: true,
	              confirmButtonColor: '#3fb984',
	              cancelButtonColor: '#dc3545',
	              confirmButtonText: 'Yes, delete it!'
	            }).then( (result) => {	                
					if (result.value) {
						this.form.delete('/project/'+id)
					    .then( data => {
					    	if ( data.success ) {
					    		this.$emit('completed');
					    		this.$swal({
					              type: 'success',
								  title: 'Deleted!',
								  text: data.message,
								  confirmButtonColor: '#3fb984',
					            });                		
					    	}
					    }).catch( error => {
					    });
					}
	            });	          
	        }           
		}
	}
</script>