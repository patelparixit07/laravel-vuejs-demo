<template>
    <div class="container">
        <div  class="row">            
            <div class="col-md-8">
                <h4>AJAX Request</h4>
                <ul class="list-group list-group-flush">
                    <li v-for="skill in skills" class="list-group-item">
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="col-md-4 text-center">
                <h4>CRUD</h4>
                <h6>Add / Edit / Delete Operations to Database</h6>
                <router-link :to="{ name: 'projects' }" class="btn btn-dark">
                    Projects
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
	        return {
                skills: [],
	        }
	    },
	    created() {
            let self = this;
            axios.get('/skills')
            .then( function (response) {
                self.skills = response.data;
            });
        }
	}
</script>