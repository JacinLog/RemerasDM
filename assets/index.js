import sNav from './src/sNav/__index.js'
import View from './src/views/__index.js'

Vue.createApp({}).component("header-template",sNav.header).mount("#sNavHeader")
Vue.createApp(View).mount("#ViewApp")
Vue.createApp({}).component("footer-template",sNav.footer).mount("#sNavFooter")