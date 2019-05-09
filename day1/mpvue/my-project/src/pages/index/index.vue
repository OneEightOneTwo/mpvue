<template>
  <div>
    <!-- <Wheader /> -->
    <!-- <camera
      device-position="back"
      flash="off"
      binderror="error"
      style="width: 100%; height: 300px;"
    ></camera> -->
    <van-search :value="value" placeholder="请输入搜索关键词" />
    <van-transition :show="show" custom-class="block">
      <div>123</div>
    </van-transition>

    <i-notice-bar>
        2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>

    <view>123</view>
    <van-button @click="toggle" type="primary">按钮</van-button>
    <Wfooter />
    
  </div>
</template>

<script>
import card from '@/components/card'
import Wheader from '@/components/Wheader'
import Wfooter from '@/components/Wfooter'

export default {
  data () {
    return {
      show: true,
      value: '',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card,
    Wheader,
    Wfooter
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    toggle () {
      this.show = !this.show
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: '';
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
