<template>
    <div class="container">
	    <div class="row">
	        <div class="col-md-4">
	            <h4>Input Binding</h4>
	            <div class="form-group">
	                <input type="text" name="textbox1" v-model='message' class="form-control" autocomplete="off">
	            </div>
	            <h5><label class="badge badge-dark rounded-0 p-2">Input text is :</label> {{ message }}</h5>
	        </div>
	        <div class="col-md-4">
	            <h4>List (Static)</h4>
	            <ul class="list-group list-group-flush">
	                <li v-for="user in users" class="list-group-item list-group-item-action">{{ user.name }}</li>    
	            </ul>
	        </div>
	        <div class="col-md-4">
	            <h4>List (Dynamic) <br/> & Elements Attribute Binding</h4>
	            <ul class="list-group list-group-flush">
	                <li v-for="post in posts" v-text='post' class="list-group-item list-group-item-action"></li>    
	            </ul>
	            <div class="form-group mt-3">
	                <input type="text" name="post_textbox" id="post_textbox" v-model="newPost" class="form-control">                
	            </div>
	            <button name="add_post" id="add_post" @click="addPostToDom" :title="buttonTitle" :class="buttonClass" :disabled="newPost.length <= 0">Add Post</button>
	        </div>
	    </div>
    </div>
</template>

<script>
	export default {
		data() {
	        return {
	        	message: 'Hello World!' ,
                users: [
                    {'id': 1, 'name': 'John'},
                    {'id': 2, 'name': 'Mark'},
                    {'id': 3, 'name': 'Joshef'},
                    {'id': 4, 'name': 'Duo'},
                ],
                posts: ['Post 1','Post 2','Post 3','Post 4'],
                newPost: '',
                buttonTitle: 'Add Post Button',
                buttonClass: '',
                primaryClass: 'btn btn-primary-custom',
                secondaryClass: 'btn btn-secondary-custom',
	        }
	    },
	    created() {
	    	this.buttonClass = this.primaryClass
	    },
		methods: {
			addPostToDom() {
                this.posts.push(this.newPost);
                this.newPost = '';
                // Toggle color
                this.buttonClass = (this.buttonClass == this.primaryClass) ? this.secondaryClass : this.primaryClass;
            }     
		}
	}
</script>