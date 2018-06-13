<template>
    <div class="selection-component">
      <div class="selection-show" @click="listHandle">
        <span>{{classList[nowIndex].name}}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list">
        <ul>
          <li v-for="(item,index) in classList" v-show="ifShow" @click="selectHandle(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DownMenu",
        data(){
          return{
            ifShow:false,
            nowIndex:0
          }
        },
        methods: {
          listHandle(){
            this.ifShow = !this.ifShow;
          },
          selectHandle(index){
            this.nowIndex = index;
            this.ifShow = false;

            this.$emit("downmenu",this.classList[index].value);
            this.$store.dispatch("updateOrder",["downmenu",this.classList[index].value])
          }
        },
        props:{
          classList:{
            type:Array,
            default:function () {
              return [
                {
                  name:'初级班',
                  value:'1'
                },{
                  name:'中级班',
                  value:'2'
                },{
                  name:'高级班',
                  value:'3'
                },
              ]
            }
          }
        }
    }
</script>

<style scoped>
  .selection-component {
    position: relative;
    display: inline-block;
  }
  .selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
  }
  .selection-show .arrow {
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    vertical-align: middle;
  }
  .selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
  }
  .selection-list li {
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
  .selection-list li:hover {
    background: #e3e3e3;
  }
</style>
