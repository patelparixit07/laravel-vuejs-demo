<template>
    <div class="page-footer font-small unique-color-dark p-4 bg-dark">
		<div class="container text-white text-center">
			<a href="javascript:void(0);" class="btn btn-light" @click="showmodal = true"> Contact Us</a>
		</div>

		<form class="form-horizontal" role="form" method="POST" @submit.prevent="submit" @keydown="form.errors.clear($event.target.name)">
    		<modal @close="showmodal=false" v-show="showmodal">
                <template slot="header">
                    Contact
                </template>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="form-control" autocomplete="off" v-model="form.name">
                    <span class="help-block" v-if="form.errors.has('name')">
                        <strong v-text="form.errors.get('name')"></strong>
                    </span>
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input type="email" name="email" class="form-control" autocomplete="off" v-model="form.email">
                    <span class="help-block" v-if="form.errors.has('email')">
                        <strong v-text="form.errors.get('email')"></strong>
                    </span>
                </div>
                <div class="form-group">
                    <label for="description">Your Question</label>
                    <textarea name="question" class="form-control" autocomplete="off" v-model="form.question"></textarea>
                    <span class="help-block" v-if="form.errors.has('question')">
                        <strong v-text="form.errors.get('question')"></strong>
                    </span>
                </div>
                <template slot="footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
    		        <button type="submit" class="btn btn-secondary-custom" :disabled="form.errors.any()">Save</button>
                </template>
            </modal>
        </form>

    </div>
</template>

<script>
	import 'sweetalert2/dist/sweetalert2.min.css';
	import Modal from './Modal.vue';

	export default {
		data() {
			return {
				showmodal: false,
				form: new Form({
                    name: '',
                    email: '',
                    question: '',
                }),
			}			
		},
		components: { Modal },
		methods: {
			submit() {
				this.form.post('/contact')
                .then( data => {
                	if ( data.success ) 
						this.$swal({
						  type: 'success',
						  title: 'Success',
						  text: data.message
						});
					else
						this.$swal({
						  type: 'error',
						  title: 'Oops...',
						  text: data.message
						});

					this.showmodal = false;
                })
                .catch( error => {
                });
			},
			cancel() {
				this.showmodal = false;
				this.form.reset();
			}
		}
	}
</script>