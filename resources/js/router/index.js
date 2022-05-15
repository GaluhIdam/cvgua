import { main } from '@popperjs/core';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Beranda from '../view/Beranda';
import Proyek from '../view/Proyek';
import Desain from '../view/Desain';

let routes = [
  {
    name: 'main',
    path: '/',
    component: Beranda
  },
  {
    name: 'beranda',
    path: '/beranda',
    component: Beranda
  },
  {
    name: 'proyek',
    path: '/proyek',
    component: Proyek
  },
  {
    name: 'desain',
    path: '/desain',
    component: Desain
  }
]

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active fw-bold text-primary",
    base: __dirname,
    routes
  });
  
  export default router;
  