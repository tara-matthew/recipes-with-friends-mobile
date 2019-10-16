import Vue from 'nativescript-vue'
import App from './components/Register'
import Vuetify from 'vuetify'


import store from './store'

Vue.use(Vuetify)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
    vuetify: new Vuetify( {
    }),
    store,
    render: h => h('frame', [h(App)])
}).$start()
