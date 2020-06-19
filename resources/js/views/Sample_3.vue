<template>
    <div class="container">
	    <div class="row">
            <div class="col-md-6">
            	<h4>Component (With Sub-Component)</h4>
            </div>
            <div class="col-md-6">
            	<div class="component-block">
            		<label>Parent Component : Tasks</label>
            		<label>Child Component : Task</label>
            	</div>
            </div>
	    </div>
	    <div class="row">
	    	<div class="col-md-12">
	    		<tasks></tasks>
	    	</div>	    	
	    </div>
    </div>
</template>

<script>
    import Tasks from '../components/Tasks';

	export default {
        components: { Tasks }
	}
</script>