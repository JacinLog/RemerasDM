import sNav from './sNav/__index.js'
import View from './views/__index.js'

Vue.createApp({}).component("header-template",sNav.header).mount("#sNavHeader")
Vue.createApp(View).mount("#ViewApp")
Vue.createApp({}).component("footer-template",sNav.footer).mount("#sNavFooter")