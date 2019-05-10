<template>
  <div>
    <map
      id="map"
      :longitude="longitude"
      :latitude="latitude"
      scale="18"
      :controls="controls"
      bindcontroltap="controltap"
      :markers="markers"
      bindmarkertap="markertap"
      :polyline="polyline"
      bindregionchange="regionchange"
      show-location
      style="width: 100%; height: 300px;"
    ></map>
  </div>
</template>
<script>
export default {
  data () {
    return {
      markers: [
        {
          iconPath: '/static/images/user.png',
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ],
      polyline: [
        {
          points: [
            {
              longitude: 113.3245211,
              latitude: 23.10229
            },
            {
              longitude: 113.32452,
              latitude: 23.21229
            }
          ],
          color: '#FF0000DD',
          width: 6,
          dottedLine: true
        }
      ],
      controls: [
        {
          id: 1,
          iconPath: '/static/images/notebook.svg',
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ],
      longitude: '',
      latitude: ''
    }
  },
  created () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        this.latitude = res.latitude
        this.longitude = res.longitude
      }
    })
  }
}
</script>

