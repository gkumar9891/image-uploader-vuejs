<template>
    <ul class="list2">
        <li v-for="(image,index) in images" :key="index"><img :src="image.url"></li>
    </ul>
</template>

<script>
    import axios from 'axios';

    export default {

    data() {
        return {
            images: []
        }
    },


     mounted() {
        this.getImages();
     },

     methods: {
         getImages() {
             axios.get('./db_source.json').then( res => {
                 this.images = res.data.data;
             });
         }
     }   
        
    }
</script>

<style scoped>
    .list2 {
        display: flex;
        flex-direction: column;
        width: 300px;
        position: absolute;
        right: 0;
        list-style-type: none;
        padding: 0;
        margin: 0;
        top: 0;
    }

    .list2 li {
        width: 100%;
    }

    .list2 img {
        width: 100%;
    }
</style>