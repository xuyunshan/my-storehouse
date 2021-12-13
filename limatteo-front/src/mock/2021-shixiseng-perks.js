const res = {
  pageName: '2021-shixiseng-perks',
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
        src: require('../assets/shixiseng/shixiseng_bg.png'),
        id: 2,
      },
    ],
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
