<template>
  <div id="guildBook" class="guide-book">
    <div class="topSwiper" v-swiper:myswiper="guideSeiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, ind) in bannerAry" :key="ind">
          <div class="shadow" :id="item.articleLink">
            <div class="shadowTxt">
              <span>推荐阅读</span>
              <p>{{ item.mainTitle }}</p>
            </div>
          </div>
          <img :src="item.img" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="btmCont">
      <ul class="leftNav">
        <li
          v-for="(item, ind) in articleObj"
          class="floor-item"
          @click="setFloorNavMountClick(ind,item.catalogue_id)"
          :key="ind"
        >
          <span>{{ item.theme }}</span>
        </li>
      </ul>
      <div class="ritBox">
        <div class="perTheme" v-for="item in articleObj" :id="item.catalogue_id" :key="item.theme">
          <div class="themeTit">{{ item.theme }}</div>
          <ul class="themeCont">
            <li
              class="perGroup"
              @click="toLink(items.articleLink,items.article_id)"
              v-for="items in item.content"
              :key="items.mainTitle"
            >
              <div class="perArticle">
                <div class="copywriting">
                  <p class="contTitle">{{ items.mainTitle }}</p>
                  <p class="info">{{ items.subTitle }}</p>
                </div>
                <img :src="items.img" />
              </div>
            </li>
          </ul>
        </div>
        <div class="endSymbol">
          <img src="../assets/guideBook/endSymbol.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css';
