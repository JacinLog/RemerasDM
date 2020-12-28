import sNav from './snav/indexsnav.js'
import View from './views/indexroute.js'

const _a_ = Vue.createApp({}).component("header-template",sNav.header).mount("#sNavHeader")
const _b_ = Vue.createApp(View).mount("#ViewApp")
const _c_ = Vue.createApp({}).component("footer-template",sNav.footer).mount("#sNavFooter")