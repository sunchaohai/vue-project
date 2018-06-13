<template>
  <div>
    Loud -- 品牌营销{{getTotalPrice}}
  </div>

</template>

<script>
    export default {
        name: "Loud",
        data(){
          return{

          }
        },
        computed:{
          getTotalPrice(){
            return this.$store.getters.getTotalPrice;
          }
        }
    }
</script>

<style scoped>

</style>
