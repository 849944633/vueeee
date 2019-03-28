<template>
    <div id="app">
       <div v-html="data.content"></div>
    </div>
</template>

<script> 
  import Axios from 'axios'
    export default {
    data(){
      return{
        data:''
      }
    },
        created() {
          let { id } =this.$route.params
          Axios.get('https://cnodejs.org/api/v1/topic/'+id).then(res=>{
           this.data= res.data.data
             console.log(res)
          })
        }
    }
</script>

<style scoped>

</style>
