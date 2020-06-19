<template>
  <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title"><slot name="header"></slot></h5>
            <button type="button" class="close" @click="$emit('close')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot>Default Content</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">Modal Footer</slot>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
	export default {
      data() {
        return {		
        }
      }
	}
</script>