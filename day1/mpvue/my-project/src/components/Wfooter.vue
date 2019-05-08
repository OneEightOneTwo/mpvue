<template>
  <footer>
      <div>
        <navigator
          url="/pages/index/main"
          hover-class="navigator-hover"
        >
          首页
        </navigator>
      </div>
      <div>
        <navigator
          url="/pages/mine/main"
          hover-class="navigator-hover"
        >
          我的
        </navigator>
      </div>
  </footer>
</template>
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
