<template>
  <div v-show="isSwiperReady" id="wrap">
    <div v-swiper:mySwiper="swiperOption" style="height: 100%">
      <div class="swiper-wrapper">
        <div class="swiper-slide page1 overflow-hidden" style="height: 100%">
          <div class="pos-absolute circle" id="bg1-circle1" />
          <div class="pos-absolute circle" id="bg1-circle2" />
          <div class="pos-absolute circle" id="bg1-circle3" />
          <div class="pos-absolute circle" id="bg1-circle4" />
          <div class="pos-absolute circle" id="bg1-circle5" />
          <div class="pos-absolute circle" id="bg1-circle6" />
          <div class="pos-absolute meteor" id="bg1-meteor1" />
          <div class="pos-absolute meteor" id="bg1-meteor2" />
          <div class="pos-absolute meteor" id="bg1-meteor3" />
          <div class="pos-absolute" id="bg1-squire1" />
          <div class="pos-absolute" id="bg1-squire2" />
          <div class="pos-absolute" id="bg1-squire3" />
          <div class="pos-absolute" id="bg1-squire4" />
          <div class="pos-absolute" id="bg1-squire5" />
          <div class="pos-absolute" id="bg1-squire6" />
          <div class="pos-absolute" id="bg1-squire7" />
          <div class="pos-absolute" id="bg1-squire8" />
          <div class="pos-absolute" id="bg1-squire9" />
          <div class="pos-absolute" id="bg1-squire10" />
          <div class="pos-absolute" id="bg1-squire11" />
          <!-- <div> -->
          <div class="logo">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg1-logo.png" alt="" />
          </div>
          <div class="welcome">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg1-student.png" alt="" />
          </div>
          <div class="detail">
            <p>如果你对职业规划感到困惑</p>
            <p>如果你迫切需要实习机会</p>
            <p>
              <span>这里有</span>
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg1-5000.png" alt="" />
              <span>的职场前辈</span>
            </p>
            <p>无偿为你提供帮助</p>
          </div>
          <div class="start">
            <p>为职场做准备</p>
            <p>从玩转领英开始</p>
          </div>
          <DownArrow
            :src="'https://www.linkedin-event.com/image/onboarding-guide/rectangle.png'"
            @click.native="nextPage"
          ></DownArrow>
          <div class="people">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg1-people.png" alt="" />
          </div>
          <!-- </div> -->
        </div>
        <div class="swiper-slide page2 overflow-hidden">
          <DownArrow
            :src="'https://www.linkedin-event.com/image/onboarding-guide/rectangle.png'"
            @click.native="nextPage"
          ></DownArrow>
          <div class="detail">
            <p>首先</p>
            <p>第一印象很重要</p>
            <p>而<span>头像</span>是第一印象的关键。</p>
            <p>添加头像（可使用一寸照），完善档案，</p>
            <p>帮你增加可信度和<span class="percent">14% </span>的曝光机会！</p>
          </div>
          <ul class="infoList">
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info1.png" alt="" /></li>
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info2.png" alt="" /></li>
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info3.png" alt="" /></li>
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info4.png" alt="" /></li>
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info5.png" alt="" /></li>
            <li><img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-info6.png" alt="" /></li>
          </ul>
          <div class="earth">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-earth.png" alt="" />
          </div>
          <div class="pos-absolute circle" id="bg2-circle1" />
          <div class="pos-absolute circle" id="bg2-circle2" />
          <div class="pos-absolute circle" id="bg2-circle4" />
          <div class="pos-absolute circle" id="bg2-circle5" />
          <div class="pos-absolute circle" id="bg2-circle6" />
          <div class="more">下滑收获更多玩法</div>
          <div class="txt">
            <div class="left-earth">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-left-earth.png" alt="" />
            </div>
            <div class="right-earth">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg2-right-earth.png" alt="" />
            </div>
            <ul>
              <li>找朋辈导师，解答求职困惑</li>
              <li>学生专属实习/校招职位列表</li>
              <li>找校友内推，获得大厂offer</li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide page3 overflow-hidden">
          <GuideTitle
            :titleConSrc="'https://www.linkedin-event.com/image/onboarding-guide/dispelling-doubts2.png'"
            :titleConSrcMin="'https://www.linkedin-event.com/image/onboarding-guide/dispelling-doubt-min.png'"
          ></GuideTitle>
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif1.gif'">
            <div class="number">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/number1.png" alt="" />
            </div>
            <div class="people">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg3-new-people.png" alt="" />
            </div>
            <div class="tutor">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg3-new-earth.png" alt="" />
            </div>
          </VideoCon>
          <div class="pos-absolute circle" id="bg3-circle1"></div>
          <div class="pos-absolute circle" id="bg3-circle3"></div>
          <div class="pos-absolute circle" id="bg3-circle4"></div>
          <div class="pos-absolute circle" id="bg3-circle5"></div>
          <div class="pos-absolute circle" id="bg3-circle6"></div>
          <div class="pos-absolute meteor2" id="bg3-meteor1" />
          <div class="pos-absolute meteor2" id="bg3-meteor2" />
          <div class="pos-absolute meteor3" id="bg3-meteor3" />
          <div class="pos-absolute meteor3" id="bg3-meteor4" />
          <div class="pos-absolute meteor3" id="bg3-meteor5" />
          <div class="detail">
            <p>操作步骤：点击“我”-“寻找我的职场导师”</p>
            <p>超过<span>2万</span>名来自各行业的热心职场人</p>
            <p><span>无偿</span>为学生提供<span>1对1</span>的线上职业辅导</p>
          </div>
        </div>
        <div class="swiper-slide page4 overflow-hidden">
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif2.gif'">
            <div class="number">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/number2.png" alt="" />
            </div>
            <div class="talk">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/bg4-talk.png" alt="" />
            </div>
          </VideoCon>
          <div class="detail">
            <p>操作步骤：搜索“领英职场练习生”，点击关注</p>
            <p>关注领英校园官号</p>
            <p>@领英职场练习生</p>
            <p>围观学生热门话题</p>
          </div>
          <div class="pos-absolute circle" id="bg4-circle1"></div>
          <div class="pos-absolute circle" id="bg4-circle2"></div>
          <div class="pos-absolute meteor" id="bg4-meteor1"></div>
          <div class="pos-absolute meteor" id="bg4-meteor2"></div>
          <div class="topic">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/topic.png" alt="" />
          </div>
        </div>
        <div class="swiper-slide page5 overflow-hidden">
          <GuideTitle
            :titleConSrc="'https://www.linkedin-event.com/image/onboarding-guide/find-job2.png'"
            :titleConSrcMin="'https://www.linkedin-event.com/image/onboarding-guide/find-job-min2.png'"
          ></GuideTitle>
          <div class="titleCon">
            <p><span>学生专属</span>的实习校招职位在这里！</p>
          </div>
          <div class="pos-absolute circle" id="bg5-circle1" />
          <div class="pos-absolute circle" id="bg5-circle2" />
          <div class="pos-absolute circle" id="bg5-circle3" />
          <div class="pos-absolute meteor" id="bg5-meteor1"></div>
          <div class="pos-absolute meteor" id="bg5-meteor2"></div>
          <div class="pos-absolute meteor" id="bg5-meteor3"></div>
          <div class="pos-absolute meteor" id="bg5-meteor4"></div>
          <div class="people">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg5-people.png" alt="" />
          </div>
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif3.gif'">
            <div class="earth">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/earth.png" alt="" />
            </div>
          </VideoCon>
          <div class="txt">
            <p>操作步骤：</p>
            <p>搜索“实习”等关键字</p>
          </div>
        </div>
        <div class="swiper-slide page6 overflow-hidden">
          <div class="circular2">
            <p>进阶玩法</p>
            <p>&nbsp;第一时间获取最新职位！</p>
          </div>
          <div class="pos-absolute circle" id="bg6-circle1" />
          <div class="pos-absolute circle" id="bg6-circle2" />
          <div class="pos-absolute circle" id="bg6-circle3" />
          <div class="pos-absolute circle" id="bg6-circle4" />
          <div class="pos-absolute circle" id="bg6-circle5" />
          <div class="pos-absolute circle" id="bg6-circle6" />
          <div class="pos-absolute meteor" id="bg6-meteor1"></div>
          <div class="pos-absolute meteor" id="bg6-meteor2"></div>
          <div class="pos-absolute meteor" id="bg6-meteor3"></div>
          <div class="pos-absolute meteor" id="bg6-meteor4"></div>
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif4.gif'"></VideoCon>
          <div class="detail">
            <p>点击首页底部“求职招聘”</p>
            <p>点击“+”-“创建求职意向”</p>
          </div>
          <div class="tips">
            <div class="left">TIPS</div>
            <div class="txt">通过找<span>校友内推</span>，成功获得实习或校招offer的几率更大！</div>
          </div>
          <div class="people">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg6-new-people.png" alt="" />
          </div>
        </div>
        <div class="swiper-slide page7 overflow-hidden">
          <GuideTitle
            :titleConSrc="'https://www.linkedin-event.com/image/onboarding-guide/find-alumni3.png'"
            :titleConSrcMin="'https://www.linkedin-event.com/image/onboarding-guide/find-alumni-min2.png'"
          ></GuideTitle>
          <div class="detail">
            <p>查看校友过往经历，获得更清晰的<span>职场规划</span></p>
            <p>一键添加校友，获取<span>内推机会</span></p>
          </div>
          <div class="pos-absolute circle" id="bg7-circle1" />
          <div class="pos-absolute circle" id="bg7-circle2" />
          <div class="pos-absolute circle" id="bg7-circle3" />
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif5.gif'">
            <div class="number">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/number1.png" alt="" />
            </div>
          </VideoCon>
          <div class="detail2">
            <p>操作步骤：在搜索框输入学校名字，进入</p>
            <p>学校主页，点击“查看校友”</p>
          </div>
        </div>
        <div class="swiper-slide page8 overflow-hidden">
          <VideoCon :gifUrl="'https://www.linkedin-event.com/image/onboarding-guide/guidebook-gif6.gif'">
            <div class="number">
              <img src="https://www.linkedin-event.com/image/onboarding-guide/number2.png" alt="" />
            </div>
          </VideoCon>
          <div class="pos-absolute circle" id="bg8-circle1" />
          <div class="pos-absolute circle" id="bg8-circle2" />
          <div class="pos-absolute circle" id="bg8-circle3" />
          <div class="pos-absolute circle" id="bg8-circle4" />
          <div class="pos-absolute circle" id="bg8-circle5" />
          <div class="pos-absolute circle" id="bg8-circle6" />
          <div class="pos-absolute circle" id="bg8-circle7" />
          <div class="pos-absolute circle" id="bg8-circle8" />
          <div class="pos-absolute meteor" id="bg8-meteor1"></div>
          <div class="pos-absolute meteor" id="bg8-meteor2"></div>
          <div class="pos-absolute meteor" id="bg8-meteor3"></div>
          <div class="people">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg8-new-people2.png" alt="" />
          </div>
          <div class="logo">
            <img src="https://www.linkedin-event.com/image/onboarding-guide/bg1-logo.png" alt="" />
          </div>
          <div class="txt">操作步骤：点击“人脉”-“校友”</div>
        </div>
      </div>
    </div>
    <ButtomBtn :txt1="txt1" :txt2="txt2" :show="activeIndex"></ButtomBtn>
  </div>
