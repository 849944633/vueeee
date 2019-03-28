<template>
    <div id="app">
      <ul>
             <li class="touxiang">
               <img :src="data.author.avatar_url" alt="">
               <router-link :to="'/xiangqing/'+data.id">{{data.title}}</router-link>
             </li>
      </ul> 
    </div> 
</template>

<script>
    export default {
      props:['data'],
    data(){
      return{

      } 
    },
      created() {
      }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
    font-size: 10px;
    color: black;
  }
  #app{
    margin-top: -3px;
  }
.touxiang img{
  width: 25px;
  height: 25px;
}
ul{
  list-style: none;
}
  li{
    height: 25px;
    text-align: left;
    border-bottom: 1px solid rebeccapurple;
  }
</style>
