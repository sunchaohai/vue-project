<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="getImgUrl">
        <ul>
          <router-link tag="li" active-class="active" :to="{path:'/details/'+item.tag}" v-for="(item,index) in navList" :key="index" >{{item.title}}</router-link>
        </ul>
      </div>
    </div>

    <div class="detail-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DePage",
        data(){
          return{
            navList:[
              {
                title:'开放产品',
                tag:'earth'
              },{
                title:'品牌营销',
                tag:'loud'
              },{
                title:'使命必达',
                tag:'car'
              },{
                title:'勇于攀登',
                tag:'hill'
              },
            ],
          imgUrl:{
            "/details/earth":require("../assets/images/1.png"),
            "/details/loud":require("../assets/images/3.png"),
            "/details/car":require("../assets/images/2.png"),
            "/details/hill":require("../assets/images/4.png")
          }
          }
        },
        computed:{
          getImgUrl(){
            return this.imgUrl[this.$route.path];
          }
        }
    }
</script>

<style scoped>

  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board {
    background: #fff;
    padding: 20px 0;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }

</style>
