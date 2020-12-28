import sNav from './src/snav/0index.js'
import View from './src/views/00index.js'

Vue.createApp({}).component("header-template",sNav.header).mount("#sNavHeader")
Vue.createApp(View).mount("#ViewApp")
Vue.createApp({}).component("footer-template",sNav.footer).mount("#sNavFooter")