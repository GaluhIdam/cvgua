import { main } from '@popperjs/core';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Beranda from '../view/Beranda';
import Proyek from '../view/Proyek';
import Desain from '../view/Desain';
import Tentang from '../view/Tentang';
import Kontak from '../view/Kontak';
import CMSUtama from '../view/Cmsutama';
import CMSPesan from '../view/Cmspesan';
import CMSProyek from '../view/Cmsproyek';
import CMSDesain from '../view/Cmsdesain';
import CMSTentang from '../view/CMStentang';
import AddDesain from '../view/AddDesain';
import AddProyek from '../view/AddProyek';
import viewProyek from '../view/viewProyek';

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
  {
    name: 'cmsutama',
    path: '/cmsutama',
    component: CMSUtama
  },
  {
    name: 'cmspesan',
    path: '/cmspesan',
    component: CMSPesan
  },
  {
    name: 'cmsproyek',
    path: '/cmsproyek',
    component: CMSProyek
  },
  {
    name: 'cmsdesain',
    path: '/cmsdesain',
    component: CMSDesain
  },
  {
    name: 'cmstentang',
    path: '/cmstentang',
    component: CMSTentang
  },
  {
    name: 'addproyek',
    path: '/addproyek',
    component: AddProyek
  },
  {
    name: 'adddesain',
    path: '/adddesain',
    component: AddDesain
  },
  {
    name: 'viewproyek',
    path: '/viewproyek',
    component: viewProyek
  },
]

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "active fw-bold text-primary",
    base: __dirname,
    routes
  });
  
  export default router;
  