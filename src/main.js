import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown, faUserSecret, faMagnifyingGlass, faDownload, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { faUser, faFileLines } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faChevronDown, faUser, faMagnifyingGlass, faDownload, faArrowRightLong, faFileLines)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
