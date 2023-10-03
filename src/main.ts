import { createApp } from 'vue'
import './style.css'
import App from '@/pages/App.vue'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import Panel from 'primevue/panel'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import TabMenu from 'primevue/tabmenu'
import Breadcrumb from 'primevue/breadcrumb'
import Sidebar from 'primevue/sidebar'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.component('Sidebar', Sidebar)
app.component('Panel', Panel)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('TabMenu', TabMenu)
app.component('Breadcrumb', Breadcrumb)
app.use(PrimeVue)

app.mount('#app')
