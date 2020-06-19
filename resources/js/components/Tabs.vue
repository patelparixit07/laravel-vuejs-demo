<template>
	<div>
        <ul class="nav nav-tabs">
          <li class="nav-item" v-for="tab in tabs">
            <a class="nav-link" :class="{'active' : tab.isActive}" @click="tabSelected(tab)" :href="tab.href">{{ tab.name }}</a>
          </li>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
                tabs: []
            }
		},
		created() {
            this.tabs = this.$children;
        },
        methods: {
            tabSelected(selectedTab) {
                this.tabs.forEach( tab => {
                    tab.isActive = ( tab.name == selectedTab.name );
                });
            }
        }
	}
</script>