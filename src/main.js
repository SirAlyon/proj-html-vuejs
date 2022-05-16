import Vue from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons 👇 QUI AGGIUNGI LE ICONE che vuoi usare in camelCase */
import { faUserSecret, faAngleDown, faMagnifyingGlass, faCartShopping, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library 👇 QUI AGGIUNGI IL NOME DELL'ICONA in camelCase*/
library.add(faUserSecret, faAngleDown, faMagnifyingGlass, faTwitter, faFacebookF, faYoutube, faInstagram, faCartShopping, faEnvelope) 

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const bootstrap = require('bootstrap')
Vue.use(bootstrap)