</template>
<script>
import 'swiper/css/swiper.css';
import ButtomBtn from '~/components/onboarding-guide/ButtomBtn.vue';
import GuideTitle from '~/components/onboarding-guide/GuideTitle.vue';
import VideoCon from '~/components/onboarding-guide/VideoCon.vue';
import DownArrow from '~/components/onboarding-guide/DownArrow.vue';
export default {
  metaInfo: {
    title: '领英带你走好职场第一步',
    titleTemplate: '领英带你走好职场第一步',
    meta: [
      { property: 'og:title', content: '走好职场第一步 从玩转领英开始' },
      {
        property: 'og:url',
        content: 'https://linkedin-event.com/campaign/onboarding-guide/index.html',
      },
      {
        property: 'og:image',
        content: 'https://www.linkedin-event.com/image/onboarding-guide/onboarding_share.jpg',
      },
    ],
    script: [
      {
        vmid: 'cnzz',
        key: 'cnzz',
        src: 'https://s4.cnzz.com/z_stat.php?id=1277901282&web_id=1277901282',
        body: true,
      },
      {
        vmid: 'ldjson-schema',
        innerHTML: `window.__pageSharingConfig = {
      title: '走好职场第一步 从玩转领英开始',
      imageUrl: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg',
      description: '获得实习内推机会和更多隐形人脉',
      url: 'https://linkedin-event.com/campaign/onboarding-guide/?trk=share',
    };`,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML'],
    },
  },
  components: {
    ButtomBtn,
    GuideTitle,
    VideoCon,
    DownArrow,
  },
  // for swiper usage in ssr
  // https://github.com/surmon-china/vue-awesome-swiper/issues/586
  directives: !process.browser
    ? {}
    : {
        swiper: require('vue-awesome-swiper').directive,
      },
  data() {
    let vm = this;
    return {
      isSwiperReady: false,
      swiperOption: {
        direction: 'vertical',
        on:{
          init() {
          // setTimeout(()=>{vm.isSwiperReady=true;},500)
            vm.isSwiperReady = true; //when swiper is not ready, don't show the page, as there might be unexpected user behavior on swiper
          },
          slideChangeEnd: function (swiper) {
            vm.activeIndex = swiper.activeIndex;
          },
        }
      },
      activeIndex: 0,
      initialSlide: 0,
      txt1: '完善领英档案',
      txt2: '获得更多隐形人脉 · 解锁更多成长机会',
    };
  },
  methods: {
    nextPage() {
      _czc.push([
        '_trackEvent', // required
        'onboardingGuide', // pageKey
        'click', // event type
        'arrowhead', // button name
        '',
        '',
      ]);
      this.mySwiper.slideNext();
    },
  },
  mounted() {
    var _czc = _czc || [];
    _czc.push(['_setAccount', '1277901282']);
  },
};
</script>
<style lang="scss" scoped>
@import '~/style/_reset.scss';
#app {
  width: 100%;
  height: 100%;
  user-select: none;
  // pointer-events: none;
}

