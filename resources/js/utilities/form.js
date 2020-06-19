import Errors from './errors';

class Form {
    
    constructor(data) {

        this.originalData = data;
        for ( let field in data ) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    fill(data) {
        this.originalData = data;
        for ( let field in data ) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }

    reset() {
        for ( let field in this.originalData ) {
            this[field]= '';
        }
        this.errors.clear();
    }

    data() {
        let data = {};
        for ( let property in this.originalData ) {
            data[property] = this[property];
        }
        return data;
    }

    post(url) {
        return this.submit('post',url);
    }

    delete(url) {
        return this.submit('delete',url);   
    }

    put(url) {
        return this.submit('put',url);
    }

    submit(requestType,url){
        return new Promise((resolve,reject) => {
            axios[requestType](url,this.data())
            .then(response => {
                this.onSuccess(response.data);
                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error.response.data);
                reject(error.response.data);
            })
        });        
    }

    onSuccess(data) {        
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.errors)
    }

}

export default Form;