<template>
  <div class="skeleton-loader wave">
   <div class="square"></div>
   <div class="line"></div>
   <div class="line"></div>
</div>
</template>

export default {}


<style scoped>
   
.skeleton-loader {
  max-width: 400px;
}

.square {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  float: left;
  margin-right: 10px;
   background: #f6f7f8;
 background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
}

.line {
  width: 200px;
  height: 15px;
  margin-bottom: 10px;
  float: left;
 background: #f6f7f8;
 background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  
}

.wave > div {
 animation: wave 1s infinite linear forwards; 
 background-size: 800px 104px;
}

@keyframes wave {
        0% {
            background-position: -468px 0
        }
        100% {
            background-position: 468px 0
        }
}

</style>