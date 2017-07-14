import Vue from 'vue'
import VueResource from 'vue-resource'
import moment from 'moment'

import App from './App.vue'

Vue.use(VueResource)
Vue.http.options.root = 'https://dale-bookmarks.herokuapp.com'
Vue.filter('formatDate', function (date) {
    return moment(date).format('YY/MM/DD')
})

new Vue({
  el: '#app',
  render: h => h(App)
})
