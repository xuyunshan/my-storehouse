(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/kop":function(t,e,i){},"0jNN":function(t,e,i){"use strict";var s=Object.prototype.hasOwnProperty,r=Array.isArray,a=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),n=function(t,e){for(var i=e&&e.plainObjects?Object.create(null):{},s=0;s<t.length;++s)void 0!==t[s]&&(i[s]=t[s]);return i};t.exports={arrayToObject:n,assign:function(t,e){return Object.keys(e).reduce((function(t,i){return t[i]=e[i],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],i=[],s=0;s<e.length;++s)for(var a=e[s],n=a.obj[a.prop],o=Object.keys(n),c=0;c<o.length;++c){var l=o[c],d=n[l];"object"==typeof d&&null!==d&&-1===i.indexOf(d)&&(e.push({obj:n,prop:l}),i.push(d))}return function(t){for(;t.length>1;){var e=t.pop(),i=e.obj[e.prop];if(r(i)){for(var s=[],a=0;a<i.length;++a)void 0!==i[a]&&s.push(i[a]);e.obj[e.prop]=s}}}(e),t},decode:function(t,e,i){var s=t.replace(/\+/g," ");if("iso-8859-1"===i)return s.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(s)}catch(t){return s}},encode:function(t,e,i){if(0===t.length)return t;var s="string"==typeof t?t:String(t);if("iso-8859-1"===i)return escape(s).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var r="",n=0;n<s.length;++n){var o=s.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=s.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&s.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,i,a){if(!i)return e;if("object"!=typeof i){if(r(e))e.push(i);else{if(!e||"object"!=typeof e)return[e,i];(a&&(a.plainObjects||a.allowPrototypes)||!s.call(Object.prototype,i))&&(e[i]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(i);var o=e;return r(e)&&!r(i)&&(o=n(e,a)),r(e)&&r(i)?(i.forEach((function(i,r){if(s.call(e,r)){var n=e[r];n&&"object"==typeof n&&i&&"object"==typeof i?e[r]=t(n,i,a):e.push(i)}else e[r]=i})),e):Object.keys(i).reduce((function(e,r){var n=i[r];return s.call(e,r)?e[r]=t(e[r],n,a):e[r]=n,e}),o)}}},"24jc":function(t,e,i){"use strict";var s=i("/kop");i.n(s).a},"2DiZ":function(t,e,i){"use strict";i.d(e,"a",(function(){return c})),i.d(e,"d",(function(){return l})),i.d(e,"b",(function(){return d})),i.d(e,"c",(function(){return p}));i("yXV3"),i("07d7");var s,r=/(Z|z)ephyr/,a=/iP(hone|od|ad)/,n=/MicroMessenger/,o=function(){return s||(s=window.navigator.userAgent||window.navigator.vendor||window.opera),s};function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o();return a.test(t)}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o();return a.test(t)&&r.test(t)}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o();return n.test(t)}function p(){var t=window.navigator.userAgent.toLowerCase();return new Promise((function(e){if(-1==t.indexOf("micromessenger"))e(!1);else try{wx.miniProgram.getEnv((function(t){t.miniprogram?e(!0):e(!1)}))}catch(t){e(!1)}}))}},"5lHK":function(t,e,i){"use strict";var s={name:"VideoCon",props:["gifUrl"]},r=(i("24jc"),i("KHd+")),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"videoCon"},[e("div",{staticClass:"con"},[e("g-image",{attrs:{src:this.gifUrl,alt:""}})],1),this._t("default")],2)}),[],!1,null,"8765d3fc",null);e.a=a.exports},"6GYN":function(t,e,i){"use strict";i.r(e);var s=i("rePB"),r=i("2DiZ"),a=i("Qyje"),n=i.n(a),o="https://a.app.qq.com/o/simple.jsp?pkgname=com.linkedin.android",c={profile:["profile","you/profile"],messaging:["messaging","you/messaging"],feed:["feed","you/feed"]};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"feed",i={scheme:{protocol:"linkedin"},intent:{package:"com.linkedin.android.flagshipdev.debug",action:"android.intent.action.VIEW",category:"android.intent.category.DEFAULT",component:"com.linkedin.android.l2m.deeplink.CustomDeepLinkHelperActivity",scheme:"linkedin"},universal:{host:"www.linkedinmobileapp.com",pathKey:"pathkey"},appstore:"".concat("https://apps.apple.com/app/apple-store/id1052654880?pt=10746&mt=8","&").concat(n.a.stringify(Object(s.a)({},"ct","linkedin_event_ios"))),yingyongbao:o,fallback:"".concat("https://www.linkedin.com/transactional-routing/mobile-redirect","?").concat(n.a.stringify(Object(s.a)({},"trk",Object(r.a)()?"linkedin_event_ios":"linkedin_event_android")))},a={param:{trk:"linkedin_event",appType:"FLAGSHIP"}};Object(r.a)()?a.path=c[e]?c[e][0]:c["/"][0]:a.path=c[e]?c[e][1]:c["/"][1],i.universal.host=i.universal.host+"/"+a.path;var l=new t(i);l.open(a)}},"8We/":function(t,e,i){"use strict";var s={name:"DownArrow",props:["src"]},r=(i("LVjX"),i("KHd+")),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"downArrow"},[e("img",{attrs:{src:this.src,alt:""}})])}),[],!1,null,"0db0f5f0",null);e.a=a.exports},A9Hb:function(t,e,i){"use strict";var s=i("b+sa");i.n(s).a},CWwi:function(t,e,i){"use strict";var s=i("Ob3F");i.n(s).a},"FG+j":function(t,e,i){"use strict";(function(t){i("p6Nx");var s=i("l27N"),r=i("G5we"),a=i("5lHK"),n=i("8We/");e.a={metaInfo:{title:"领英带你走好职场第一步",titleTemplate:"领英带你走好职场第一步",meta:[{property:"og:title",content:"走好职场第一步 从玩转领英开始"},{property:"og:url",content:"https://linkedin-event.com/campaign/onboarding-guide/index.html"},{property:"og:image",content:"https://www.linkedin-event.com/image/onboarding-guide/onboarding_share.jpg"}],script:[{vmid:"cnzz",key:"cnzz",src:"https://s4.cnzz.com/z_stat.php?id=1277901282&web_id=1277901282",body:!0},{vmid:"ldjson-schema",innerHTML:"window.__pageSharingConfig = {\n      title: '走好职场第一步 从玩转领英开始',\n      imageUrl: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg',\n      description: '获得实习内推机会和更多隐形人脉',\n      url: 'https://linkedin-event.com/campaign/onboarding-guide/?trk=share',\n    };"}],__dangerouslyDisableSanitizersByTagID:{"ldjson-schema":["innerHTML"]}},components:{ButtomBtn:s.a,GuideTitle:r.a,VideoCon:a.a,DownArrow:n.a},directives:t.browser?{swiper:i("chKg").directive}:{},data:function(){var t=this;return{isSwiperReady:!1,swiperOption:{direction:"vertical",on:{init:function(){t.isSwiperReady=!0},slideChangeEnd:function(e){t.activeIndex=e.activeIndex}}},activeIndex:0,initialSlide:0,txt1:"完善领英档案",txt2:"获得更多隐形人脉 · 解锁更多成长机会"}},methods:{nextPage:function(){_czc.push(["_trackEvent","onboardingGuide","click","arrowhead","",""]),this.mySwiper.slideNext()}},mounted:function(){var t=t||[];t.push(["_setAccount","1277901282"])}}}).call(this,i("8oxB"))},G5we:function(t,e,i){"use strict";var s={name:"GuideTitle",props:["titleConSrc","titleConSrcMin"]},r=(i("SfGX"),i("KHd+")),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("img",{attrs:{src:this.titleConSrc,alt:""}}),e("img",{attrs:{src:this.titleConSrcMin,alt:""}})])}),[],!1,null,"a031b41c",null);e.a=a.exports},LVjX:function(t,e,i){"use strict";var s=i("iHU4");i.n(s).a},"Ml/A":function(t,e,i){"use strict";i.r(e);var s=i("FG+j").a,r=(i("CWwi"),i("KHd+")),a=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isSwiperReady,expression:"isSwiperReady"}],attrs:{id:"wrap"}},[i("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticStyle:{height:"100%"}},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide page1 overflow-hidden",staticStyle:{height:"100%"}},[i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle3"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle4"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle5"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg1-circle6"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg1-meteor1"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg1-meteor2"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg1-meteor3"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire1"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire2"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire3"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire4"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire5"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire6"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire7"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire8"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire9"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire10"}}),i("div",{staticClass:"pos-absolute",attrs:{id:"bg1-squire11"}}),t._m(0),t._m(1),t._m(2),t._m(3),i("DownArrow",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/rectangle.png"},nativeOn:{click:function(e){return t.nextPage(e)}}}),t._m(4)],1),i("div",{staticClass:"swiper-slide page2 overflow-hidden"},[i("DownArrow",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/rectangle.png"},nativeOn:{click:function(e){return t.nextPage(e)}}}),t._m(5),t._m(6),t._m(7),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg2-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg2-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg2-circle4"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg2-circle5"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg2-circle6"}}),i("div",{staticClass:"more"},[t._v("下滑收获更多玩法")]),t._m(8)],1),i("div",{staticClass:"swiper-slide page3 overflow-hidden"},[i("GuideTitle",{attrs:{titleConSrc:"https://www.linkedin-event.com/image/onboarding-guide/dispelling-doubts2.png",titleConSrcMin:"https://www.linkedin-event.com/image/onboarding-guide/dispelling-doubt-min.png"}}),i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif1.gif"}},[i("div",{staticClass:"number"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/number1.png",alt:""}})]),i("div",{staticClass:"people"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg3-new-people.png",alt:""}})]),i("div",{staticClass:"tutor"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg3-new-earth.png",alt:""}})])]),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg3-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg3-circle3"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg3-circle4"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg3-circle5"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg3-circle6"}}),i("div",{staticClass:"pos-absolute meteor2",attrs:{id:"bg3-meteor1"}}),i("div",{staticClass:"pos-absolute meteor2",attrs:{id:"bg3-meteor2"}}),i("div",{staticClass:"pos-absolute meteor3",attrs:{id:"bg3-meteor3"}}),i("div",{staticClass:"pos-absolute meteor3",attrs:{id:"bg3-meteor4"}}),i("div",{staticClass:"pos-absolute meteor3",attrs:{id:"bg3-meteor5"}}),t._m(9)],1),i("div",{staticClass:"swiper-slide page4 overflow-hidden"},[i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif2.gif"}},[i("div",{staticClass:"number"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/number2.png",alt:""}})]),i("div",{staticClass:"talk"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg4-talk.png",alt:""}})])]),t._m(10),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg4-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg4-circle2"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg4-meteor1"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg4-meteor2"}}),t._m(11)],1),i("div",{staticClass:"swiper-slide page5 overflow-hidden"},[i("GuideTitle",{attrs:{titleConSrc:"https://www.linkedin-event.com/image/onboarding-guide/find-job2.png",titleConSrcMin:"https://www.linkedin-event.com/image/onboarding-guide/find-job-min2.png"}}),t._m(12),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg5-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg5-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg5-circle3"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg5-meteor1"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg5-meteor2"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg5-meteor3"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg5-meteor4"}}),t._m(13),i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif3.gif"}},[i("div",{staticClass:"earth"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/earth.png",alt:""}})])]),t._m(14)],1),i("div",{staticClass:"swiper-slide page6 overflow-hidden"},[t._m(15),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle3"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle4"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle5"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg6-circle6"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg6-meteor1"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg6-meteor2"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg6-meteor3"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg6-meteor4"}}),i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif4.gif"}}),t._m(16),t._m(17),t._m(18)],1),i("div",{staticClass:"swiper-slide page7 overflow-hidden"},[i("GuideTitle",{attrs:{titleConSrc:"https://www.linkedin-event.com/image/onboarding-guide/find-alumni3.png",titleConSrcMin:"https://www.linkedin-event.com/image/onboarding-guide/find-alumni-min2.png"}}),t._m(19),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg7-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg7-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg7-circle3"}}),i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif5.gif"}},[i("div",{staticClass:"number"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/number1.png",alt:""}})])]),t._m(20)],1),i("div",{staticClass:"swiper-slide page8 overflow-hidden"},[i("VideoCon",{attrs:{gifUrl:"https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif6.gif"}},[i("div",{staticClass:"number"},[i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/number2.png",alt:""}})])]),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle1"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle2"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle3"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle4"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle5"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle6"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle7"}}),i("div",{staticClass:"pos-absolute circle",attrs:{id:"bg8-circle8"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg8-meteor1"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg8-meteor2"}}),i("div",{staticClass:"pos-absolute meteor",attrs:{id:"bg8-meteor3"}}),t._m(21),t._m(22),i("div",{staticClass:"txt"},[t._v("操作步骤：点击“人脉”-“校友”")])],1)])]),i("ButtomBtn",{attrs:{txt1:t.txt1,txt2:t.txt2,show:t.activeIndex}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg1-logo.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg1-student.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("p",[this._v("如果你对职业规划感到困惑")]),e("p",[this._v("如果你迫切需要实习机会")]),e("p",[e("span",[this._v("这里有")]),e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg1-5000.png",alt:""}}),e("span",[this._v("的职场前辈")])]),e("p",[this._v("无偿为你提供帮助")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"start"},[e("p",[this._v("为职场做准备")]),e("p",[this._v("从玩转领英开始")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"people"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg1-people.png",alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("p",[t._v("首先")]),i("p",[t._v("第一印象很重要")]),i("p",[t._v("而"),i("span",[t._v("头像")]),t._v("是第一印象的关键。")]),i("p",[t._v("添加头像（可使用一寸照），完善档案，")]),i("p",[t._v("帮你增加可信度和"),i("span",{staticClass:"percent"},[t._v("14% ")]),t._v("的曝光机会！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"infoList"},[e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info1.png",alt:""}})]),e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info2.png",alt:""}})]),e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info3.png",alt:""}})]),e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info4.png",alt:""}})]),e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info5.png",alt:""}})]),e("li",[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-info6.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"earth"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-earth.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"txt"},[e("div",{staticClass:"left-earth"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-left-earth.png",alt:""}})]),e("div",{staticClass:"right-earth"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg2-right-earth.png",alt:""}})]),e("ul",[e("li",[this._v("找朋辈导师，解答求职困惑")]),e("li",[this._v("学生专属实习/校招职位列表")]),e("li",[this._v("找校友内推，获得大厂offer")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("p",[t._v("操作步骤：点击“我”-“寻找我的职场导师”")]),i("p",[t._v("超过"),i("span",[t._v("2万")]),t._v("名来自各行业的热心职场人")]),i("p",[i("span",[t._v("无偿")]),t._v("为学生提供"),i("span",[t._v("1对1")]),t._v("的线上职业辅导")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("p",[this._v("操作步骤：搜索“领英职场练习生”，点击关注")]),e("p",[this._v("关注领英校园官号")]),e("p",[this._v("@领英职场练习生")]),e("p",[this._v("围观学生热门话题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topic"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/topic.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleCon"},[e("p",[e("span",[this._v("学生专属")]),this._v("的实习校招职位在这里！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"people"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg5-people.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"txt"},[e("p",[this._v("操作步骤：")]),e("p",[this._v("搜索“实习”等关键字")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"circular2"},[e("p",[this._v("进阶玩法")]),e("p",[this._v(" 第一时间获取最新职位！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("p",[this._v("点击首页底部“求职招聘”")]),e("p",[this._v("点击“+”-“创建求职意向”")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tips"},[e("div",{staticClass:"left"},[this._v("TIPS")]),e("div",{staticClass:"txt"},[this._v("通过找"),e("span",[this._v("校友内推")]),this._v("，成功获得实习或校招offer的几率更大！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"people"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg6-new-people.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail"},[e("p",[this._v("查看校友过往经历，获得更清晰的"),e("span",[this._v("职场规划")])]),e("p",[this._v("一键添加校友，获取"),e("span",[this._v("内推机会")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail2"},[e("p",[this._v("操作步骤：在搜索框输入学校名字，进入")]),e("p",[this._v("学校主页，点击“查看校友”")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"people"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg8-new-people2.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/bg1-logo.png",alt:""}})])}],!1,null,"11d02402",null);e.default=a.exports},Ob3F:function(t,e,i){},QSc6:function(t,e,i){"use strict";var s=i("0jNN"),r=i("sxOR"),a=Object.prototype.hasOwnProperty,n={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Array.isArray,c=Array.prototype.push,l=function(t,e){c.apply(t,o(e)?e:[e])},d=Date.prototype.toISOString,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:s.encode,encodeValuesOnly:!1,formatter:r.formatters[r.default],indices:!1,serializeDate:function(t){return d.call(t)},skipNulls:!1,strictNullHandling:!1},u=function t(e,i,r,a,n,c,d,u,g,m,v,f,b){var h=e;if("function"==typeof d?h=d(i,h):h instanceof Date?h=m(h):"comma"===r&&o(h)&&(h=h.join(",")),null===h){if(a)return c&&!f?c(i,p.encoder,b):i;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||s.isBuffer(h))return c?[v(f?i:c(i,p.encoder,b))+"="+v(c(h,p.encoder,b))]:[v(i)+"="+v(String(h))];var w,C=[];if(void 0===h)return C;if(o(d))w=d;else{var _=Object.keys(h);w=u?_.sort(u):_}for(var y=0;y<w.length;++y){var k=w[y];n&&null===h[k]||(o(h)?l(C,t(h[k],"function"==typeof r?r(i,k):i,r,a,n,c,d,u,g,m,v,f,b)):l(C,t(h[k],i+(g?"."+k:"["+k+"]"),r,a,n,c,d,u,g,m,v,f,b)))}return C};t.exports=function(t,e){var i,s=t,c=function(t){if(!t)return p;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||p.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var i=r.default;if(void 0!==t.format){if(!a.call(r.formatters,t.format))throw new TypeError("Unknown format option provided.");i=t.format}var s=r.formatters[i],n=p.filter;return("function"==typeof t.filter||o(t.filter))&&(n=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===t.allowDots?p.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:p.charsetSentinel,delimiter:void 0===t.delimiter?p.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:p.encode,encoder:"function"==typeof t.encoder?t.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:p.encodeValuesOnly,filter:n,formatter:s,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:p.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:p.strictNullHandling}}(e);"function"==typeof c.filter?s=(0,c.filter)("",s):o(c.filter)&&(i=c.filter);var d,g=[];if("object"!=typeof s||null===s)return"";d=e&&e.arrayFormat in n?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var m=n[d];i||(i=Object.keys(s)),c.sort&&i.sort(c.sort);for(var v=0;v<i.length;++v){var f=i[v];c.skipNulls&&null===s[f]||l(g,u(s[f],f,m,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var b=g.join(c.delimiter),h=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),b.length>0?h+b:""}},Qyje:function(t,e,i){"use strict";var s=i("QSc6"),r=i("nmq7"),a=i("sxOR");t.exports={formats:a,parse:r,stringify:s}},SfGX:function(t,e,i){"use strict";var s=i("sQ1G");i.n(s).a},"b+sa":function(t,e,i){},iHU4:function(t,e,i){},l27N:function(t,e,i){"use strict";var s=i("2DiZ"),r={name:"ButtomBtn",props:["txt1","txt2","show"],methods:{onInvokeApp:function(){_czc.push(["_trackEvent","onboardingGuide","click","action","",""]),Object(s.d)()?location.href="linkedin://you/profile":Object(s.a)()?location.href="https://www.linkedinmobileapp.com/m/profile/edit":location.href="linkedin://you/profile/edit"}},mounted:function(){this.callApp=i("6GYN")}},a=(i("A9Hb"),i("KHd+")),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-bottom-up"}},[0!=t.show?i("div",{staticClass:"toArchives"},[i("div",{staticClass:"txtOne"},[t._v(t._s(t.txt1))]),i("div",{staticClass:"txtTwo"},[t._v(t._s(t.txt2))]),i("img",{attrs:{src:"https://www.linkedin-event.com/image/onboarding-guide/buttom-group.png",alt:""},on:{click:t.onInvokeApp}})]):t._e()])}),[],!1,null,"ed6adf4c",null);e.a=n.exports},nmq7:function(t,e,i){"use strict";var s=i("0jNN"),r=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:s.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},n=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},o=function(t,e,i){if(t){var s=i.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,n=/(\[[^[\]]*])/.exec(s),o=n?s.slice(0,n.index):s,c=[];if(o){if(!i.plainObjects&&r.call(Object.prototype,o)&&!i.allowPrototypes)return;c.push(o)}for(var l=0;null!==(n=a.exec(s))&&l<i.depth;){if(l+=1,!i.plainObjects&&r.call(Object.prototype,n[1].slice(1,-1))&&!i.allowPrototypes)return;c.push(n[1])}return n&&c.push("["+s.slice(n.index)+"]"),function(t,e,i){for(var s=e,r=t.length-1;r>=0;--r){var a,n=t[r];if("[]"===n&&i.parseArrays)a=[].concat(s);else{a=i.plainObjects?Object.create(null):{};var o="["===n.charAt(0)&&"]"===n.charAt(n.length-1)?n.slice(1,-1):n,c=parseInt(o,10);i.parseArrays||""!==o?!isNaN(c)&&n!==o&&String(c)===o&&c>=0&&i.parseArrays&&c<=i.arrayLimit?(a=[])[c]=s:a[o]=s:a={0:s}}s=a}return s}(c,e,i)}};t.exports=function(t,e){var i=function(t){if(!t)return a;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?a.charset:t.charset;return{allowDots:void 0===t.allowDots?a.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:a.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:a.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:a.comma,decoder:"function"==typeof t.decoder?t.decoder:a.decoder,delimiter:"string"==typeof t.delimiter||s.isRegExp(t.delimiter)?t.delimiter:a.delimiter,depth:"number"==typeof t.depth?t.depth:a.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:a.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:a.strictNullHandling}}(e);if(""===t||null==t)return i.plainObjects?Object.create(null):{};for(var c="string"==typeof t?function(t,e){var i,o={},c=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,l=e.parameterLimit===1/0?void 0:e.parameterLimit,d=c.split(e.delimiter,l),p=-1,u=e.charset;if(e.charsetSentinel)for(i=0;i<d.length;++i)0===d[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[i]?u="utf-8":"utf8=%26%2310003%3B"===d[i]&&(u="iso-8859-1"),p=i,i=d.length);for(i=0;i<d.length;++i)if(i!==p){var g,m,v=d[i],f=v.indexOf("]="),b=-1===f?v.indexOf("="):f+1;-1===b?(g=e.decoder(v,a.decoder,u),m=e.strictNullHandling?null:""):(g=e.decoder(v.slice(0,b),a.decoder,u),m=e.decoder(v.slice(b+1),a.decoder,u)),m&&e.interpretNumericEntities&&"iso-8859-1"===u&&(m=n(m)),m&&e.comma&&m.indexOf(",")>-1&&(m=m.split(",")),r.call(o,g)?o[g]=s.combine(o[g],m):o[g]=m}return o}(t,i):t,l=i.plainObjects?Object.create(null):{},d=Object.keys(c),p=0;p<d.length;++p){var u=d[p],g=o(u,c[u],i);l=s.merge(l,g,i)}return s.compact(l)}},p6Nx:function(t,e,i){},sQ1G:function(t,e,i){},sxOR:function(t,e,i){"use strict";var s=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return s.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}}}]);