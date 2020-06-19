<template>
	<ul>
		<li v-for="item in items">
			<slot :itemValue="item" name="todo-item"></slot>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['items']
	}
</script>