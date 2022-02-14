<template>
  <div>
    <div class="map-class">
      <div class="cancel">取消</div>
      <div class="submit">确定</div>
      <div class="map">
        <GoogleMap
          ref="mapRef"
          api-key="AIzaSyDnRYn-WdzOaAao38l2-WrfblfaUBcockI"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="15"
        ></GoogleMap>
      </div>
      <div class="search" :class="showList ? 'hasList' : ''">
        <div class="replace"></div>
        <div class="input">
          <input ref="searchRef" v-model="searchTxt" type="text" placeholder="搜索地点" />
        </div>
        <div v-show="showList" class="list">
          <ul>
            <li v-for="item in list" :key="item.place_id" @click="setPlace(item.place_id)">
              <div>
                <span>{{ item.description }}</span>
                <!-- <span>100m内 ｜ 江夏区光谷大道</span> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  name: '',
  components: { GoogleMap, Marker },
  setup() {
    const mapRef = ref(null)
    const searchRef = ref(null)
    let searchBox, places, service
    const showList = ref(false)
    let markers = []
    const placeList = reactive({
      list: {}
    })
    const searchTxt = ref('')
    const mapInfo = reactive({
      center: { lat: 41.893056, lng: 12.482778 }
    })

    watch(mapRef, () => {
      if (mapRef.value.ready) {
        addMarker(mapInfo.center)
        // const input = searchRef.value
        // searchBox = new google.maps.places.SearchBox(input)
        const centerControlDiv = document.createElement('div')

        CenterControl(centerControlDiv, mapRef.value.map)
        mapRef.value.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv)
        mapRef.value.map.disableDefaultUI = true
      }
    })

    watch(searchTxt, () => {
      //获取输入框检索的地图数据
      const displaySuggestions = function (predictions, status) {
        if (status != google.maps.places.PlacesServiceStatus.OK || !predictions) {
          alert(status)
          return
        }
        placeList.list = predictions
      }
      service = new google.maps.places.AutocompleteService()
      if (searchTxt.value) {
        service.getQueryPredictions({ input: searchRef.value.value }, displaySuggestions)
        showList.value = true
      } else {
        showList.value = false
      }
    })

    //设置标点
    const addMarker = (position) => {
      const marker = new google.maps.Marker({
        position,
        map: mapRef.value.map
      })

      markers.push(marker)
    }
    //移除标点
    const delMarkers = () => {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null)
      }
    }

    const setPlace = (id) => {
      //获取坐标点周围的商家列表
      // const search = {
      //   bounds: mapRef.value.map.getBounds()
      //   // types: ['lodging']
      // }

      const bounds = new google.maps.LatLngBounds()
      places = new google.maps.places.PlacesService(mapRef.value.map)
      // places.nearbySearch(search, (res) => {})
      const request = {
        placeId: id,
        fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
      }
      places.getDetails(request, (place, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // markers.forEach((marker) => {
          //   marker.setMap(null)
          // })
          // markers = []
          // markers.push(
          //   new google.maps.Marker({
          //     map: mapRef.value.map,
          //     position: place.geometry.location
          //   })
          // )
          delMarkers()
          addMarker(place.geometry.location)
          bounds.extend(place.geometry.location)
          mapRef.value.map.fitBounds(bounds)
          mapInfo.center.lat = place.geometry.location.lat
          mapInfo.center.lng = place.geometry.location.lng
        }
      })
    }

    const CenterControl = (controlDiv, map) => {
      // Set CSS for the control border.
      const controlUI = document.createElement('div')

      controlUI.style.cursor = 'pointer'
      controlUI.style.textAlign = 'center'
      controlUI.style.marginBottom = '30px'
      controlUI.style.marginRight = '10px'
      controlDiv.appendChild(controlUI)

      // Set CSS for the control interior.
      const controlText = document.createElement('img')

      controlText.style.width = '40px'
      controlText.style.height = '40px'
      controlText.src = 'src/views/map/static/img/point.png'
      // controlText.style.color = 'rgb(25,25,25)'
      // controlText.style.fontFamily = 'Roboto,Arial,sans-serif'
      // controlText.style.fontSize = '16px'
      // controlText.style.lineHeight = '38px'
      // controlText.style.paddingLeft = '5px'
      // controlText.style.paddingRight = '5px'
      // controlText.innerHTML = `<img src="src/views/map/static/img/point.png" class="map-point" />`
      controlUI.appendChild(controlText)

      // Setup the click event listeners: simply set the map to Chicago.
      controlUI.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
              mapRef.value.map.setCenter(pos)
            },
            () => {
              console.log('位置获取失败')
            }
          )
        } else {
          // Browser doesn't support Geolocation
          console.log('位置获取失败')
        }
      })
    }

    return { ...toRefs(placeList), ...toRefs(mapInfo), mapRef, searchRef, setPlace, searchTxt, showList }
  }
})
</script>
<style lang="scss" scoped>
@keyframes myfirst {
  from {
    height: 72px;
  }
  to {
    height: 300px;
  }
}

@-webkit-keyframes myfirst /* Safari 与 Chrome */ {
  from {
    height: 72px;
  }
  to {
    height: 300px;
  }
}
.map-class {
  width: 100%;
  height: 100vh;
  position: relative;
  .cancel {
    // width: 32px;
    // height: 16px;
    // line-height: 16px;
    // font-size: 16px;
    // position: fixed;
    // top: 58px;
    // left: 16px;
    // z-index: 99;
    text-align: center;
    width: 60px;
    height: 32px;
    line-height: 33px;
    font-size: 16px;
    color: #000;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 52px;
    left: 14px;
    z-index: 99;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  }
  .submit {
    text-align: center;
    width: 60px;
    height: 32px;
    line-height: 33px;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    background-color: #00c35d;
    position: fixed;
    top: 52px;
    right: 14px;
    z-index: 99;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  }
  .map {
    width: 100%;
    height: calc(100vh - 300px);
  }
  .search {
    width: 100%;
    height: 72px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #111;
    border-radius: 9px 9px 0px 0px;
    &.hasList {
      height: 300px;
      animation: height 5s ease-in;
    }
    .input {
      margin: 16px 8px;
      input {
        background-color: #4d5250;
        width: 100%;
        height: 36px;
        line-height: 36px;
        border-radius: 22px;
        color: #fff;
        text-align: center;
        font-size: 14px;
      }
    }
    .list {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 240px;
      padding: 10px 0;
      overflow: scroll;
      ul {
        li {
          position: relative;
          ::before {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 1px;
            background-color: #4d5250;
          }
          &:first-of-type {
            div {
              padding-top: 0;
            }
          }
          div {
            padding: 15px;
            span {
              &:first-of-type {
                font-size: 16px;
                display: inline-block;
                width: 100%;
                color: #fff;
              }
              &:last-of-type {
                display: inline-block;
                width: 100%;
                font-size: 14px;
                color: #888;
              }
            }
          }
          &.active {
            div {
              &::after {
                content: '';
                width: 32px;
                height: 32px;
                position: absolute;
                top: 20px;
                right: 14px;
                background: url('./static/img/select.png') no-repeat center;
                background-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
.map-point {
  width: 20px;
  height: 20px;
}
</style>
