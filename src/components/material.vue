<template>
     <table ref="table" id="listEntries" summary="" rules="groups" frame="hsides" border="2">
    <thead>LIst of Subscribed {{capitalized | formatDate}}</thead>
  <md-content class="md-scrollbar">
  <tr v-for="todo in todos">
    
      <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{todo}}</div>
          <div class="md-subhead">aldinmujkic44@gmail.com</div>
        </md-card-header-text>

        <md-card-media>
          <img src="../assets/logo.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Delete</md-button>
        <md-button>Edit</md-button>
      </md-card-actions>
    </md-card>
    
  </tr>
  </md-content>
  </table>
    
    
</template>
<script>
export default {
    name: 'material',
   data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
}
</script>
<style scoped>
  .md-scrollbar{
    width:100%;
    max-height:90vh;
    overflow: scroll;
  }
</style>