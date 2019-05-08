<template>
  <header>
    <div @click="back" v-if='status'>&gt;</div>
    <div v-else> </div>
    <div>腾讯新闻</div>
    <div>_</div>
  </header>
</template>
<script>
export default {
  props: ['status'],
  mounted () {
    console.log(this.status)
  },
  methods: {
    back () {
      wx.navigateTo({
        url: '/pages/index/main'
      })
    },
    name () {
      return 'yao'
    }
  }
}
</script>
<style lang='scss' scoped>
header{
  display: flex;
  padding-top: 30px;
  width: 100%;
  height: 50px;
  text-align: center;
  color:white;
  background-color: #58bc58;
  line-height:50px;
  div{
    flex:1
  }
}
</style>
