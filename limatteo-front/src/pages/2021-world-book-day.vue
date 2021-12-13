<template>
  <div id="bookDay" v-show="isSwiperReady">
    <div class="bookDay">
      <div class="topBox">
        <g-image src="https://www.linkedin-event.com/image/2021-world-book-day/title.png" />
      </div>
      <div v-swiper:myswiper="swiper1" ref="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in cardData"
            :key="index"
            :data-ind="index"
            class="swiper-slide"
          >
            <div class="bookCard" v-if="item">
              <div class="corner one"></div>
              <div class="corner two"></div>
              <div class="corner three"></div>
              <div class="corner four"></div>
              <div class="cardTop">
                <div class="memberInfo">
                  <g-image :src="item.avatar || ''" alt="" />
                  <div>
                    <span class="member_name">{{ item.name }}</span>
                    <span class="member_title">{{ item.member_title }}</span>
                  </div>
                </div>
                <div class="book_description">
                  <img class="img6" src="https://www.linkedin-event.com/image/2021-world-book-day/6.png"/>
                  {{ item.book_description }}
                </div>
                <span class="see_more" :id="item.post_link"> 查看更多&nbsp;＞ </span>
              </div>
              <div class="cardBottom">
                <img class="bottomImg" :src="item.bookCoverBackground || ''" alt="" />
                <div class="bottomShadow"></div>
                <div class="bookInfo">
                  <g-image :src="item.bookCover || ''" />
                  <div class="bookName">
                    <span>{{ item.book_name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- last page -->

          <div class="swiper-slide" v-if="showLastPage">
            <div class="bookCard">
              <div class="corner one"></div>
              <div class="corner two"></div>
              <div class="corner three"></div>
              <div class="corner four"></div>
              <div class="cardTop">
                <div class="lastCardBox">
                  <h3 class="lastTitle">你是否也有心仪的好书推荐？</h3>
                  <ul class="lastUl">
                    <li>
                      1.点击
                      <a
                        href="https://www.linkedin.com/feed/hashtag/?keywords=%E5%A5%BD%E4%B9%A6%E9%A2%86%E8%AF%BB%E8%80%85&keep_back_stack=true"
                      >
                        #好书领读者</a
                      >
                      参与话题，直接推荐或查看更多好书
                    </li>
                    <li>2. 在话题内发布动态分享推荐好书，即得当当购书减免礼券</li>
                    <li>
                      3.优选内容更有机会赢领英限定
                      <span class="leadReader">「领读者」实体徽章</span>和当当图书大礼包
                    </li>
                  </ul>
                  <div class="lastTopImg">
                    <img src="https://www.linkedin-event.com/image/2021-world-book-day/medal1.png"/>
                    <img src="https://www.linkedin-event.com/image/2021-world-book-day/medal2.png"/>
                  </div>
                  <div class="prompt">最终以实物为准</div>
                </div>
              </div>
              <div class="cardBottom lastBtm">
                <div class="bookInfo">
                  <img class="QRCode" src="https://www.linkedin-event.com/image/2021-world-book-day/QRCode.png"/>
                  <div class="QRCodeTxt">
                    扫一扫当当二维码
                    <br />
                    查看更多大咖推荐书单
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomBox"></div>
      <div class="decor">
        <g-image src="https://www.linkedin-event.com/image/2021-world-book-day/decor.png" />
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.min.css';
export default {
  metaInfo: {
    title: '领英好书领读者',
    titleTemplate: '领英好书领读者',
    meta: [
      { property: 'og:title', content: '领英好书领读者' },
      {
        property: 'og:url',
        content: 'https://www.linkedin-event.com/campaign/2021-world-book-day/',
      },
      {
        property: 'og:image',
        content: 'https://www.linkedin-event.com/image/2021-world-book-day/2021-world-book-day.png'
      },
      {
        name: 'viewport', 
        content: 'initial-scale=1,maximum-scale=1.0, minimum-scale=1.0'
      }
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
          title: '领英好书领读者',
          imageUrl: 'https://www.linkedin-event.com/image/2021-world-book-day/2021-world-book-day.png',
          description: '读书日特别分享：大佬们平时在看这些书',
          url: 'https://www.linkedin-event.com/campaign/2021-world-book-day/?trk=share',
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
  // created: // TODO: ready trk from url param. //qs
  data() {
    const that = this;
    return {
      isSwiperReady: false,
      showLastPage: false,
      cardData: [
        {
          index: 0,
          name: '李开复',
          member_title: '创新工场董事长兼CEO',
          book_name: '《云豆儿好好玩》',
          post_link:
            'https://www.linkedin.com/feed/update/urn:li:activity:6780425327308103680?keep_back_stack=true',
          book_description:
            '《云豆儿好好玩》是一本中英文俱佳的幼儿双语绘本，有趣好玩又脑洞大开。人们经常被汗牛充栋的成功学书籍围绕，能帮宝贝们找到一本能回归“新家庭主义”的童书实属难得。如果您有6岁以下的孩子，非常推荐阅读。',
          avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/kaifu_li.jpeg',
          bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/yundou.png',
          bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/yundouer.png',
        },
        {
          index: 1,
          name: '桑文锋',
          member_title: '神策数据创始人兼CEO',
          book_name: '《云攻略》',
          post_link:
            'https://www.linkedin.com/feed/update/urn:li:activity:6779974143938056192?keep_back_stack=true',
          book_description:
            '《云攻略》可以称为企业服务界的“圣经” 。国内国外关于企业服务的书籍本身就很少，优秀的书籍更是凤毛麟角。这本书中的创业历程和创新方法至今仍少有可匹敌，对企业家、职场工作者、学生都很有启发意义。',
          avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/wenfeng_sang.jpeg',
          bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/yun.png',
          bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/yungonglue.png',
        },
      ],
      swiper1: {
        on: {
          init: function () {
            that.isSwiperReady = true; //when swiper is not ready, don't show the page, as there might be unexpected user behavior on swiper
          },
          click: function (a, b) {
            const clsName = a.target.className;
            const aaaa = a.target.id;
            if (clsName === 'see_more') {
              that.clickEvent(aaaa);
            }
          },
        },
        loop: true,
        speed: 500,
        spaceBetween: -1,
        effect: 'coverflow',
        centeredSlides: true,
        observeParents: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
      },
    };
  },
  mounted() {
    const that = this;
    var _czc = _czc || [];
    _czc.push(['_setAccount', '1277901282']);
    that.cardData.push(
      {
        index: 2,
        name: '周炜',
        member_title: '创世伙伴CCV创始主管合伙人',
        book_name: '《天渊》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6778572537979920384?keep_back_stack=true',
        book_description:
          '《天渊》的设定很有启发——就算是一个人有限的生命中，这个思考也是很有价值的角度。如果结合到风险投资这个领域，也会有些很有趣的结论。如果扩展到全套三部曲的银河界区设定，三部读完会更有感觉。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/wei_zhou.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/tian.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/tianyuan.png',
      },
      {
        index: 3,
        name: '黄渊普',
        member_title: '亿欧EqualOcean CEO',
        book_name: '《文明、现代化、价值投资与中国》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6779674861200650240?keep_back_stack=true',
        book_description:
          '很多做投资的大佬写书，难免会带私货去宣传自己的公司或者投资的项目，李录的这本书在这方面相当克制。这本书从标题来看有割裂感，很容易给人不接地气的感觉，但这几个关键词在书中有机地联系在了一起。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/yuanpu_huang.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/wenming.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/wenmingxiandai.png',
      },
      {
        index: 4,
        name: '范凌',
        member_title: '特赞创始人、CEO',
        book_name: '《Leading》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6781187788873322496?keep_back_stack=true',
        book_description:
          '我对读一个足球教练的自传没太多兴趣，但当曼联的功勋教练Alex Ferguson爵士和红杉资本第二代掌门Michael Moritz（Yahoo、Google等的投资人）共同出现在作者栏时候，它充满了吸引力。作为领导力的谏言，它讲述了如何持续地实现卓越。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/ling_fan.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/Leading.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/Leading.png',
      },
      {
        index: 5,
        name: '景红',
        member_title: '上海仲望企业管理咨询有限公司 CEO',
        book_name: '《成就斜杠人生》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6779767402164039680?keep_back_stack=true',
        book_description:
          '《成就斜杠人生》是写副业、斜杠等方面图书中一本优秀作品。译者毛大庆先生就是一位成功的斜杠。我们可以从书中获得关于“斜杠”三方面的解释说明：斜杠人生本质上就是一个精进和经验累积的过程；斜杠组合的理想状态；如何开始斜杠职业。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/hong_jing.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/chengjiu.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/chengjiuxiegang.png',
      },
      {
        index: 6,
        name: '李晓虹',
        member_title: '博世中国执行副总裁',
        book_name: '《Women in Top Management》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780501075146498048?keep_back_stack=true',
        book_description:
          '我向大家推荐“Women in Top Management”，作者是一位女性领导力作家。她先后采访了不同国家的110位女性高管，呈现了两个有趣的话题：女性高管有什么共同之处？又是什么令她们与众不同？',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/xiaohong_li.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/Women-in-Top.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/Women-in-Top-Management.png',
      },
      {
        index: 7,
        name: '游央',
        member_title: 'vspn高级副总裁兼商业化事业部总经理',
        book_name: '《给经理人的第一课》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780384789708062721?keep_back_stack=true',
        book_description:
          '第一次被推荐看Andy Groove的《给经理人的第一课》时，内心是存有疑虑的。Intel是一家伟大的公司毋庸置疑，但本质上这是一家制造企业。制造业上的思路对于其他行业也一样行得通，甚至可以说作者巧妙地用制造业为例子讲出了工作的真理。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/yang_you.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/geijingli.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/geijinglideren.png',
      },
      {
        index: 8,
        name: '黄一孟',
        member_title: '心动网络CEO',
        book_name: '《不拘一格》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780723721331200000?keep_back_stack=true',
        book_description:
          '本书作为Netflix文化对外输出的官方媒介，其中不论是理论逻辑还是各种实例，都对我们自己公司有不少启发，和我们之前的很多思考也有触类旁通之处。阅读本书之前，可以先看Netflix官网上对于 Netflix 文化的诠释，先对Netflix的文化有一定了解。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/yimeng_huang.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/bujv.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/bujuyige.png',
      },
      {
        index: 9,
        name: '艾诚',
        member_title: '主持人、投资人、《艾问iAsk》创始人',
        book_name: '《奥黛丽·赫本》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780717243006357504?keep_back_stack=true',
        book_description:
          '阅读《奥黛丽·赫本》，带你跳出自我思维模式，纵观奥黛丽·赫本的一生，既有灿烂辉煌的成就，也有坎坷悲伤的经历，但是她始终保有纯良温暖，把自己的爱洒满需要她的地方。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/cheng_ai.png',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/aodaili.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/aodailiheben.png',
      },
      {
        index: 10,
        name: '刘罡',
        member_title: '阿尔法公社投资总监',
        book_name: '《创始人手记》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780798129907339264?keep_back_stack=true',
        book_description:
          '季琦是我非常欣赏的一位创始人和企业家。他创办和联合创办了携程，如家，汉庭三家纳斯达克上市公司，《创始人手记》这本以一个非常真实的视角分享了作为企业家的思想，工作与生活。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/gang_liu.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/chuangshiren.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/chuangshirenshouji.png',
      },
      {
        index: 11,
        name: '叶振亚',
        member_title: '原猎咨询创始人',
        book_name: '《明朝那些事儿》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780667081571598337?keep_back_stack=true',
        book_description:
          '这套书作为早期网络文学的畅销书代表，好看，接地气。它从人物史角度切入，描绘了明朝这家300年历史超级大公司的兴衰成败，不但帮助普通读者了解明朝故事，也可以帮助我们职场中人了解“官场”这个特殊职场的各色人等。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/helen_ye.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/mingchao.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/mingchaonaxieshi.png',
      },
      {
        index: 12,
        name: '张晴晴',
        member_title: '爱数智慧创始人兼CEO',
        book_name: '《数学之美》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780836356424908800?keep_back_stack=true',
        book_description:
          '《数学之美》的作者吴军博士，为了让普通读者领略数学的魅力，用浅显易懂的语言把高深的数学原理讲得十分易懂，有利于让大家理解人工智能中语言处理原理，打开自然语言处理的大门，领略自然语言处理之美。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/qingqing_zhang.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/shuxue.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/shuxuezhimei.png',
      },
      {
        index: 13,
        name: '张玲',
        member_title: '当当出版物事业部总经理',
        book_name: '《文城》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780835820455768064?keep_back_stack=true',
        book_description:
          '时代的洪流推着每个人做出各自的选择，《文城》讲述了一个追寻和错过的故事。在这个时间碎片化的时代，这是一本不可多得、发人深省、值得深度阅读的好书。我相信每个人心中，都有一个地方叫文城。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/ling_zhang.png',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/wench.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/wencheng.png',
      },
      {
        index: 14,
        name: 'Quin Gu',
        member_title: '新世界中国 人力资源高级经理',
        book_name: '《奈飞文化手册》',
        post_link:
          'https://www.linkedin.com/feed/update/urn:li:activity:6780304712429305856?keep_back_stack=true',
        book_description:
          '《奈飞文化手册》观点犀利、启发思考。只有培养员工高度责任感，再给予空间和自由让其发挥能动性和才华，才会创造出超越预期的工作成果。它值得管理人员认真阅读和应用，希望对于激励和管理新世代员工有所帮助。',
        avatar: 'https://www.linkedin-event.com/image/2021-world-book-day/avatar/quin_gu.jpeg',
        bookCover: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCover/naifei.png',
        bookCoverBackground: 'https://www.linkedin-event.com/image/2021-world-book-day/bookCoverBackground/naifeiwenhua.png',
      }
    );
    that.shuffle(that.cardData);
    that.showLastPage = true;
  },
  methods: {
    clickEvent(item) {
      _czc.push([
        '_trackEvent', // required
        'wrd2021_KOL_Post', // pageKey
        'click', // event type
        '2021WorldBookDay', // button name
        '',
        '',
      ]);
      location.href = item;
    },
    shuffle(arr) {
      var len = arr.length;
      for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
      }
      arr.forEach((element, inde) => {
        if (element.name === '李开复' || element.name === '黄一孟' || element.name === '桑文锋') {
          arr.splice(inde, 1);
          arr.unshift(element);
        }
      });
      return arr;
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
  background: #003f67;
}
.bookDay {
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  .topBox {
    width: 432px;
    height: 150px;
    margin: 0 auto;
    padding-top: 25px;
    box-sizing: content-box;
    img {
      width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
    height: 760px;
    .swiper-slide {
      width: 606px;
      height: 732px;
      .bookCard {
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 4px solid rgb(174, 154, 93);
        overflow: hidden;
        .corner {
          position: absolute;
          width: 48px;
          height: 48px;
        }
        .corner:before,
        .corner:after {
          content: '';
          position: absolute;
          width: 24px;
          height: 8px;
          background: rgb(174, 154, 93);
          left: 40px;
        }
        .corner:before {
          top: 26px;
          transform: rotateZ(45deg) translate3d(0, 0, 0);
        }
        .corner:after {
          bottom: 26px;
          transform: rotateZ(-45deg) translate3d(0, 0, 0);
        }
        .one {
          left: -26px;
          top: -28px;
          transform: rotate(45deg) translate3d(0, 0, 0);
        }
        .two {
          top: -28px;
          right: -26px;
          transform: rotate(135deg) translate3d(0, 0, 0);
        }
        .three {
          bottom: -26px;
          left: -28px;
          transform: rotate(315deg) translate3d(0, 0, 0);
          z-index: 200;
        }
        .four {
          bottom: -26px;
          right: -28px;
          transform: rotate(225deg) translate3d(0, 0, 0);
          z-index: 200;
        }
        .cardTop {
          width: 100%;
          height: 560px;
          overflow: hidden;
          background: #fff;
          box-sizing: border-box;
          .memberInfo {
            width: 100%;
            display: flex;
            padding: 30px 28px;
            box-sizing: border-box;
            img {
              width: 96px;
              height: 96px;
              border-radius: 50%;
              margin-right: 16px;
            }
            div {
              display: flex;
              flex-direction: column;
              padding: 5px 0;
              .member_name {
                color: #000;
                font-size: 32px;
                font-weight: bold;
              }
              .member_title {
                color: rgba(0, 0, 0, 0.6);
                font-size: 24px;
              }
            }
          }
          .book_description {
            text-indent: 20px;
            padding: 0 30px;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            position: relative;
            color: #000;
            font-size: 32px;
            overflow: hidden;
            img {
              width: 16px;
              height: 30px;
            }
            .img6 {
              border-top: 1px solid transparent;
              position: relative;
              top: 4px;
            }
            .img9 {
              position: absolute;
              bottom: 6px;
              right: 10px;
            }
          }
          .see_more {
            display: inline-block;
            margin: 20px 0 20px 28px;
            font-weight: bold;
            overflow: hidden;
            color: #0073b1;
            text-decoration: none;
            font-size: 32px;
            &:active,
            &:visited,
            &:link {
              color: #0073b1;
              text-decoration: none;
              -webkit-tap-highlight-color: transparent; //方法一
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //方法二
              tap-highlight-color: rgba(0, 0, 0, 0); //方法三
            }
          }
          .lastCardBox {
            padding: 30px;
            .lastTitle {
              font-size: 36px;
              font-weight: 500;
              text-align: center;
              line-height: 70px;
            }
            .lastUl {
              font-size: 28px;
              li {
                margin-top: 10px;
                .leadReader {
                  color: rgb(174, 154, 93);
                }
                a {
                  color: #0073b1;
                  text-decoration: none;
                  position: relative;
                  z-index: 10000;
                  &:active,
                  &:visited,
                  &:link {
                    color: #0073b1;
                    text-decoration: none;
                    -webkit-tap-highlight-color: transparent; //方法一
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //方法二
                    tap-highlight-color: rgba(0, 0, 0, 0); //方法三
                  }
                }
              }
            }
            .lastTopImg {
              img {
                width: 180px;
                height: 100px;
                margin: 12px 22px;
              }
            }
            .prompt {
              font-size: 22px;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
        .cardBottom {
          width: 100%;
          height: 166px;
          position: relative;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          overflow: hidden;
          .bottomImg {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 10;
          }
          .bottomShadow {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 100;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
          }
          .bookInfo {
            width: 100%;
            height: 100%;
            padding: 24px 28px;
            position: absolute;
            z-index: 101;
            display: flex;
            box-sizing: border-box;
            img {
              width: 88px;
              height: 120px;
              margin-right: 20px;
              border-radius: 8px;
              border: 2px solid #fff;
              box-sizing: border-box;
            }
            .bookName {
              color: #fff;
              font-size: 32px;
              font-weight: 600;
              padding-right: 100px;
              height: 100%;
              display: table;
              span {
                display: table-cell;
                vertical-align: middle;
              }
            }
            .QRCode {
              width: 120px;
              height: 120px;
            }
            .QRCodeTxt {
              font-size: 28px;
              padding: 18px 0;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
        .lastBtm {
          background: linear-gradient(96.05deg, #f5d575 4.98%, #dcbf68 75.68%);
          mix-blend-mode: normal;
        }
      }
    }
  }
  .bottomBox {
    background: url('https://www.linkedin-event.com/image/2021-world-book-day/logo.png') no-repeat;
    background-size: 100% 100%;
    width: 386px;
    height: 68px;
    margin: 0 auto;
    margin-bottom: 124px;
    img {
      width: 100%;
      height: 100%;
    }
    .linkedinLogo {
      width: 133px;
      height: 34px;
    }
    .x {
      width: 29px;
      height: 29px;
    }
    .dangLogo {
      width: 133px;
      height: 34px;
    }
  }
  .decor {
    position: absolute;
    bottom: -10px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-aspect-ratio: 7/11) {
  .decor {
    display: none;
  }
  .bookDay {
    box-sizing: border-box;
    overflow: hidden;
    height: 100%;
    position: relative;
    .topBox {
      width: 320px;
      height: 120px;
      margin: 0 auto;
      padding: 46px 0;
      img {
        width: 100%;
      }
    }
    .swiper-container {
      width: 100%;
      height: 740px;
    }
    .bottomBox {
      background: url('https://www.linkedin-event.com/image/2021-world-book-day/logo2.png') no-repeat;
      background-size: 100% 100%;
      width: 362px;
      height: 62px;
      margin: 34px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media (min-aspect-ratio: 7/10) {
  .bookDay {
    .swiper-container {
      height: 632px;
      .swiper-slide {
        height: 630px;
        .bookCard {
          .cardTop {
            height: 460px !important;
            .book_description {
              -webkit-line-clamp: 5;
            }
            .see_more {
              margin: 15px 0 15px 28px;
            }
          }
          .cardBottom {
            height: 166px;
          }
        }
      }
    }
  }
}
</style>
