import './assets/main.css'
import "@mdi/font/css/materialdesignicons.css";
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia"
import router from './router'
import 'primeflex/primeflex.css';
import {appStoreGeneral} from "./store/AppStore.js";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(vuetify)

// load storage
const storage = appStoreGeneral()

storage.loadState(storage.getTypeUser)

// Set if the user is medic
if(storage.getUserInfo !== null){
    if(storage.getUserInfo.tipo_usuario === "Médico"){
        storage.setMedicTrue()
    }
}

let validateURLToken = window.location.href.toString().includes("change-password")

if(!storage.getLogeado){
    if(!validateURLToken){
        router.push("/iniciar-sesion")
    }
}

app.mount('#app')
