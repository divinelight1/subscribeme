
<template>
<div id="listentries" class="md-layout">

<!-- export button -->
<div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
  <md-button class="md-accent md-raised" @click="tableToExcel('table', 'List of subscribed')">Export All</md-button>
</div>
 <!-- table of entries -->
 <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
  <md-content class="md-scrollbar">
    <table ref="table" id="listEntries" summary="" rules="groups">
        <tr v-for="todo in todos">
          <!-- entry card -->
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
          </md-card><!-- /entry card -->
        </tr>
    </table>
  </md-content>
 </div><!-- table row -->

</div><!-- /md-layout -->
</template>

<script>
import Options from './Options';
export default {
    name: 'ListEntries',
    data () {
    return {
      todos: [],
      mails: [],
      dataFields: ['todos', 'mails'],
      uri :'data:application/vnd.ms-excel;base64,',
      template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64: function(s){ return window.btoa(unescape(encodeURIComponent(s))) },
      format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
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
    },
     tableToExcel(table, name){
      
      if (!table.nodeType) table = this.$refs.table
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = this.uri + this.base64(this.format(this.template, ctx))
    }
  }
   
}
</script>

<style  scoped>
#listEntries{
    width:100%;
    border: none;
}
.md-card-header.md-card-header-flex {
    margin: 20px;
}
.md-content {    
  max-height: 90vh;
  overflow: scroll;
}
.md-scrollbar{
  width:100%;
  max-height:85vh;
  overflow: scroll;
  z-index: 1;
}
</style>