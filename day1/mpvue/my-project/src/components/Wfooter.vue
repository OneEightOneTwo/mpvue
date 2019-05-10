<template>
  <footer>
      <div v-for="(tab,index) in tabs" :key="index">
        <navigator
          :url="tab.url"
          hover-class="navigator-hover"
        v-text="tab.title" >
        </navigator>
      </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      tabs: [{
        url: '/pages/index/main',
        title: '首页'
      }, {
        url: '/pages/mine/main',
        title: '我的'
      }, {
        url: '/pages/map/main',
        title: '地图'
      }]
    }
  }
}
</script>

<style lang="scss">
footer {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  color: white;
  background-color: #58bc58;
  line-height: 50px;
  div{
      flex: 1;
  }
}
</style>
