const get = (options) => {
  const {
    url,
    data
  } = options
  wx.request({
    url, // 仅为示例，并非真实的接口地址
    data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
    }
  })
}

const post = () => {
  wx.request({
    url: 'test.php', // 仅为示例，并非真实的接口地址
    data: {
      x: '',
      y: ''
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      console.log(res.data)
    }
  })
}

export default {
  get,
  post
}

