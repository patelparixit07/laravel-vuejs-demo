<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Home Page</h4>
                <p>Home Page Content Goes Here ...</p>
				<hr>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Skills</h4>
                        <small>Use of models to make axios call to database</small>
                        <ul class="list-group list-group-flush">
                            <li v-for="skill in skills" class="list-group-item">
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <div class="component-block">
                            <label>Model : skills</label>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
	import skills from '../models/skills';

	export default {
		data() {
	        return {
	        	skills: [],
	        }
	    },
		created() {
			skills.all(skills => this.skills = skills);	        
		}
	}
</script>