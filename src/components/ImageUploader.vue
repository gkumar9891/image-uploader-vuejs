<template>
  <div class="uploader">
    <div class="adder">&plus; 
        <input @change="selectFile" type="file">
    </div>

    <ul class="list" v-if="images.length > 0">
      <li v-for="image in images"
        :key="image"
      >
        <img :src="image">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
          files: '',
          images: []
        }
    },
    methods: {
        selectFile(event) {
           let file = event.target.files[0];
           

           let reader = new FileReader();
           reader.readAsDataURL(file);
           reader.onload = (e) => {
               this.images.push( e.target.result);
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