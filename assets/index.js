import sNav from './src/snav/indexsnav.js'
import View from './src/views/indexroute.js'

Vue.createApp({}).component("header-template",sNav.header).mount("#sNavHeader")
Vue.createApp(View).mount("#ViewApp")
Vue.createApp({}).component("footer-template",sNav.footer).mount("#sNavFooter")