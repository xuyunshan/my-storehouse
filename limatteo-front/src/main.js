// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import ToastRegistry from '~/components/toast/index';

export default function (Vue, { router, head, isClient }) {
  head.style.push({
    type: 'text/css',
    cssText: `a[href^="https://www.cnzz.com"] {display: none;} html {font-size: 10vw; max-width: 750px;} @media screen and (min-width: 750px){html {font-size: 75px}}`,
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(ToastRegistry);
}
