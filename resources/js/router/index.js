import { main } from '@popperjs/core';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Beranda from '../view/Beranda';
import Proyek from '../view/Proyek';
import Desain from '../view/Desain';
import Tentang from '../view/Tentang';
import Kontak from '../view/Kontak';

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
  },
  {
    name: 'tentang',
    path: '/tentang',
    component: Tentang
  },
  {
    name: 'kontak',
    path: '/kontak',
    component: Kontak
  },
]

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active fw-bold text-primary",
    base: __dirname,
    routes
  });
  
  export default router;
  