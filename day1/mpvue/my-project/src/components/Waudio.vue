<template>
    <div>
        <audio
        :poster="poster"
        :name="name"
        :author="author"
        :src="src"
        id="myAudio"
        controls
        loop
        ></audio>

        <button type="primary" @click="audioPlay">播放</button>
        <button type="primary" @click="audioPause">暂停</button>
        <button type="primary" @click="audio14">设置当前播放时间为14秒</button>
        <button type="primary" @click="audioStart">回到开头</button>
        <p v-text="lyc[time]"></p>
    </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  onReady (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  onShow () {
    console.log('onShow')
  },
  onHide () {
    console.log('onHide')
  },
  beforeDestroy () {
    console.log('destoryed')
  },
  data () {
    return {
      poster: '',
      name: '',
      author: '',
      src: '',
      lyc: [],
      time: 0,
      interval: null
    }
  },
  methods: {
    audioPlay () {
      this.interval = setInterval(()=>{
          this.time += 1 
      },1000)
      this.audioCtx.play()
    },
    audioPause () {
      clearInterval(this.interval)
      this.audioCtx.pause()
    },
    audio14 () {
      this.audioCtx.seek(14)
    },
    audioStart () {
      this.audioCtx.seek(0)
    },
    toggle () {
      console.log(1)
    },
    parseLyric(lrc) {
      var lyrics = lrc.split("\n")
      var lrcObj = {}
      for (var i = 0; i < lyrics.length; i++) {
      var lyric = decodeURIComponent(lyrics[i])
      var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
      var timeRegExpArr = lyric.match(timeReg)
      if (!timeRegExpArr) continue
      var clause = lyric.replace(timeReg, '')
      for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
          var t = timeRegExpArr[k]
          var min = Number(String(t.match(/\[\d*/i)).slice(1))
          var sec = Number(String(t.match(/\:\d*/i)).slice(1))
          var time = min * 60 + sec
          lrcObj[time] = clause
        }
      }
      return lrcObj
    }
  },
  created () {
    wx.request({
      url: 'https://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=A774A794184AF17469B27963E120B565&album_id=1747549&dfid=1sTko22BtxB90CwV4r0Zl9DI&mid=80f878f944fb9031ff3540cea009c525&platid=4&_=1557470485803', // 仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data.data)
        let authorName = res.data.data.author_name
        let songName = res.data.data.song_name
        let img = res.data.data.img
        let playUrl = res.data.data.play_url
        let lyrics = res.data.data.lyrics
        console.log({
          authorName,
          songName,
          img,
          playUrl,
          lyrics
        })
        let lyc = this.parseLyric(lyrics)
        console.log(lyc)
        this.lyc = lyc
        this.poster = img
        this.name = songName
        this.author = authorName
        this.src = playUrl

        
      }
    })
  }
}
</script>
