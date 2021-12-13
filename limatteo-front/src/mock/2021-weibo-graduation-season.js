const res = {
  pageName: '2021-weibo-graduation-season',
  shareImg_square: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg', // wxshare, wx 2nd share size：45 45
  shareImg_Rect1: '', // zephyr post, zephyr inmail size: 1200 628
  shareImg_Rect2: '', // wx miniporgram
  title_page: '领取你的专属求职礼包',
  title_share_wx: '领取你的专属求职礼包',
  title_share_zephyr: '领取你的专属求职礼包',
  title_share_miniporgram: '领取你的专属求职礼包',
  description_share_wx: '领取你的专属求职礼包',
  render: {
    layouts: [
      {
        src: require('../assets/weiboGraduationSeason/weibo_bg.png'),
        id: 2,
      },
    ],
    textRules: {
      entrance: {
        style: { top: '1012', left: '30', width: '686', height: '84', position: 'absolute' },
      },
      content: {
        title: '活动规则',
        parts: [
          {
            subTitle: '[奖品说明]',
            id: 1,
            texts: [
              '1.	活动时间：2021年6月1日-6月20日',
              '2.	活动期间，通过新浪微博官方活动渠道注册的领英新用户，每个账户可以领取为期1个月的领英求职礼包。',
              '3.领英求职礼包领取时间截止到2021年12月31日，用户在规定时间内未前往领英app领取，则视为自动放弃奖品',
              '4.任何人通过不正当手段（包括但不限于侵犯第三人合法权益、作弊、扰乱系统、实施网络攻击、批量注册、用机器注册账户）获得本次活动利益的，领英有权取消该用户获奖资格。',
            ],
          },
          {
            subTitle: '[领取方式]',
            id: 2,
            texts: [
              '1.下载领英app最新版，点击底部【我】-【求职大礼包】领取，首次登录将有弹窗提醒，请务必确保已更新至最新版app。',
              '2.如因系统问题无法领取，请在领英上联系账号【领英职场练习生】，将有专人和您对接。',
            ],
          },
        ],
      },
    },
    hotAreas: [
      {
        style: { top: '1012', left: '30', width: '686', height: '84' },
        id: 1,
        link: 'https://www.linkedin.com/signup/cold-join?trk=interstitial_shixiseng_perks',
        wxLink: 'https://www.linkedin.com/signup/cold-join?trk=interstitial_shixiseng_perks',
        clickTracking: 'button_1',
      },
    ],
    fixedBottoms: [],
    jobList: [],
    fixedTops: [],
    fixedElements: [],
    swipers: [],
    imageToSave: [],
  },
};

export const layoutsData = {
  activity: res.pageName, // need to be unique enough
  pageKey: res.pageName, // need to be unique enough
  title: res.title_page,
  render: {
    ...res.render,
    meta: {
      title: res.title_share_zephyr,
      imageUrl: res.shareImg_Rect1,
      url: `https://www.linkedin-event.com/campaign/${res.pageName}/?trk=zephyr`, //页面link
    },
    sharing: {
      title: res.title_share_wx,
      imageUrl: res.shareImg_square,
      description: res.description_share_wx,
      url: `https://www.linkedin-event.com/campaign/${res.pageName}/?trk=sharing`, //页面link
    },
    miniprogramSharing: {
      title: res.title_share_miniporgram,
      imageUrl: res.shareImg_Rect2,
      url: `https://www.linkedin-event.com/campaign/${res.pageName}/?trk=miniporgram`,
    },
  },
};
