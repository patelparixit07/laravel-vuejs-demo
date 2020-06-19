<template>
	<div @mouseover="active=true" @mouseout="active=false" class="p-2"> 
		<div class="menu-link">
			<a class="nav-link" href="#">Projects</a>
		</div>
		<portal to="nav-content">
			<div class="container mx-auto">
				<div class="row">
					<div class="col-md-12">
						<div class="menu-content p-5" v-show="active" @mouseover="active=true" @mouseout="active=false" style="background: white;color:white;position: absolute;width: 100%;height: 300px;z-index: 9;">
						    <div class="row">
						    	<div class="col-md-4">
						    		<div class="list-group list-group-flush">	
								    	<a href="javascript:void(0);" :class="(currentSkill == skill) ? 'selected' : ''" v-for="skill in skills" class="list-group-item list-group-item-action text-dark" @mouseover="updateSkill(skill)">{{ skill }}</a>
								    </div>
						    	</div>
						    	<div class="col-md-8">
						    		<div class="list-group list-group-flush">	
								    	<a href="#" v-for="proj in skillProjects" class="list-group-item list-group-item-action text-dark proj">{{ proj }}</a>
								    </div>
						    	</div>
						    </div>
						</div>		
					</div>
				</div>
			</div>
		</portal>
	</div>
</template>

<script>
	export default {
		props: {
			name
		},
		data() {
			return {
				active: false,
				projects: {
							'PHP': ['Proj 1','Proj 2','Proj 3'],
							'Javascript': ['Proj 4','Proj 5'],
							'VueJs': ['Proj 6','Proj 7'],
							'Java': ['Proj 8','Proj 9','Proj 10','Proj 11'],
							'Python': ['Proj 12'],
						  },
				skills: ['PHP','Javascript','VueJs','Java','Python'],
				currentSkill: 'PHP',
			}
		},
		methods: {
			updateSkill(skill) {				
				this.currentSkill = skill;
			}
		},
		computed: {
			skillProjects() {
				return this.projects[this.currentSkill];	
			}
		},
		mounted() {
			this.currentSkill = 'PHP';
		}
	}
</script>

<style type="text/css">
	.selected {
		border-bottom: 5px solid;
    	font-weight: bold;
	}
	.proj:hover {
		border-bottom: 2px solid !important;
    	font-weight: bold !important;
	}
</style>