import { bannerAry, articleObj} from '../mock/guide_book';
export default {
  metaInfo: {
    title: '玩转领英',
    titleTemplate: '玩转领英',
    meta: [
      { property: 'og:title', content: '玩转领英' },
      {
        property: 'og:url',
        content: 'https://www.linkedin-event.com/campaign/guide-book/',
      },
      {
        property: 'og:image',
        content: 'https://www.linkedin-event.com/image/guidebookHome/share.png',
      },
      {
        name: 'viewport',
        content: 'initial-scale=1,maximum-scale=1.0, minimum-scale=1.0',
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
          title: '玩转领英',
          imageUrl: 'https://www.linkedin-event.com/image/guidebookHome/share.jpeg',
          description: '吐血整理｜90%的人都不知道的领英新玩法！',
          url: 'https://www.linkedin-event.com/campaign/guide-book/',
        };`,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML'],
    },
  },
  // for swiper usage in ssr
  // https://github.com/surmon-china/vue-awesome-swiper/issues/586
  directives: !process.browser
    ? {}
    : {
        swiper: require('vue-awesome-swiper').directive,
      },
  data() {
    const that = this;
    return {
      isSwiperReady: false,
      guideSeiper: {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        on: {
          init: function () {
            that.isSwiperReady = true;
          },
          click: function (e) {
            const realIndex = this.realIndex;
            that.toLink(that.bannerAry[realIndex].articleLink,that.bannerAry[realIndex].article_id);
          },
        },
      },
      element: {
        nav_item: null,
        floor_item: null,
      },
      bannerAry,
      articleObj,
    };
  },
  mounted() {
    var _czc = _czc || [];
    _czc.push(['_setAccount', '1277901282']);
    this.element = {
      nav_item: document.getElementsByClassName('floor-item'),
      floor_item: document.getElementsByClassName('perTheme'),
    };
    this.element.nav_item[0].classList.add('active');
    window.onscroll = this.floorSrcollEventListener
  },
  beforeDestroy() {
    document
      .getElementsByClassName('ritBox')[0]
      .removeEventListener('scroll', this.floorSrcollEventListener);
  },
  methods: {
    floorSrcollEventListener() {
      const { nav_item, floor_item } = this.element;
      const window_scrollTop = window.scrollY;
      const btm_offsetTop = document.getElementsByClassName('btmCont')[0].offsetTop;
      if(window_scrollTop >= btm_offsetTop){
        document.getElementsByClassName('leftNav')[0].className = 'leftNav fixed'
      }else {
        document.getElementsByClassName('leftNav')[0].className = 'leftNav'
      }
      for (let i = 0, len = floor_item.length; i < len; i++) {
        let floor_offsetTop = floor_item[i].offsetTop - floor_item[0].offsetTop;
        if (window_scrollTop >= floor_offsetTop ) {
          for (let n = 0, len = nav_item.length; n < len; n++) {
            const current_classList = nav_item[n].classList;
            i === n ? current_classList.add('active') : current_classList.remove('active');
          }
        }
      }
    },
    setFloorNavMountClick(index,catalogue_id) {
      
      const { floor_item } = this.element;
      const floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop + 140;
      window.scrollTo(0,floor_offsetTop)
      _czc.push([
        '_trackEvent', // required
        'guidebook_home_', // pageKey
        'click', // event type
        `guidebook_home_catalogue-${catalogue_id}`, // button name
        '',
        '',
      ]);
    },
    toLink(item,article_id) {
      _czc.push([
        '_trackEvent', // required
        'guidebook_home_', // pageKey
        'click', // event type
        `guidebook_home_featured_article${article_id}_`, // button name
        '',
        '',
      ]);
      location.href = item;
    },
  },
};
</script>
<style lang='scss' scoped>
@import '~/style/_reset.scss';
#app {
  width: 100%;
  height: 100%;
  user-select: none;
  .topSwiper {
    height: 270px;
    width: 100%;
    padding: 32px;
    background: rgb(241, 241, 241);
    box-sizing: border-box;
    .swiper-wrapper {
      .swiper-slide {
        width: 100%;
        position: relative;
        .shadow {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          right: 0;
          background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.9),);
          border-radius: 8px;
          color: #fff;
          .shadowTxt {
            position: absolute;
            left: 14px;
            bottom: 10px;
            line-height: 1.2;
            span {
              font-size: 22px;
            }
            p {
              font-size: 32px;
            }
          }
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
      }
    }
    & /deep/ .swiper-pagination {
      width: 100% !important;
      text-align: right !important;
      left: 0px !important;
      bottom: 0px !important;
      z-index: 1000 !important;
      padding: 26px 44px !important;
      box-sizing: border-box !important;
      .swiper-pagination-bullet {
        width: 16px !important;
        height: 4px !important;
        background: rgba(255, 255, 255, 0.9) !important;
        border-radius: 20px !important;
        margin: 0 4px;
      }
      .swiper-pagination-bullet-active {
        background: #fff !important;
      }
    }
  }
  .btmCont {
    width: 100%;
    position: relative;
    .leftNav {
      width: 190px;
      padding: 0 16px;
      box-sizing: border-box;
      background: #fff;
      overflow: hidden;
      &.fixed{
        position: fixed;
        top: 0;
      }
      li {
        color: #0a66c2;
        font-size: 24px;
        text-align: left;
        margin: 20px 0;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        span {
          display: inline-block;
          padding: 4px 16px;
          border-radius: 40px;
        }
      }
      .active {
        span {
          color: #fff;
          background: #0a66c2;
        }
      }
    }
    .ritBox {
      width: calc(100% - 190px);
      float: right;
      padding: 0 32px;
      overflow-y: auto;
      border-left: 2px solid #e5e5e5;
      box-sizing: border-box;
      position: absolute;
      top: 0px;
      left: 190px;
      .themeTit {
        font-size: 36px;
        font-weight: bold;
        color: #000;
        margin: 48px 0;
      }
      .themeCont {
        .perGroup {
          box-sizing: border-box;
          overflow: hidden;
          margin-bottom: 64px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //方法二
          .perArticle {
            display: flex;
            box-sizing: border-box;
            overflow: hidden;
            .copywriting {
              box-sizing: border-box;
              overflow: hidden;
              padding-right: 24px;
              flex: 1;
              .contTitle {
                font-size: 32px;
                height: 90px;
              }
              .info {
                font-size: 28px;
                color: #999;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
            }
            img {
              width: 134px;
              height: 134px;
              border-radius: 8px;
            }
          }
        }
      }
      .endSymbol {
        width: 100%;
        text-align: center;
        padding: 64px 0 96px 0;
        img {
          width: 90px;
        }
      }
    }
  }
}
</style>
