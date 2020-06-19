<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-6">
                <div class="page-heading">
                  <h4>{{ pageHeading }}</h4>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-right pagination-link">
                    <router-link :to="{ name: 'sample'+this.prevPage }" class="custom-btn prev-btn" v-if="this.prevPage">
                      <span>Previous Sample</span>
                    </router-link>
                    <router-link :to="{ name: 'sample'+this.nextPage }" class="custom-btn prev-btn" v-if="this.nextPage">
                      <span>Next Sample</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "spa-pagination-link",
        props: ['site_name'],
        data() {
            return {
                nextPage: 0,
                prevPage: 0
            }
        },
        watch: {
           '$route': 'getPageData'
        },
        mounted() {
            this.getPageData()
        },
        computed: {
            pageHeading() {
                return this.$route.meta.title;
            }
        },
        methods: {
            getPageData() {
                document.title = this.$route.meta.title ? this.$route.meta.title +' | '+ this.site_name : this.site_name
                this.nextPage = this.$route.meta.next
                this.prevPage = this.$route.meta.prev
            }
        }
    }
</script>
