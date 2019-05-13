// components/Wpanel/Wpanel.js
const bus = require('../../utils/obs.js');
var base64 = require("../../weui/example/images/base64");
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    artists: [],
    offset: -1,
    status: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取新闻数据
    loadMore(type) {
      let self = this;
      // 每次上拉或者下拉offset自增，翻页
      self.setData({
        offset: ++self.data.offset,
        status: 1
      });
      wx.request({
        url: 'http://39.97.108.171:3000/top/artists', // 仅为示例，并非真实的接口地址
        data: {
          offset: self.data.offset * 10,
          limit: 10
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // 停止下拉刷新
          wx.stopPullDownRefresh();
          self.setData({
            artists: type === 'onPullDownRefresh' ? [...res.data.artists, ...self.data.artists] : [...self.data.artists, ...res.data.artists],
            status: res.data.artists.length > 0 ? 0 : 2
          });
          console.log(res.data.artists)
        }
      })
    }
  },

  ready: function () {
    // 监听index页面的下拉刷新
    bus.$on('onPullDownRefresh', (data) => {
      this.loadMore('onPullDownRefresh');
      console.log(data);
    });
    // 监听index页面的上拉刷新
    bus.$on('onReachBottom', (data) => {
      setTimeout(() => {
        this.loadMore('onReachBottom');
        console.log(data);
      }, 2000)
    });

    this.loadMore();
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  }
})