.pos-absolute {
  position: absolute;
}
.circle {
  border-radius: 9999px;
}

.swiper-container,
.swiper-wrapper,
.swiper-slide {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // fix white flash
  transform: translate3d(0, 0, 0);
  * {
    // user-select: none;
    // appearance: none;
    // pointer-events: none;
  }
  .downArrow {
    pointer-events: initial;
  }
}

.meteor {
  width: 9px;
  height: 185px;
  background: linear-gradient(180deg, #dfedf4 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 24px;
  transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
}
.meteor2 {
  width: 14px;
  height: 150px;
  background: linear-gradient(180deg, rgba(55, 143, 233, 0.7) 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 24px;
  transform: rotate(-135deg);
}
.meteor3 {
  width: 9px;
  height: 185px;
}
.overflow-hidden {
  overflow: hidden;
}
#bg1-circle1 {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 634px;
  top: 52px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.45) 0%,
    rgba(168, 212, 255, 0.45) 100%
  );
  mix-blend-mode: screen;
  transform: rotate(62.18deg);
}
#bg1-circle2 {
  position: absolute;
  width: 257px;
  height: 257px;
  left: -148.69px;
  top: 52.5px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.5) 0%,
    rgba(168, 212, 255, 0.5) 100%
  );
  mix-blend-mode: screen;
  transform: rotate(62.18deg);
}
#bg1-circle3 {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 604px;
  top: 270px;
  background: #f8c77e;
  transform: rotate(34.51deg);
}
#bg1-circle4 {
  position: absolute;
  width: 76px;
  height: 76px;
  left: 711px;
  top: 366px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: screen;
  transform: rotate(62.18deg);
}
#bg1-circle5 {
  position: absolute;
  width: 15px;
  height: 15px;
  left: 76.2px;
  top: 780px;
  background: #f8c77e;
  transform: rotate(34.51deg);
}
#bg1-circle6 {
  position: absolute;
  width: 816px;
  height: 816px;
  left: -30px;
  bottom: -320px;
  background: linear-gradient(180deg, #2586e7 0%, rgba(5, 89, 172, 0.82) 100%);
}
#bg1-meteor1 {
  width: 5.64px;
  height: 120px;
  left: 612px;
  top: 150px;
}
#bg1-meteor2 {
  width: 5.64px;
  height: 120px;
  left: 118px;
  top: 142px;
}
#bg1-meteor3 {
  width: 5.64px;
  height: 120px;
  left: 758px;
  top: 458px;
}
#bg1-squire1 {
  width: 148px;
  height: 208px;
  left: -16px;
  top: 833px;
  background: #ff9466;
}
#bg1-squire2 {
  width: 74px;
  height: 104px;
  left: 562px;
  top: 880px;
  background: #ff9466;
  mix-blend-mode: overlay;
}
#bg1-squire3 {
  width: 30px;
  height: 21 * 2px;
  left: 325 * 2px;
  top: 509.29 * 2px;
  background: #ffdfd1;
  mix-blend-mode: overlay;
}
#bg1-squire4 {
  width: 107 * 2px;
  height: 140 * 2px;
  left: 35 * 2px;
  top: 579.29 * 2px;
  background: rgba(68, 182, 246, 0.81);
  mix-blend-mode: normal;
}
#bg1-squire5 {
  width: 106 * 2px;
  height: 148 * 2px;
  left: 297 * 2px;
  top: 626.29 * 2px;
  background: #ff9466;
}
#bg1-squire6 {
  width: 40 * 2px;
  height: 52 * 2px;
  left: 57 * 2px;
  top: 704.29 * 2px;
  background: rgba(255, 148, 102, 0.9);
  mix-blend-mode: lighten;
}
#bg1-squire7 {
  width: 59.47 * 2px;
  height: 56.22 * 2px;
  left: 42.5 * 2px;
  top: 435.55 * 2px;
  background: #ffc1a7;
  mix-blend-mode: overlay;
}
#bg1-squire8 {
  width: 95.31 * 2px;
  height: 120.93 * 2px;
  left: -70 * 2px;
  top: 474.95 * 2px;
  background: #ffc1a7;
  mix-blend-mode: overlay;
}
#bg1-squire9 {
  width: 54.58 * 2px;
  height: 54.59 * 2px;
  left: 310.42 * 2px;
  top: 516.69 * 2px;
  background: #ffc1a7;
  mix-blend-mode: overlay;
}
#bg1-squire10 {
  width: 131.97 * 2px;
  height: 118.96 * 2px;
  left: -52.08 * 2px;
  top: 693.32 * 2px;
  background: #ffc1a7;
  mix-blend-mode: overlay;
}
#bg1-squire11 {
  width: 83.09 * 2px;
  height: 59.48 * 2px;
  left: 252 * 2px;
  top: 691.06 * 2px;
  background: #ffc1a7;
  mix-blend-mode: overlay;
}
#bg2-circle1 {
  width: 816px;
  height: 816px;
  left: 50%;
  transform: translate(-50%, 0);
  top: -230.29 * 3px;
  background: linear-gradient(180deg, #2586e7 0%, rgba(5, 89, 172, 0.82) 100%);
}
#bg2-circle2 {
  width: 153 * 2px;
  height: 153 * 2px;
  left: -82 * 2px;
  top: 130px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  opacity: 0.17;
  transform: matrix(0, 1, 1, 0, 0, 0);
}
#bg2-circle4 {
  width: 18px;
  height: 20px;
  left: 562px;
  top: 920px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  transform: matrix(0, 1, 1, 0, 0, 0);
}
#bg2-circle5 {
  width: 9.4px;
  height: 9.4px;
  left: 125px;
  top: 972px;
  background: #dfefff;
}
#bg2-circle6 {
  width: 428px;
  height: 430px;
  left: 540px;
  top: 966px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  opacity: 0.17;
  transform: matrix(0, 1, 1, 0, 0, 0);
}
#bg3-circle1 {
  width: 900px;
  height: 900px;
  left: 84.35px;
  top: -462px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(72.49deg);
}

