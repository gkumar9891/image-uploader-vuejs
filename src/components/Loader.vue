<template>
    <div v-if="start" class="loader">
        <span></span>
    </div>
</template>

<script>
export default {
    computed: {
        start() {
        return this.$store.getters["loader"];
        }
    }
}
</script>
<style scoped>

    .loader {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        background: rgb(0 255 220 / 10%);
        z-index: 10;
    }

   
     @keyframes rotate {
        0% { transform: rotate(0deg) }
        25% { transform: rotate(90deg) }
        50% { transform: rotate(180deg) }
        75% { transform: rotate(270deg) }
        100% { transform: rotate(360deg) }
    }


    .loader span {
        width: 2em;
        height: 2em;
        background-color: #000;
        animation: rotate infinite ease-in-out .7s;
    }

</style>