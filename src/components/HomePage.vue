<template id="main-page" >

<!-- layout / content -->
<div id="root" class="md-layout">
  <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
     <!-- name input foeld -->
     <md-field>
      <label>Your Name</label>
      <md-input v-model="text"></md-input>
    </md-field>
    <!-- email input field -->
    <md-field>
      <label>Your Mail</label>
      <md-input v-model="mail"></md-input>
    </md-field>
    <!-- privacy checkbox -->
    <md-checkbox v-model="array" value="1">Agree Privacy Policy</md-checkbox>
  </div>

  <!-- sign up and delete buttons -->
  <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
    <md-button class="md-accent md-raised" @click="addTodo()">Sign Up</md-button>
    <md-button class="md-accent md-raised" @click="removeTodo()">Delete All</md-button>
  </div>
</div><!-- /md-layout -->
</template>

<script>

export default {
  name: 'HomePage',
  data(){
        return{
          text: null,
          mail: null,
          todos: [],
          mails: [],
          array: [],
        }
        
    },
  mounted () {
    const todos = JSON.parse(this.$localStorage.get('todos'))
    if (todos) {
      this.todos = todos
    };
    const mails = JSON.parse(this.$localStorage.get('mails'))
    if (mails) {
      this.mails = mails
    };
  },
  methods:{
    addTodo () {
      this.todos.push(this.text)
      this.mails.push(this.mail)
      this.text = null
      this.mail = null
      this.$localStorage.set('todos', JSON.stringify(this.todos))
      this.$localStorage.set('mails', JSON.stringify(this.mails))
    },
    removeTodo(){
      localStorage.clear();
      this.mails = [];
      this.todos = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
