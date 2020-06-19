<template>
    <div class="container">	    
	    <div class="row">        
	        <div class="col-md-4">
	            <h4>Computed Example 1</h4>
	            <div class="form-group">
	                <label>Message Input :</label>
	                <input type="text" name="message_input" v-model="message" class="form-control" autocomplete="off">
	            </div>
	            <h5><label class="badge badge-dark rounded-0 p-2">Original Message :</label> {{ message }} </h5>
	            <h5><label class="badge badge-dark rounded-0 p-2">Reversed Message :</label> {{ reversedMessage }} </h5>
	        </div>
	        <div class="col-md-8">
	            <h4>Computed Example 2</h4>
	            <label>Categorize Tasks Based On Completed Status :</label>
	            <div class="row text-center">
	                <div class="col-md-4">
	                    <h5><label class="badge badge-dark rounded-0 p-2">All Tasks</label></h5>
	                    <ul class="list-group list-group-flush">
	                        <li v-for="task of tasks" v-text="task.description" class="list-group-item list-group-item-action"></li>
	                    </ul>
	                </div>
	                <div class="col-md-4">
	                    <h5><label class="badge badge-dark rounded-0 p-2">Completed Tasks</label></h5>
	                    <ul class="list-group list-group-flush">
	                        <li v-for="task of completedTasks" v-text="task.description" class="list-group-item list-group-item-action"></li>
	                    </ul>
	                </div>
	                <div class="col-md-4">
	                    <h5><label class="badge badge-dark rounded-0 p-2">Incomplete Tasks</label></h5>
	                    <ul class="list-group list-group-flush">
	                        <li v-for="task of incompleteTasks" v-text="task.description" class="list-group-item list-group-item-action "></li>
	                    </ul>
	                </div>
	            </div>
	        </div>    
	    </div>
    </div>
</template>

<script>
	export default {
		data() {
	        return {
	        	message: 'Hello World!',
                tasks: [
                    {'description': 'Task 1', 'completed': false},
                    {'description': 'Task 2', 'completed': true},
                    {'description': 'Task 3', 'completed': false},
                    {'description': 'Task 4', 'completed': false},
                    {'description': 'Task 5', 'completed': true},
                    {'description': 'Task 6', 'completed': false},
                    {'description': 'Task 7', 'completed': true},
                ]
	        }
	    },
		computed: {
            reversedMessage() {
                return this.message.split('').reverse().join('');
            },
            completedTasks() {
                return this.tasks.filter(task=> task.completed);
            },
            incompleteTasks() {
                return this.tasks.filter(task=> ! task.completed);
            }
        }   
	}
</script>