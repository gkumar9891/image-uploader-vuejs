<template>
  <div class="uploader">
    <div class="adder">&plus; 
        <input @change="selectFile" type="file">
    </div>

    <ul class="list" v-if="images.length > 0">
      <li v-for="image in images"
        :key="image"
      >
        <img :src="image" />
      </li>
    </ul>

    <button @click="show = !show">click to show</button>
    <!-- <Suspense v-if="show"> -->
      <AsyncImageList v-if="show" />
       <!-- <template><SkeletonLoader /></template> -->
    <!-- </Suspense> -->
    
   
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';
import axios from "axios";
import SkeletonLoader from '../components/SkeletonLoader';
// import ImageList from '../components/ImageList';


const AsyncImageList = defineAsyncComponent({
  loader: () => new Promise((resolve) => {
    setTimeout( () => {
        resolve( import(/* webpackChunkName: "ImageList" */ "../components/ImageList"))
    }, 2000)
  }),
  //() => import("../components/ImageList"),
  loadingComponent: SkeletonLoader,
});

export default {
    data() {
        return {
          files: '',
          images: [],
          show: false
        }
    },
    components: {
      AsyncImageList,
    },
    methods: {
        selectFile(event) {
          if(event.target.files.length > 0){
          this.$store.commit("showLoader");

           let file = event.target.files[0];
           let reader = new FileReader();
           reader.readAsDataURL(file);
           reader.onload = (e) => {
              this.$store.commit("hideLoader");
               this.images.unshift( e.target.result);

            axios.post("http://localhost:8080/db_source.json", {
              url: e.target.result
            } ,{
              headers: {
                "Content-type" : "application/json"
              }
            });

           }
        
          }        
        }
    }
};

</script>

<style scoped>

    .adder {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
        position: relative;
    }

    .uploader {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .list {
        display: flex;
        width: 50%;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        flex-wrap: wrap;
    }

    .list li {
        flex-basis: 20%;
        height: 110px;
        padding: 5px;
        position: relative;
    }

    .list img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .adder input[type='file'] {
        opacity: 0;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer
    }

</style>