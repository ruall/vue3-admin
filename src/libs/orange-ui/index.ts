import Carousel from './Carousel/index.vue'
import CarouselItem from './Carousel/item.vue'

let orangeUI: any = {}

orangeUI.install = function (Vue: { component: (arg0: any, arg1: any) => void }) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselItem.name, CarouselItem)
}

export default orangeUI
