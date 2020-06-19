<template>
    <ul class="navbar-nav mr-auto">
        <spa-menu-item v-for="(r,i) in routes" :key="i" :route="r"></spa-menu-item>
    </ul>
</template>

<script>
    import SpaMenuItem from './MenuItem';

    export default {  
        name: "spa-menu",
        components: { SpaMenuItem },
        computed: {
            routes() {
              return this.$router.options.routes;
            }
        }
    }
</script>
