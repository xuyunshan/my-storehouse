<template>
  <div>

  </div>
</template>

<script>
export default {
    mounted(){
        this.axios.post('/get_user',{uid:'10'}).then(res => {
            debugger
        })
    }
}
</script>

<style>

</style>