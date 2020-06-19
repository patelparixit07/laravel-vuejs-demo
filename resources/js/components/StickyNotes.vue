<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">                                
                <h4>Sticky Notes</h4>                
                <ul class="list-group list-group-flush">
                    <li v-for="note, index in notes" class="list-group-item list-group-item-action">
                        {{ note.text }}
                    </li>
                </ul>                
            </div>
            <div class="col-md-6">
                <alert type="success" v-if="success" @close="hideAlert">
                    <template slot="message">{{ message }}</template>
                </alert>
                <alert type="error" v-if="fail" @close="hideAlert">
                    <template slot="message">{{ message }}</template>
                </alert>
                <form class="form-horizontal" role="form" method="POST" @submit.prevent="submitNote" @keydown="form.errors.clear($event.target.name)">
                    <div class="form-group">                        
                        <label for="text">Note</label>
                        <textarea name="text" class="form-control" autocomplete="off" v-model="form.text"></textarea>
                        <span class="help-block" v-if="form.errors.has('text')">
                            <strong v-text="form.errors.get('text')"></strong>
                        </span>
                    </div>
                    <button type="submit" class="btn btn-dark" :disabled="form.errors.any()">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Alert from '../components/Alert';

    export default {
        components: { Alert },
        data() {
            return {
                notes: [],
                success: false,
                fail: false,
                message: '',
                form: new Form({
                    text: '',
                }),
            }
        },
        created() {
            let self = this;
            axios.get('/notes')
            .then( function(response) {
                let resData = response.data;
                self.notes = resData;
            });

            this.$on('completed',(note)=>{
                this.notes.unshift(note);
            });
        },
        methods: {
            submitNote() {
                this.form.post('/note')
                .then( data => {
                    this.success = (data.success == true);
                    this.fail = (data.success == false);
                    this.message = data.message;

                    this.$emit('completed',data.response);
                })
                .catch( error => {
                });
            },
            hideAlert() {
                this.success = false;
                this.fail = false;
            },
        }
    }
</script>