#bg3-circle3 {
  width: 9.4px;
  height: 9.4px;
  left: 693px;
  top: 944px;
  background: #dfefff;
  transform: rotate(34.51deg);
}

#bg3-circle4 {
  width: 900px;
  height: 900px;
  left: 84.35px;
  top: -462px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(72.49deg);
}
#bg3-circle5 {
  width: 37px;
  height: 37px;
  left: 728px;
  top: 700px;
  background: rgba(223, 239, 255, 0.7);
  transform: rotate(34.51deg);
}
#bg3-circle6 {
  width: 9.4px;
  height: 9.4px;
  left: 650px;
  top: 530px;
  background: rgba(10, 102, 194, 0.6);
  transform: rotate(34.51deg);
  transform: rotate(72.49deg);
}
#bg3-meteor1 {
  left: -2.1px;
  top: 226px;
}
#bg3-meteor2 {
  left: 250px;
  top: 248px;
}
#bg3-meteor3 {
  left: 130px;
  top: 856px;
  background: linear-gradient(180deg, #dfedf4 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 12px;
  transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
}
#bg3-meteor4 {
  left: 738px;
  top: 724px;
  background: linear-gradient(180deg, #dfedf4 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 12px;
  transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
}
#bg3-meteor5 {
  left: -4px;
  top: 510px;
  background: linear-gradient(180deg, #378fe9 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 12px;
  transform: matrix(0.71, 0.71, 0.71, -0.71, 0, 0);
}
#bg4-circle1 {
  width: 773px;
  height: 773px;
  left: 603px;
  top: 1633px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.32) 0%,
    rgba(168, 212, 255, 0.32) 100%
  );
  transform: rotate(169.05deg);
}
#bg4-circle2 {
  width: 567px;
  height: 567px;
  left: -440px;
  top: 358px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.32) 0%,
    rgba(168, 212, 255, 0.32) 100%
  );
  transform: rotate(-180deg);
  z-index: 90;
}
#bg4-meteor1 {
  width: 4.34 * 2px;
  height: 92.65 * 2px;
  left: 319 * 2px;
  top: 317.52 * 2px;
}
#bg4-meteor2 {
  width: 4.34 * 2px;
  height: 92.65 * 2px;
  left: 19 * 2px;
  top: 550.52 * 2px;
}
#bg5-circle1 {
  width: 206px;
  height: 206px;
  left: 600px;
  top: 880px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  transform: rotate(-76.2deg);
}
#bg5-circle2 {
  width: 37px;
  height: 37px;
  left: 95px;
  top: 1326px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(-151.83deg);
}
#bg5-circle3 {
  width: 876px;
  height: 876px;
  left: 104px;
  bottom: -590px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(-151.83deg);
}
#bg5-meteor1 {
  left: 6px;
  top: 700px;
}
#bg5-meteor2 {
  left: 758px;
  top: 495px;
}
#bg5-meteor3 {
  left: -40px;
  top: 1400px;
}
#bg5-meteor4 {
  left: 514px;
  top: -111px;
}
#bg6-circle1 {
  width: 36px;
  height: 36px;
  left: 660px;
  top: 252px;
  background: #f8c77e;
  transform: rotate(34.51deg);
}
#bg6-circle2 {
  width: 186.6px;
  height: 186.6px;
  left: 603px;
  top: 1030px;
  z-index: 400;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  transform: rotate(90deg);
}
#bg6-circle3 {
  width: 59px;
  height: 59px;
  left: 79px;
  top: 32px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: screen;
  transform: rotate(169.05deg);
}
#bg6-circle4 {
  width: 264px;
  height: 264px;
  left: 244px;
  top: 40px;
  z-index: 10;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #065fc8 0%, #89c4ff 100%);
  opacity: 0.63;
}
#bg6-circle5 {
  width: 9.4px;
  height: 9.4px;
  left: 455px;
  top: 1330px;
  background: #dfefff;
  transform: rotate(34.51deg);
}
#bg6-circle6 {
  width: 548.47 * 2px;
  height: 548.47 * 2px;
  left: -452.54px;
  bottom: -900px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(-147.3deg);
}
#bg6-meteor1 {
  left: 94px;
  top: 73px;
}
#bg6-meteor2 {
  left: 648px;
  top: -44px;
}
#bg6-meteor3 {
  left: 3px;
  top: 839px;
}
#bg6-meteor4 {
  left: 702px;
  top: 651px;
}
#bg7-circle1 {
  position: absolute;
  width: 174px;
  height: 174px;
  left: 645px;
  top: 454px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.41) 0%,
    rgba(168, 212, 255, 0.41) 100%
  );
  mix-blend-mode: screen;
  transform: rotate(169.05deg);
}
#bg7-circle2 {
  width: 101px;
  height: 101px;
  left: -39px;
  top: 232px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  transform: rotate(103.8deg);
}
#bg7-circle3 {
  width: 920px;
  height: 920px;
  left: -414px;
  top: 1119px;
  background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
  transform: rotate(-175.71deg);
}
#bg8-circle1 {
  width: 370px;
  height: 370px;
  left: -200px;
  top: 80px;
  background: radial-gradient(
    108.41% 108.41% at 68.58% 72.12%,
    rgba(15, 114, 214, 0.32) 0%,
    rgba(168, 212, 255, 0.32) 100%
  );
  transform: rotate(-180deg);
}
#bg8-circle2 {
  width: 131px;
  height: 131px;
  right: 60px;
  top: 36px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: screen;
  transform: rotate(62.18deg);
}
#bg8-circle3 {
  width: 36px;
  height: 36px;
  left: 68px;
  top: 614px;
  background: #f8c77e;
  transform: rotate(34deg);
}
#bg8-circle4 {
  width: 10px;
  height: 10px;
  left: 64px;
  top: 860px;
  background: #dfefff;
  transform: rotate(34deg);
}
#bg8-circle5 {
  width: 60px;
  height: 60px;
  left: 124.62px;
  top: 800px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  z-index: 100;
  mix-blend-mode: screen;
  transform: rotate(169.05deg);
}
#bg8-circle6 {
  width: 21px;
  height: 21px;
  left: 676px;
  top: 968px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: screen;
  transform: rotate(169.05deg);
}
#bg8-circle7 {
  width: 1220px;
  height: 1220px;
  left: 986px;
  top: 2382px;
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: multiply;
  opacity: 0.38;
  transform: rotate(-180deg);
}
#bg8-circle8 {
  width: 610 * 2px;
  height: 610 * 2px;
  bottom: -910px;
  left: 50%;
  transform: translate(-50%, 0) rotate(-180deg);
  background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
  mix-blend-mode: multiply;
  opacity: 0.38;
}
#bg8-meteor1 {
  width: 14px;
  height: 150px;
  left: 661px;
  top: -59.98px;
  background: linear-gradient(180deg, rgba(135, 170, 206, 0.1) 0%, rgba(55, 143, 233, 0) 100%);
  border-radius: 12px;
  transform: rotate(-135deg);
}
#bg8-meteor2 {
  left: 766px;
  top: 1023px;
}
#bg8-meteor3 {
  left: 252px;
  top: -35.52px;
}

