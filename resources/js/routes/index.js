import VueRouter from 'vue-router';

import SampleHome from '../views/SampleHome.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

import Home from '../views/Home.vue';
import Sample_1 from '../views/Sample_1.vue';
import Sample_2 from '../views/Sample_2.vue';
import Sample_3 from '../views/Sample_3.vue';
import Sample_4 from '../views/Sample_4.vue';
import Sample_5 from '../views/Sample_5.vue';
import Sample_6 from '../views/Sample_6.vue';
import Sample_7 from '../views/Sample_7.vue';
import Sample_8 from '../views/Sample_8.vue';
import Sample_9 from '../views/Sample_9.vue';
import Sample_10 from '../views/Sample_10.vue';
import Sample_11 from '../views/Sample_11.vue';
import Sample_12 from '../views/Sample_12.vue';
import Sample_13 from '../views/Sample_13.vue';
import Sample_14 from '../views/Sample_14.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter)

const Basic = {
  template: `    
    <transition name="fade-in" mode="out-in">
        <router-view></router-view>
    </transition>
  `
}

const Moderate = {
  template: `
    <transition name="fade-in" mode="out-in">
        <router-view></router-view>
    </transition>
  `
}

const Advanced = {
  template: `
    <transition name="fade-in" mode="out-in">
        <router-view></router-view>
    </transition>
  `
}

const routes = [
    { path: '/spa/', component: Home, name : 'home', meta : { title: 'Home', visible: true } },
    { 
        path: '', name: 'basic', component: Basic, meta : { title: 'Basic', visible: true },
        children: [
            { 
                path: '/spa/sample1', component: Sample_1, name: 'sample1',
                meta: {
                    title: 'Sample 1',
                    info: 'Input Binding | List (Static & Dynamic)',
                    next: 2,
                    prev: 0,
                    visible: true,                    
                } 
            },
            { 
                path: '/spa/sample2', component: Sample_2, name: 'sample2',
                meta: {
                    title: 'Sample 2',
                    info: 'Computed Property',
                    next: 3,
                    prev: 1,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample3', component: Sample_3, name: 'sample3',
                meta: {
                    title: 'Sample 3',
                    info: 'Components & Sub-Components',
                    next: 4,
                    prev: 2,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample4', component: Sample_4, name: 'sample4',
                meta: {
                    title: 'Sample 4',
                    info: 'Component Example | MessageBox, Modal',
                    next: 5,
                    prev: 3,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample5', component: Sample_5, name: 'sample5',
                meta: {
                    title: 'Sample 5',
                    info: 'Component Example | Tabs',
                    next: 6,
                    prev: 4,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample6', component: Sample_6, name: 'sample6',
                meta: {
                    title: 'Sample 6',
                    info: 'Named Slots | Scoped Slots | Inline Template',
                    next: 7,
                    prev: 5,
                    visible: true,                    
                }
            },   
        ]
    },
    { 
        path: '', name: 'moderate', component : Moderate, meta : { title: 'Moderate', visible: true },
        children: [
            { 
                path: '/spa/sample7', component: Sample_7, name: 'sample7',
                meta: {
                    title: 'Sample 7',
                    info: 'AJAX List | CRUD',
                    next: 8,
                    prev: 6,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample8', component: Sample_8, name: 'sample8',
                meta: {
                    title: 'Sample 8',
                    info: 'Shared State',
                    next: 9,
                    prev: 7,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample9', component: Sample_9, name: 'sample9',
                children : [
                    { path: 'home', components: { childRouterView : SampleHome }, name: 'sample9.home',
                        meta: {
                            title: 'Home | Sample 9',
                            next: 10,
                            prev: 8,
                            visible: false,
                        }
                    },    
                    { path: 'about', components: { childRouterView : About }, name: 'about',
                        meta: {
                            title: 'About | Sample 9',
                            next: 10,
                            prev: 8,
                            visible: false,
                        }
                    },                    
                    { path: 'contact', components: { childRouterView : Contact }, name: 'contact',
                        meta: {
                            title: 'Contact | Sample 9',
                            next: 10,
                            prev: 8,
                            visible: false,
                        }
                    }, 
                ],
                meta: {
                    title: 'Sample 9',
                    info: 'Vue Routers | Filters | Sticky Notes',
                    next: 10,
                    prev: 8,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample10', component: Sample_10, name: 'sample10',
                meta: {
                    title: 'Sample 10',
                    info: 'Component Example | Carousel',
                    next: 11,
                    prev: 9,
                    visible: true,                    
                }
            },
        ]
    },
    { 
        path: '', name: 'advanced', component : Advanced, meta : { title: 'Advanced', visible: true },
        children: [
            { 
                path: '/spa/sample11', component: Sample_11, name: 'sample11',
                meta: {
                    title: 'Sample 11',
                    info: 'Component Example | Testimonials',
                    next: 12,
                    prev: 10,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample12', component: Sample_12, name: 'sample12',
                meta: {
                    title: 'Sample 12',
                    info: 'Mega Menus | Vue Portal',
                    next: 13,
                    prev: 11,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample13', component: Sample_13, name: 'sample13',
                meta: {
                    title: 'Sample 13',
                    info: 'Reusability of Components',
                    next: 14,
                    prev: 12,
                    visible: true,                    
                }
            },
            { 
                path: '/spa/sample14', component: Sample_14, name: 'sample14',
                meta: {
                    title: 'Sample 14',
                    info: 'Conditional Visibility',
                    next: 0,
                    prev: 13,
                    visible: true,                    
                }
            },
        ]
    }, 
    { 
        path: '/spa/projects', component: Projects, name: 'projects',
        meta: {
            title: 'Projects',
            next: 8,
            prev: 6,
            visible: false,
        }
    },      
    
]

export default new VueRouter({
    mode: 'history',
    base:__dirname,
    routes
})
