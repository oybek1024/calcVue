import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import i18n from './language/i18n'
import image_viewer from 'vue-pure-lightbox'
import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'
import 'animate.css'
import vueWow from 'vue-wow'


Vue.component('image-lightbox', LightBox)
Vue.use(VueLazyLoad)
Vue.use(vueWow)
Vue.config.productionTip = false
Vue.component('image-view', image_viewer)
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
