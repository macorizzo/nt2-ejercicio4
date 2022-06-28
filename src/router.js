import Vue from 'vue'
import VueRouter from 'vue-router'

import Form from './components/Form.vue'
import PedirDatos from './components/PedirDatos.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {path: '/', redirect : '/form'},
        {path: '/form', component: Form },
        {path: '/pedir-datos', component: PedirDatos },
    ]

})