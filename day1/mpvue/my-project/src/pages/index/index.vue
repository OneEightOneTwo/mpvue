<template>
  <div>
    <van-search :value="value" placeholder="请输入搜索关键词" />
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="355" height="150" />
        </swiper-item>
      </block>
    </swiper>
    <CoverView />
    <van-transition :show="show" custom-class="block">
      <div>123</div>
    </van-transition>

    <i-notice-bar>
        2018年世界杯,将于6月14日至7月15日举行
    </i-notice-bar>
    <i-card title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
        <view slot="content">内容不错</view>
        <view slot="footer">尾部内容</view>
    </i-card>

    <card text="测试卡片" />


    <view>123</view>
    <van-button @click="toggle" type="primary">按钮</van-button>
    <van-button @click="showGallery" type="primary">按钮</van-button>
    <Wfooter />
    
  </div>
</template>

<script>
import card from '@/components/card'
import Wheader from '@/components/Wheader'
import Wfooter from '@/components/Wfooter'
import CoverView from '@/components/CoverView'
import bus from '@/bus'
import store from './store'
import notebook from './notebook.svg'

export default {
  data () {
    return {
      show: true,
      value: '',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      notebook,
      imgUrls: [
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1054598549,1073845993&fm=111&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2121206715,2955288754&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1454761787,1890833303&fm=27&gp=0.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000
    }
  },

  components: {
    card,
    Wheader,
    Wfooter,
    CoverView
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
    },
    showGallery () {
      console.log(1)
      // 触发
      bus.$emit('showGallery', '你好')
      store.state.showGallery = !store.state.showGallery
      console.log(store.state.showGallery)
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
