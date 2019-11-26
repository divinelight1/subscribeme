<template id="main-page">
<div id="root">
<input type="text" v-model="text"/>
<button @click="addTodo()">Add</button>
<button @click="removeTodo()">Asdfdd</button>
<ul>
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
</div>
</div>

   
</template>

<script>

export default {
  name: 'HomePage',
  data(){
        return{
            text: null,
            todos: []
        }
        
    },
   mounted () {
  const todos = JSON.parse(this.$localStorage.get('todos'))
  if (todos) {
    this.todos = todos
  }
},
 methods:{
        addTodo () {
  this.todos.push(this.text)
  this.text = null
  this.$localStorage.set('todos', JSON.stringify(this.todos))
},
removeTodo(){
    localStorage.clear();
    this.todos = []
}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo-holder img {
    width: 50%;
    display: block;
    margin: auto;
}
input[type="text"] {
    width: 80%;
    font-size: 50px;
    border: 1px solid;
    padding: 10px 20px;
    margin: auto !important;
    margin-top: 25px !important;
    display: block;
    text-align: center;
    border-radius: 4px;
}
input[type="checkbox"] {
    margin-top: 20px;
}
button {
    width: 84%;
    padding: 10px 20px;
    border: 1px solid;
    font-size: 50px;
    margin-top: 25px;
}
.hompeage-content{
    padding-bottom: 50px;
}
</style>
