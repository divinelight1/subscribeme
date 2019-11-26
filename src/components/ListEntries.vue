
<template>

<div id="listentries">
<ul>
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>  
</div>
   
</template>

<script>
import Options from './Options';
export default {
    name: 'ListEntries',
    data () {
    return {
      todos: [],
      completed: [],
      dataFields: ['todos', 'completed']
    }
  },
  mounted () {
    this.dataFields.forEach(field => this.checkStorage(field))
  },
  methods: {
    checkStorage (key) {
      if (localStorage.getItem(key)) {
        try {
          this[key] = JSON.parse(localStorage.getItem(key))
        } catch (e) {
          localStorage.removeItem(key)
        }
      }
    }
  }
   
}
</script>

<style  scoped>

</style>