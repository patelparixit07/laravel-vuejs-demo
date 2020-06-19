<template>
    <div class="container">
	    <div  class="row">
	        <div class="col-md-12">
	            <h4>Shared State</h4>
	            <small>To share state of data with multiple components</small>
	        </div>
	    </div>
	    <div class="row mt-5">
	    	<div class="col-md-6">
	            <h5><label class="badge badge-dark rounded-0 p-2">State 1</label></h5>
	            <state1></state1>
	        </div>
	        <div class="col-md-6">
	            <h5><label class="badge badge-dark rounded-0 p-2">State 2</label></h5>
	            <state2></state2>
	        </div>
	    </div>
    </div>
</template>

<script>	
	let store = {
        message: 'This is shared message!'
    }

    Vue.component('state1', {
	  data: function () {
	    return {
	      title: 'State 1 Title',
	      shared: store,
	    }
	  },
	  template: '<div><p>{{title}}</p><p>{{shared.message}}</p></div>'
	});

	Vue.component('state2', {
	  data: function () {
	    return {
	      title: 'State 2 Title',
	      shared: store,
	    }
	  },
	  template: '<div><p>{{title}}</p><p>{{shared.message}}</p></div>'
	})
</script>