<template>
    <div id="options" class="md-layout">   
        <md-button class="md-accent md-raised" @click="removeTodo()">Remove All</md-button>
        <md-button class="md-accent md-raised" @click="tableToExcel('table', 'List of subscribed')">Export All</md-button>
    </div>
</template>

<script>
export default {
    name: 'Options',
    data(){
        return{
            text: null,
            todos: []
        }
        
    }  
}
</script>

<style  scoped>

</style>