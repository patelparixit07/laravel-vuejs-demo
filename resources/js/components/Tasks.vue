<template>
	<div>
		<ul class="list-group list-group-flush">
			<task v-for="(task, taskKey) in tasks" :key="taskKey">{{ task.description }}</task>
		</ul>
	</div>
</template>

<script>
	import Task from '../components/Task';

	export default {
		components: { Task },
		data() {
			return {
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
		}
	}
</script>