const res = {
  pageName: 'welfare-light-member',
  shareImg_square: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg', // wxshare, wx 2nd share size：45 45
  shareImg_Rect1: 'https://www.linkedin-event.com/image/guidebookHome/share.png', // zephyr post, zephyr inmail size: 1200 628
  shareImg_Rect2: 'https://www.linkedin-event.com/image/guidebookHome/share.png', // wx miniporgram
  title_page: '领英轻会员',
  title_share_wx: '',
  title_share_zephyr: '',
  title_share_miniporgram: '',
  description_share_miniporgram: '',
  description_share_wx: '',
  background_color: '#F3F2EF',
  render: {
    layouts: [
      {
        src: require('../assets/welfareLightMember/background.png'),
        id: 1,
      },
    ],
    fixedBottoms: [
      {
        style: { left: '0', width: '100%', height: '250', bottom: '0', 'z-index': '1000' }, //position: fixed
        id: 4,
        bgStyle: require('../assets/welfareLightMember/bottomButton.png'),
        wxLink: '',
        link: 'https://www.linkedinmobileapp.com/',
        clickTracking: 'transactional-routing',
      },
    ],
    copyTexts: [
      {
        style: {
          width: '208',
          left: '526',
          top: '830',
          height: '96',
        },
        value: '0HUIGUIFULI66666',
      },
    ],
    inputs: [
      {
        style: {
          width: '468',
          left: '24',
          top: '830',
        },
        value: '0HUIGUIFULI66666',
      },
    ],
  },
};

export const layoutsData = {
  activity: res.pageName, // need to be unique enough
  pageKey: res.pageName, // need to be unique enough
  title: res.title_page,
  miniProgramTrk: '',
  backgroundColor: res.background_color,
  render: {
    ...res.render,
    meta: {
      title: res.title_share_zephyr,
      imageUrl: res.shareImg_Rect1,
    },
    sharing: {
      title: res.title_share_wx,
      imageUrl: res.shareImg_square,
      description: res.description_share_wx,
    },
    miniprogramSharing: {
      title: res.title_share_miniporgram,
      desc: res.description_share_miniporgram,
      imageUrl: res.shareImg_Rect2,
    },
  },
};
