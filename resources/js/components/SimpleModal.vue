<template>
	<div class="modal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header bg-dark text-white">
					<h5 class="modal-title">{{ title }}</h5>
					<button type="button" class="close" @click="$emit('close')">
					  <span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<p><slot></slot></p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" @click="$emit('close')">Close</button>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
	export default {
		props: ['title']
	}
</script>