<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>Contact Page</h4>
                <p>Contact Page Content Goes Here ...</p>
				<hr>
                <h4>Vue Filters</h4>
                <h5><label class="badge badge-dark rounded-0 p-2">Original Text :</label> {{ text }}</h5>
                <h5><label class="badge badge-dark rounded-0 p-2">Updated Text :</label> {{ text | capitalize }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data() {			
			return {
				text: 'Filters are useful for inline operations...',
			}
		},
		filters: {
			capitalize(text){
				return text.toUpperCase();
			}
		},
		mounted() {
			console.log('Contact Page Mounted');
		}

	}
</script>