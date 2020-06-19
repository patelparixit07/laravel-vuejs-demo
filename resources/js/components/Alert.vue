<template>
	<div class="alert" :class="classObj" role="alert">
		<slot name="message"></slot>
		<button type="button" class="close" @click="$emit('close')">
			<span aria-hidden="true">&times;</span>
		</button>
    </div>
</template>

<script>
	export default {
		props: ['type'],
		data() {
			return {
                classObj: {
                    'alert-success' : this.type == 'success',
                    'alert-danger' : this.type == 'error'
                }
            }
		},
		created() {
            let _this = this
            setTimeout(function(){
                _this.$emit('close');
            }, 5000);
        }
	}
</script>