.page1 {
  width: 100%;
  height: 100%;
  background: #1166ca;
  text-align: center;
  .logo img {
    width: 196px;
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .welcome {
    height: 166px;
    margin-top: 220px;
    margin: 0 auto;
    img {
      height: 100%;
    }
  }
  .people {
    width: 270px;
    height: auto;
    position: absolute;
    bottom: 420px;
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .downArrow {
    bottom: 100px;
  }
  .detail {
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: #fff;
    margin-top: 40px;
    line-height: 1.8;
    p:nth-child(3) {
      img {
        width: 290px;
        margin-bottom: -14px;
        margin-right: -30px;
      }
    }
  }
  .start {
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: #fff;
    position: absolute;
    bottom: 220px;
    line-height: 1.7;
  }
}
.page2 {
  width: 100%;
  height: 100%;
  background-color: #1166ca;
  background-size: 100% 100%;
  position: relative;
  .topBg {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
  .detail {
    line-height: 1.6;
    color: #f6fbff;
    font-size: 36px;
    width: 100%;
    text-align: center;
    margin-top: 30px;
    position: relative;
    z-index: 10;
    span {
      color: #f1955a;
      font-size: 50px;
      font-weight: bold;
    }
    .percent {
      font-size: 54px;
      font-weight: normal;
    }
  }
  .more {
    width: 100%;
    text-align: center;
    color: #f6fbff;
    font-size: 30px;
    position: absolute;
    bottom: 43%;
    font-weight: bold;
  }
  .downArrow {
    bottom: 38%;
  }
  .circular {
    height: 300px;
    position: absolute;
    left: 0;
    top: 40px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .circular3 {
    width: 8px;
    height: 8px;
    position: absolute;
    left: 15%;
    bottom: 45%;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .circular4 {
    width: 18px;
    height: 18px;
    position: absolute;
    right: 15%;
    bottom: 42%;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .infoList {
    display: flex;
    list-style: none;
    margin-top: 64px;
    justify-content: center;
    li {
      margin-left: 15px;
      img {
        width: 80px;
        height: auto;
      }
    }
  }
  .earth {
    width: 300px;
    height: auto;
    margin-left: 40px;
    margin: 0 auto;
    position: absolute;
    bottom: 48%;
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .txt {
    width: 100%;
    position: absolute;
    bottom: 220px;
    .left-earth {
      width: 152px;
      height: auto;
      position: absolute;
      left: 100px;
      top: -50px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .right-earth {
      width: 152px;
      height: auto;
      position: absolute;
      right: 60px;
      bottom: 30px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    ul {
      li {
        width: 480px;
        height: 68px;
        background: #007af8;
        border-radius: 60px;
        text-align: center;
        color: #ffffff;
        font-size: 30px;
        line-height: 68px;
        margin: 0 auto;
        margin-top: 20px;
      }
    }
  }
  .circular5 {
    height: 280px;
    position: absolute;
    right: 0;
    bottom: 250px;
    img {
      height: 100%;
      display: block;
    }
  }
}
.page3 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  position: relative;
  .videoCon {
    position: absolute;
    bottom: 30%;
    .number {
      position: absolute;
      left: 120px;
      top: -30px;
      width: 140px;
      height: 140px;
      z-index: 100;
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .people {
    position: absolute;
    left: 140px;
    top: -240px;
    width: 120px;
    height: 222px;
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .tutor {
    position: absolute;
    right: 10px;
    top: -105px;
    width: 380px;
    height: auto;
    z-index: 300;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .detail {
    width: 100%;
    position: absolute;
    bottom: 210px;
    text-align: center;
    z-index: 100;
    p:nth-child(1) {
      color: #d0e8ff;
      font-size: 28px;
      width: 100%;
      text-align: center;
    }
    p:nth-child(2),
    p:nth-child(3),
    p:nth-child(4) {
      color: #fff;
      font-size: 32px;
      text-align: center;
      line-height: 1.4;
    }
    p:nth-child(2) span,
    p:nth-child(3) span,
    p:nth-child(4) span {
      color: #ff9466;
      font-size: 60px;
      font-weight: 600;
    }
  }
}
.page4 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  position: relative;
  .videoCon {
    margin-top: 70px;
    .number {
      width: 138px;
      height: 138px;
      position: absolute;
      left: 100px;
      top: -10px;
      padding: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .talk {
      width: 320px;
      height: 184px;
      position: absolute;
      left: 400px;
      top: -65px;
      z-index: 400;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .topic {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 150px;
    left: 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .detail {
    color: #d0e8ff;
    font-size: 28px;
    width: 100%;
    text-align: center;
    line-height: 1.5;
    position: absolute;
    z-index: 100;
    bottom: 32%;
    p:nth-child(1) {
      margin-bottom: 40px;
    }
    p:nth-child(2) {
      color: #ffffff;
      font-size: 40px;
      font-weight: bold;
    }
    p:nth-child(3) {
      color: #f1c788;
      font-size: 40px;
      font-weight: bold;
    }
    p:nth-child(4) {
      color: #fff;
      font-size: 40px;
      font-weight: bold;
    }
  }
}
.page5 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  .titleCon p {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 40px;
    line-height: 1.6;
    font-weight: bold;
  }
  .titleCon span {
    color: #f8c77e;
    font-size: 60px;
  }
  .videoCon {
    margin-top: 0;
  }
  .earth {
    width: 250px;
    height: 146px;
    position: absolute;
    right: 30px;
    top: 5px;
    z-index: 300;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .people {
    width: 186px;
    height: 92px;
    position: absolute;
    bottom: 260px;
    left: 450px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .circular {
    height: 170px;
    width: auto;
    position: absolute;
    right: 0;
    bottom: 30%;
    img {
      height: 100%;
      display: block;
    }
  }

  .circular2 {
    width: 80%;
    height: 15%;
    position: absolute;
    bottom: 148px;
    right: 0;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .people {
    height: auto;
    width: 150px;
    position: absolute;
    right: 200px;
    bottom: 270px;
    img {
      width: 150px;
      height: auto;
      display: block;
    }
  }
  .txt {
    line-height: 1.7;
    color: #d0e8ff;
    position: absolute;
    bottom: 280px;
    left: 14%;
    font-size: 30px;
  }
}
.page6 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  .circular2 {
    width: 500px;
    height: 180px;
    font-size: 35px;
    color: #fff;
    line-height: 1.7;
    z-index: 100;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    padding-top: 20px;
    p:nth-child(1) {
      margin-top: 10px;
      font-size: 50px;
      font-weight: bold;
    }
    p:nth-child(2) {
      color: #f3ba64;
      font-size: 44px;
      font-weight: bold;
    }
  }
  .circular3 {
    height: 186px;
    position: absolute;
    right: 0px;
    bottom: 300px;
    z-index: 100;
    img {
      width: auto;
      height: 100%;
      display: block;
    }
  }
  .videoCon {
    margin-top: 240px;
  }
  .detail {
    width: 100%;
    text-align: center;
    color: #d0e8ff;
    font-size: 32px;
    line-height: 1.6;
  }
  .tips {
    width: 520px;
    height: 100px;
    padding: 20px;
    background: url('https://www.linkedin-event.com/image/onboarding-guide/bg6-tip-bg.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;
    font-size: 30px;
    z-index: 300;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 0 auto;
    display: flex;
    .left {
      width:100px;
      color: #a8d4ff;
      font-size: 40px;
      font-weight: bold;
    }
    .txt {
      margin-left: 15px;
      span {
        color: #f8c77e;
      }
    }
  }
  .people {
    height: 200px;
    position: absolute;
    bottom: 138px;
    z-index: 300;
    left: 40px;
    img {
      height: 100%;
      display: block;
    }
  }
}
.page7 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  position: relative;
  .circular1 {
    height: 100px;
    left: 0;
    position: absolute;
    top: 320px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .circular2 {
    width: 160px;
    right: 0;
    position: absolute;
    top: 400px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .detail {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 32px;
    p {
      line-height: 1.5;
      span {
        color: #f8c77e;
        font-size: 50px;
        font-weight: bold;
      }
    }
  }
  .videoCon {
    margin-top: 0;
    .number {
      width: 138px;
      height: 138px;
      position: absolute;
      left: 70px;
      top: 5px;
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .detail2 {
    position:relative;
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: #d0e8ff;
    margin-top: -7px;
    line-height: 1.7;
  }
}
.page8 {
  width: 100%;
  height: 100%;
  background: #3175c5;
  position: relative;
  .videoCon {
    position: absolute;
    z-index: 300;
    margin-top: 100px;
    .number {
      width: 140px;
      height: 140px;
      position: absolute;
      left: 85px;
      top: -10px;
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .circular {
    width: 130px;
    height: 130px;
    position: absolute;
    right: 20px;
    top: 40px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .circular2 {
    height: 360px;
    position: absolute;
    left: 0px;
    top: 10px;
    img {
      width: auto;
      height: 100%;
      display: block;
    }
  }
  .circular3 {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 60px;
    bottom: 500px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .circular4 {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 70px;
    bottom: 530px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .people_bg {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .people {
    width: 340px;
    position: absolute;
    bottom: 240px;
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .logo {
    width: 200px;
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .txt {
    width: 100%;
    position: absolute;
    top: 51%;
    font-weight: bold;
    text-align: center;
    color: #d0e8ff;
    font-size: 32px;
  }
}
/* Minimum aspect ratio */
@media (min-aspect-ratio: 4/7) {
  #bg1-circle6 {
    position: absolute;
    width: 816px;
    height: 816px;
    left: -30px;
    bottom: -440px;
    background: linear-gradient(180deg, #2586e7 0%, rgba(5, 89, 172, 0.82) 100%);
  }
  .page1 {
    width: 100%;
    height: 100%;
    background: #1166ca;
    text-align: center;
    .logo img {
      width: 156px;
      margin-top: 60px;
      margin-bottom: 40px;
    }
    .welcome {
      height: 166px;
      margin-top: 220px;
      margin: 0 auto;
      img {
        height: 90%;
      }
    }
    .people {
      width: 270px;
      height: auto;
      position: absolute;
      bottom: 310px;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .downArrow {
      bottom: 100px;
    }
    .detail {
      width: 100%;
      text-align: center;
      font-size: 32px;
      color: #fff;
      margin-top: 20px;
      line-height: 1.8;
      p:nth-child(3) {
        img {
          width: 290px;
          margin-bottom: -14px;
          margin-right: -30px;
        }
      }
    }
    .start {
      width: 100%;
      text-align: center;
      font-size: 32px;
      color: #fff;
      position: absolute;
      bottom: 170px;
      line-height: 1.7;
    }
  }
  .page2 {
    width: 100%;
    height: 100%;
    background-color: #1166ca;
    background-size: 100% 100%;
    position: relative;
    .topBg {
      width: 100%;
      img {
        width: 100%;
        display: block;
      }
    }
    .detail {
      line-height: 1.6;
      color: #f6fbff;
      font-size: 32px;
      width: 100%;
      text-align: center;
      margin-top: 30px;
      position: relative;
      z-index: 10;
      span {
        color: #f1955a;
        font-size: 44px;
        font-weight: bold;
      }
      .percent {
        font-size: 46px;
        font-weight: normal;
      }
    }
    .more {
      width: 100%;
      text-align: center;
      color: #f6fbff;
      font-size: 30px;
      position: absolute;
      bottom: 43%;
      font-weight: bold;
    }
    .downArrow {
      bottom: 40%;
    }
    .circular {
      height: 300px;
      position: absolute;
      left: 0;
      top: 40px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .circular3 {
      width: 8px;
      height: 8px;
      position: absolute;
      left: 15%;
      bottom: 45%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .circular4 {
      width: 18px;
      height: 18px;
      position: absolute;
      right: 15%;
      bottom: 42%;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .infoList {
      display: flex;
      list-style: none;
      margin-top: 34px;
      justify-content: center;
      li {
        margin-left: 15px;
        img {
          width: 80px;
          height: auto;
        }
      }
    }
    .earth {
      width: 300px;
      height: auto;
      margin-left: 40px;
      margin: 0 auto;
      position: absolute;
      bottom: 46%;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .txt {
      width: 100%;
      position: absolute;
      bottom: 180px;
      .left-earth {
        width: 152px;
        height: auto;
        position: absolute;
        left: 100px;
        top: -50px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .right-earth {
        width: 152px;
        height: auto;
        position: absolute;
        right: 60px;
        bottom: 30px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      ul {
        li {
          width: 480px;
          height: 68px;
          background: #007af8;
          border-radius: 60px;
          text-align: center;
          color: #ffffff;
          font-size: 30px;
          line-height: 68px;
          margin: 0 auto;
          margin-top: 20px;
        }
      }
    }
    .circular5 {
      height: 280px;
      position: absolute;
      right: 0;
      bottom: 250px;
      img {
        height: 100%;
        display: block;
      }
    }
  }
  .page3 {
    width: 100%;
    height: 100%;
    background: #3175c5;
    // background: red;
    position: relative;
    .videoCon {
      position: absolute;
      bottom: 32%;
      .number {
        position: absolute;
        left: 120px;
        top: -30px;
        width: 110px;
        height: 110px;
        z-index: 100;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
    .people {
      position: absolute;
      left: 140px;
      top: -240px;
      width: 120px;
      height: 222px;
      z-index: 100;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .tutor {
      position: absolute;
      right: 10px;
      top: -105px;
      width: 320px;
      height: auto;
      z-index: 300;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .detail {
      width: 100%;
      position: absolute;
      bottom: 190px;
      text-align: center;
      z-index: 100;
      p:nth-child(1) {
        color: #d0e8ff;
        font-size: 24px;
        width: 100%;
        text-align: center;
      }
      p:nth-child(2),
      p:nth-child(3),
      p:nth-child(4) {
        color: #fff;
        font-size: 26px;
        text-align: center;
        line-height: 1.4;
      }
      p:nth-child(2) span,
      p:nth-child(3) span,
      p:nth-child(4) span {
        color: #ff9466;
        font-size: 50px;
        font-weight: 600;
      }
    }
  }
  .page4 {
    width: 100%;
    height: 100%;
    background: #3175c5;
    position: relative;
    .videoCon {
      margin-top: 70px;
      .number {
        width: 138px;
        height: 138px;
        position: absolute;
        left: 100px;
        top: -10px;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .talk {
        width: 320px;
        height: 184px;
        position: absolute;
        left: 400px;
        top: -65px;
        z-index: 400;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .topic {
      width: 100%;
      height: auto;
      position: absolute;
      bottom: 150px;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .detail {
      color: #d0e8ff;
      font-size: 28px;
      width: 100%;
      text-align: center;
      line-height: 1.5;
      position: absolute;
      z-index: 100;
      bottom: 38%;
      p:nth-child(1) {
        margin-bottom: 20px;
      }
      p:nth-child(2) {
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
      }
      p:nth-child(3) {
        color: #f1c788;
        font-size: 30px;
        font-weight: bold;
      }
      p:nth-child(4) {
        color: #fff;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
  #bg5-circle3 {
    width: 876px;
    height: 876px;
    left: 104px;
    bottom: -620px;
    background: linear-gradient(327.72deg, #025ebb 22.25%, #3175c5 36.75%);
    transform: rotate(-151.83deg);
  }
  .page5 {
    width: 100%;
    height: 100%;
    background: #3175c5;

    .titleCon p {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 36px;
      line-height: 1.6;
      font-weight: bold;
    }
    .titleCon span {
      color: #f8c77e;
      font-size: 60px;
    }
    .videoCon {
      margin-top: 0;
    }
    .earth {
      width: 250px;
      height: 146px;
      position: absolute;
      right: 60px;
      top: 5px;
      z-index: 300;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .people {
      width: 186px;
      height: 92px;
      position: absolute;
      bottom: 200px;
      left: 450px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .people {
      height: auto;
      width: 150px;
      position: absolute;
      right: 200px;
      bottom: 240px;
      img {
        width: 150px;
        height: auto;
        display: block;
      }
    }
    .txt {
      line-height: 1.7;
      color: #d0e8ff;
      position: absolute;
      bottom: 210px;
      left: 14%;
      font-size: 30px;
    }
    #bg5-circle1 {
      width: 156px;
      height: 156px;
      left: 620px;
      top: 630px;
      background: radial-gradient(108.41% 108.41% at 68.58% 72.12%, #0f72d6 0%, #a8d4ff 100%);
      transform: rotate(-76.2deg);
    }
  }

  .page6 {
    width: 100%;
    height: 100%;
    background: #3175c5;
    .videoCon {
      margin-top: 210px;
    }
    .detail {
      width: 100%;
      text-align: center;
      color: #d0e8ff;
      font-size: 28px;
      line-height: 1.6;
      margin-top: -10px;
    }
    .tips {
      width: 520px;
      height: 100px;
      padding: 20px;
      background: url('https://www.linkedin-event.com/image/onboarding-guide/bg6-tip-bg.png') no-repeat;
      background-size: 100% 100%;
      color: #fff;
      font-size: 30px;
      z-index: 300;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translate(-50%, 0);
      margin: 0 auto;
      display: flex;
      .left {
        width: 100px;
        color: #a8d4ff;
        font-size: 40px;
        font-weight: bold;
      }
      .txt {
        margin-left: 15px;
        span {
          color: #f8c77e;
        }
      }
    }
    .people {
      height: 200px;
      position: absolute;
      bottom: 138px;
      z-index: 300;
      left: 40px;
      img {
        height: 100%;
        display: block;
      }
    }
    #bg6-circle1 {
      width: 36px;
      height: 36px;
      left: 660px;
      top: 252px;
      background: #f8c77e;
      transform: rotate(34.51deg);
    }
    #bg6-meteor3 {
      top: 620px;
    }
    #bg6-meteor4 {
      top: 350px;
    }
  }

  .page7 {
    width: 100%;
    height: 100%;
    background: #3175c5;
    position: relative;
    .detail {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 30px;
      p {
        line-height: 1.5;
        span {
          color: #f8c77e;
          font-size: 48px;
          font-weight: bold;
        }
      }
    }
    .videoCon {
      margin-top: 0;
      .number {
        width: 138px;
        height: 138px;
        position: absolute;
        left: 100px;
        top: 5px;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
    .detail2 {
      width: 100%;
      text-align: center;
      font-size: 28px;
      color: #d0e8ff;
      margin-top: -7px;
      line-height: 1.7;
    }
    #bg7-circle2 {
      top: 130px;
    }
    #bg7-circle1 {
      top: 330px;
    }
    #bg7-circle3 {
      top: 850px;
    }
  }
  .page8 {
    width: 100%;
    height: 100%;
    background: #3175c5;
    position: relative;
    .videoCon {
      position: absolute;
      z-index: 300;
      margin-top: 100px;
      .number {
        width: 140px;
        height: 140px;
        position: absolute;
        left: 125px;
        top: -10px;
        padding: 0;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }

    .people_bg {
      width: 100%;
      position: absolute;
      left: 0px;
      bottom: 0;
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .people {
      width: 340px;
      position: absolute;
      bottom: 240px;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .logo {
      width: 200px;
      position: absolute;
      bottom: 200px;
      left: 50%;
      transform: translate(-50%, 0);
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .txt {
      width: 100%;
      position: absolute;
      top: 48%;
      font-weight: bold;
      text-align: center;
      color: #d0e8ff;
      font-size: 32px;
    }
    #bg8-circle3 {
      top: 500px;
    }
    #bg8-circle5 {
      top: 620px;
    }
    #bg8-circle4 {
      top: 680px;
    }
    #bg8-circle6 {
      top: 680px;
    }
    #bg8-meteor2 {
      top: 680px;
    }
  }
}
</style>

