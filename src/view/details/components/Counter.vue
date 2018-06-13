<template>
  <div class="counter-component">
    <div class="counter-btn" @click="subMethod">-</div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="inputHandler"/>
    </div>
    <div class="counter-btn" @click="addMethod">+</div>

  </div>
</template>

<script>
    export default {
        name: "Counter",
        data(){
          return{
            number:1
          }
        },
        methods:{
          subMethod(){
            this.number--;
            if(this.number <= this.minNum){
              this.number = this.minNum;
            }
            this.$emit("counter",this.number);
            this.$store.dispatch("updateOrder",["counter",this.number])
          },
          addMethod: function () {
            this.number++;
            if (this.number >= this.maxNum) {
              this.number = this.maxNum;
            }
            this.$emit("counter", this.number);
            this.$store.dispatch("updateOrder",["counter",this.number])
          },
          inputHandler(){
            // \D:非数字
            let fix;
            if(typeof this.number === "string"){
              fix = Number(this.number.replace(/\D/g,""));
            }else {
              fix = this.number
            }

            if(fix > this.maxNum || fix<this.minNum){
               fix = this.minNum;
            }
            this.number = fix;

            this.$emit("counter",this.number);
            this.$store.dispatch("updateOrder",["counter",this.number])
          }
          },
        props:{
          minNum:{
            type:Number,
            default:0
          },
          maxNum:{
            type:Number,
            default:5
          }

        }
    }
</script>

<style scoped>

  .counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .counter-show {
    float: left;
  }
  .counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
  }
  .counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
  }
  .counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }

</style>
