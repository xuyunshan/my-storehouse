const c1 = () => import(/* webpackChunkName: "page--src--templates--camo-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/templates/Camo.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--welfare-light-member-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/welfare-light-member.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--wx-test-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/wx-test.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--test-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/Test.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--onboarding-guide-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/onboarding-guide.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--live-preview-iframe-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/live-preview-iframe.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--guide-book-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/guide-book.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--call-app-demo-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/call-app-demo.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/About.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--2021-freshman-erke-taishan-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-freshman-erke-taishan.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--2021-may-oversea-students-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-may-oversea-students.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--2021-weibo-graduation-season-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-weibo-graduation-season.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--2021-world-book-day-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-world-book-day.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--2021-autumn-recruitment-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-autumn-recruitment.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--2021-pk-language-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-pk-language.vue")
const c16 = () => import(/* webpackChunkName: "page--src--pages--2021-shixiseng-perks-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/2021-shixiseng-perks.vue")
const c17 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/node_modules/gridsome/app/pages/404.vue")
const c18 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/yunsxu/Desktop/my-storehouse/limatteo-front/src/pages/Index.vue")

export default [
  {
    path: "/grid/camo-1/",
    component: c1
  },
  {
    path: "/grid/2021-freshman-binzhou/",
    component: c1
  },
  {
    path: "/grid/2021-freshman-dali/",
    component: c1
  },
  {
    path: "/grid/2021-freshman-scyishu/",
    component: c1
  },
  {
    path: "/grid/2021-freshman-tsnormal/",
    component: c1
  },
  {
    path: "/welfare-light-member/",
    component: c2
  },
  {
    path: "/wx-test/",
    component: c3
  },
  {
    path: "/test/",
    component: c4
  },
  {
    path: "/onboarding-guide/",
    component: c5
  },
  {
    path: "/live-preview-iframe/",
    component: c6
  },
  {
    path: "/guide-book/",
    component: c7
  },
  {
    path: "/call-app-demo/",
    component: c8
  },
  {
    path: "/about/",
    component: c9
  },
  {
    path: "/2021-freshman-erke-taishan/",
    component: c10
  },
  {
    path: "/2021-may-oversea-students/",
    component: c11
  },
  {
    path: "/2021-weibo-graduation-season/",
    component: c12
  },
  {
    path: "/2021-world-book-day/",
    component: c13
  },
  {
    path: "/2021-autumn-recruitment/",
    component: c14
  },
  {
    path: "/2021-pk-language/",
    component: c15
  },
  {
    path: "/2021-shixiseng-perks/",
    component: c16
  },
  {
    name: "404",
    path: "/404/",
    component: c17
  },
  {
    name: "home",
    path: "/",
    component: c18
  },
  {
    name: "*",
    path: "*",
    component: c17
  }
]
