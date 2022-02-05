<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ImageUploader/>
  </div>
</template>

<script>
// @ is an alias to /src

import ImageUploader from '@/components/ImageUploader.vue';

export default {
  name: 'Home',
  components: {
    ImageUploader,
  },
};
</script>
