<template>
   <div>
       <Loader :start="load.val"></Loader>
       <ImageUploader/> 
   </div>
</template>


<script>
import ImageUploader from "./components/ImageUploader";
import Loader from "./components/Loader.vue";

export default {
  components: {
    ImageUploader,
     Loader
  },
  data() {
    return  {
      load: {
        val: false
      },
    }
  },
  provide(){
    return {
      loader: this.load
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
