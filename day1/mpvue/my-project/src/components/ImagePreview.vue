<template>
    <van-image-preview
    v-model="show"
    :images="images"
    @change="onChange"
    >
    </van-image-preview>
</template>
<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'
Vue.use(ImagePreview)
export default {
  data () {
    return {
      show: true,
      index: 0,
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  },

  methods: {
    onChange (index) {
      this.index = index
    }
  }
}
</script>

