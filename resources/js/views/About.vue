<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4>About Page</h4>
                <p>About Page Content Goes Here ...</p>
            </div>            
        </div>
        <hr>
        <div class="row">            
            <div class="col-md-12">
                <div class="component-block">
                    <label>Components : StickyNotes, Alert</label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <sticky-notes></sticky-notes>
            </div>
        </div>
    </div>
</template>

<script>
    import StickyNotes from '../components/StickyNotes';

    export default {
        components: { StickyNotes },
        data() {
            return {                
            }
        }        
    }
</script>