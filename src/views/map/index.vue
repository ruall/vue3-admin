<template>
  <div>
    <div class="map-class">
      <div class="cancel">取消</div>
      <div class="submit">确定</div>
      <div class="map">
        <GMapMap
          class="vue-map"
          :center="center"
          :zoom="12"
          :options="{ gestureHandling: 'cooperative' }"
          @click="addMarker"
        >
          <GMapMarker :key="id" :position="position" :clickable="true" :draggable="true" />
        </GMapMap>
      </div>
      <div class="search">
        <div class="replace"></div>
        <div class="input">
          <GMapAutocomplete
            ref="searchRef"
            placeholder="搜索地点"
            class="mb-20"
            :options="{
              strictBounds: true
            }"
            @change="getPlace"
            @place_changed="setPlace"
          ></GMapAutocomplete>
        </div>
        <div class="list">
          <ul>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li class="active">
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
            <li>
              <div>
                <span>当代梦工厂（武汉市江夏区）</span>
                <span>100m内 ｜ 江夏区光谷大道</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, toRefs, watch } from 'vue'
import Maps from './static/map'

export default defineComponent({
  components: {},
  name: '',
  setup() {
    const searchRef = ref(null)
    const { center, markers, addMarker } = Maps()
    const setPlace = (res) => {
      markers.position.lat = center.lat = res.geometry.location.lat()
      markers.position.lng = center.lng = res.geometry.location.lng()
      markers.pointInfo = res.formatted_address
    }
    watch(searchRef, () => {
      console.log(searchRef.value)
    })
    const getPlace = (res) => {
      debugger
    }
    return { center, ...toRefs(markers), addMarker, setPlace, searchRef, getPlace }
  }
})
</script>
<style lang="scss" scoped>
.map-class {
  width: 100%;
  height: 100vh;
  position: relative;
  .cancel {
    width: 32px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    position: fixed;
    top: 58px;
    left: 16px;
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
  }
  .map {
    width: 100%;
    height: calc(100vh - 300px);
  }
  .search {
    width: 100%;
    height: 300px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #111;
    border-radius: 9px 9px 0px 0px;
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
.pac-container {
  position: fixed !important;
  bottom: 0;
  width: 100%;
  height: 240px;
  padding: 10px 0;
  overflow: scroll;
}
</style>
