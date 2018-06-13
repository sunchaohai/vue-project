<template>
  <div>
    Earth -- 开放产品
    {{getOrder}}
  </div>

</template>

<script>
    export default {
        name: "Earth",
        data(){
          return{

          }
        },
        computed:{
          getOrder(){
            return this.$store.getters.getOrder;
          }
        }
    }
</script>

<style scoped>

</style>
