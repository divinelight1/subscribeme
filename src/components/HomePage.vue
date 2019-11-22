<template>
<div class="homepage-content">
    <div class="logo-holder">
        <img class="logo" src="../assets/logo.png">

        <input type="text" placeholder="Name">
        <input type="text" placeholder="email">
        <input type="checkbox" name="terms" value="agreed"> agree with terms and condition<br>
        <button>Subscribe!!</button>
    </div> 
</div>


</template>

<script>

export default {
  name: 'HomePage',
  data () {
    return {
      
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
