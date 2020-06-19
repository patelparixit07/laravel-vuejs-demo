<template>
	<div class="jumbotron jumbotron-fluid bg-dark text-white" v-show="isVisible">
		<button type="button" class="close text-white" @click="hideMessage">
			<h2 aria-hidden="true">×</h2>
		</button>
		<div class="container">
			<h1 class="display-4">{{ title }}</h1>
			<p class="lead">{{ message }}</p>
		</div>
    </div>
</template>

<script>	
	export default {
		props: ['title','message'],
		data() {
			return {
                isVisible: true
            }
		},
		methods: {
            hideMessage() {
                this.isVisible = false;
            }
        }
	}
</script>