<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
import bus from '@/bus'
export default {
  props: ['text'],
  created () {
    // 监听
    bus.$on('showGallery', (data) => {
      this.text = data
      console.log(data)
    })
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
