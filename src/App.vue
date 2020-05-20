<template>
    <div>
        <form-helper>
          <div slot="form-header">
            <h3>This is the Title of the Form</h3>
            <p>Information about the form</p>
          </div>
          <div slot="form-fields">
            <input type="text" placeholder="name" required />
            <input type="password" placeholder="password" required />
          </div>
          <div slot="form-controls">
            <button @click="handleSubmit">Submit</button>
          </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formOne from './components/formOne';
import formTwo from './components/formTwo';

export default {
    components: {
        'form-one': formOne,
        'form-two': formTwo
    },
    data () {
        return {
         
        }
    },
    methods: {
        
    }
}
</script>

<style>
body{
    margin: 0;
}
</style>