const res = {
  title_page: '领英PK联赛开赛啦！30岁之后的选择如何做？',
  pageName: '领英PK联赛开赛啦！',
  title_share_zephyr: '领英PK联赛开赛啦！30岁之后的选择如何做？',
  shareImg_Rect1: 'https://www.linkedin-event.com/image/2021-pk-language/sharing-zephyr.png',
  title_share_wx: '领英PK联赛开赛啦！30岁之后的选择如何做？',
  shareImg_square: '',
  description_share_wx: 'https://www.linkedin-event.com/image/2021-pk-language/sharing-wx.png',
  title_share_miniporgram: '领英PK联赛开赛啦！30岁之后的选择如何做？',
  description_share_miniporgram: '',
  shareImg_Rect2: 'https://www.linkedin-event.com/image/2021-pk-language/sharing-wx.png',
  render: {
    layouts: [
      {
        src: 'https://www.linkedin-event.com/image/2021-pk-language/Slice1.png',
        id: 'https://www.linkedin-event.com/image/2021-autumn-recruitment/Slice1.png',
        active: false,
      },
      {
        src: 'https://www.linkedin-event.com/image/2021-pk-language/Slice2.png',
        id: 'https://www.linkedin-event.com/image/2021-autumn-recruitment/Slice2-1.png',
        active: false,
      },
      {
        src: 'https://www.linkedin-event.com/image/2021-pk-language/Slice3.png',
        id: 'https://www.linkedin-event.com/image/2021-autumn-recruitment/Slice3.png',
        active: false,
      },
      {
        src: 'https://www.linkedin-event.com/image/2021-pk-language/Slice4.png',
        id: 'https://www.linkedin-event.com/image/2021-autumn-recruitment/Slice4.png',
        active: false,
      },
    ],
    fixedElements: [],
    fixedBottoms: [],
    fixedTops: [],
    hotAreas: [
      {
        style: {
          left: '50',
          width: '645',
          height: '82',
          bottom: '',
          top: '1180',
          right: '',
        },
        wxLink: '',
        link:
          'https://www.linkedin.com/feed/share?type=pk&hashtag=%E9%A2%86%E8%8B%B1pk%E8%81%94%E8%B5%9B',
        clickTracking: 'button_PK',
        active: false,
      },
      {
        style: {
          left: '52',
          width: '645',
          height: '165',
          bottom: '',
          top: '1410',
          right: '',
        },
        wxLink: '',
        link:
          'https://www.linkedin.com/wujing-frontend/pkDetail?pollId=6839094368943640576&activityId=6839094371477008384&options=(6839094369203707905,6839094369199489025',
        clickTracking: 'button_1',
        active: false,
      },
      {
        style: {
          left: '52',
          width: '645',
          height: '165',
          bottom: '',
          top: '1595',
        },
        wxLink: '',
        link:
          'https://www.linkedin.com/wujing-frontend/pkDetail?pollId=6839343793427378176&activityId=6839343795008614400&options=(6839343793653870592,6839343793653854208',
        clickTracking: 'button_2',
        active: false,
      },
      {
        style: {
          left: '52',
          width: '645',
          height: '165',
          bottom: '',
          top: '1785',
          right: '',
        },
        wxLink: '',
        link:
          'https://www.linkedin.com/wujing-frontend/pkDetail?pollId=6839489227483422720&activityId=6839489229135990784&options=(6839489227680555009,6839489227680575488',
        clickTracking: 'button_3',
        active: false,
      },
    ],
    imagesToSave: [],
    swipers: [],
    hScrolls: [],
    videos: [],
    imageRules: [],
    meta: {
      title: '',
      imageUrl: '',
      url: '',
    },
    sharing: {
      title: '',
      imageUrl: '',
      description: '',
      url: '',
    },
    miniprogramSharing: {
      title: '领英校招情报局',
      desc: '校招情报局',
      imageUrl: 'https://www.linkedin-event.com/image/guidebookHome/share.png',
      url: 'http://localhost:8080/2021-autumn-recruitment/?trk=miniporgram',
    },
  },
  title_share_miniprogram: '想打听校招内幕？资深面试官携最新情报现场拆题！',
  description_share_miniprogram: '',
  pageKey: '',
  title: '',
};

export const layoutsData = {
  activity: res.pageName, // need to be unique enough
  pageKey: res.pageName, // need to be unique enough
  title: res.title_page,
  miniProgramTrk: 'Overseas-poster-20210510-karen',
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
      title: res.title_share_miniprogram,
      desc: res.description_share_miniprogram,
      imageUrl: res.shareImg_Rect2,
    },
  },
};
