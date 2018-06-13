<template>
  <div class="chooser-component">
      <ul class="chooser-list">
        <li v-for="(item,index) in Radios" :class="{'active':index==nowIndex}" @click="chooseHandle(index)">
          {{item.name}}
        </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "Radios",
        data(){
          return{
            nowIndex:0
          }
        },
        methods:{
          chooseHandle(index){
            this.nowIndex = index;
            this.$emit("radio",this.Radios[index].value);
            this.$store.dispatch("updateOrder",["radio",this.Radios[index].value])
          }
        },
        props:{
          Radios:{
            type:Array,
            default:function () {
              return [
                {
                  name:'1个月',
                  value:'1'
                },{
                  name:'3个月',
                  value:'2'
                },{
                  name:'半年',
                  value:'3'
                },
              ]
            }
          }
        }
    }
</script>

<style scoped>

  .chooser-component {
    position: relative;
    display: inline-block;
  }
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
