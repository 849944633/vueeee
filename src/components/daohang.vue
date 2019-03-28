<template>
  <div class="hello">
     <ul>
       <li><router-link to="/?tab=all">全部</router-link></li>
       <li><router-link to="/?tab=good">精华</router-link></li>
       <li><router-link to="/?tab=share">分享</router-link></li>
       <li><router-link to="/?tab=ask">问答</router-link></li>
       <li><router-link to="/?tab=job">招聘</router-link></li>
       <li><router-link to="/?tab=dev">客户端测试</router-link></li>
     </ul>
    <list v-for="(i,index) in dataList" :key="index" :data="i"></list>
  </div>
</template>

<script>
  import Axios from 'axios'
  import list from './list'
export default {
  data () {
    return {
      dataList:[],
      flag:"all"
    }
  },
  created() {
    let tab = this.$route.query
    this.flag=tab.tab
    Axios.get(`https://cnodejs.org/api/v1/topics`,{
     params:{
       tab:this.flag
     }
    }).then(res=>{

      this.dataList=res.data.data

    })
  },
  watch:{
    $route(){
      let tab = this.$route.query
      this.flag=tab.tab
      Axios.get(`https://cnodejs.org/api/v1/topics`,{
        params:{
          tab:this.flag
        }
      }).then(res=>{

        this.dataList=res.data.data

      })
    }
  },
  components:{
    list
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='sass'>
  .hellow{
    margin:0 auto;
    width: 800px;
    background: #888888;
  }
 ul{
   margin:0 auto;
   list-style: none;
   width: 800px;
 }
  li{
    display: inline-block;
    text-align: center;
  }
  a{
    text-decoration: none;
  }
</style>
