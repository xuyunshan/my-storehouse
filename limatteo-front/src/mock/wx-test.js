const res = {
  pageName: 'wx-test',
  shareImg_square: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg', // wxshare, wx 2nd share size：45 45
  shareImg_Rect1: 'https://www.linkedin-event.com/image/guidebookHome/share.png', // zephyr post, zephyr inmail size: 1200 628
  shareImg_Rect2: 'https://www.linkedin-event.com/image/guidebookHome/share.png', // wx miniporgram
  title_page: '向往的行业 领英海外专场',
  title_share_wx: '海外专场',
  title_share_zephyr: '领英最新上线「向往的行业 领英海外专场」。',
  title_share_miniporgram: '海外专场',
  description_share_miniporgram: '领英海外专场',
  description_share_wx: '向往的行业 领英海外专场',
  background_color: "#fff",
  render: {
    layouts: [
      {
        src: require('../assets/overseasStudents/cjlxs01.png'),
        id: 2,
      },
      {
        src: require('../assets/overseasStudents/cjlxs02.png'),
        id: 3,
      },
      {
        src: require('../assets/overseasStudents/cjlxs03.png'),
        id: 4,
      },
      {
        src: require('../assets/overseasStudents/cjlxs06.png'),
        id: 6,
      },
      {
        src: require('../assets/overseasStudents/cjlxs04.png'),
        id: 5,
      },
      {
        src: require('../assets/overseasStudents/cjlxs05.png'),
        id: 1,
      },
    ],
    hotAreas: [
      {
        style: { left: '222', width: '126', height: '96', top: '933' }, // position: absolute
        id: 1,
        link:
          'https://www.linkedin.com/mypreferences/m/settings/viewers-of-this-profile-also-viewed',
        wxLink: '/src/pages/profile/profile?peopleId=ACoAABFvXuYB_YGPK82GQv5uHJhBmsDi2QVKXLU',
        clickTracking: '施能 Vera',
      },
      {
        style: { right: '54', width: '126', height: '96', top: '933' },
        id: 2,
        link: 'https://www.linkedin.com/mypreferences/m/categories/communications',
        wxLink: '/src/pages/profile/profile?peopleId=ACoAAAARw50BkyhMHo7P1tqb_GamJPMPBFmEY5k',
        clickTracking: '熊伟铭',
      },
      {
        style: { left: '222', width: '126', height: '96', top: '1275' },
        id: 3,
        link: 'https://www.linkedin.com/in/vcalex/',
        wxLink: '/src/pages/profile/profile?peopleId=ACoAAADEvUMBqbsJ80k5YjpctfuUl8wwlaxSlXI',
        clickTracking: 'Alex Jiang',
      },
      {
        style: { right: '54', width: '126', height: '96', top: '1275' },
        id: 4,
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:6780425327308103680',
        wxLink: '/src/pages/profile/profile?peopleId=ACoAAApdI-EBgT8AsOHLCJY2rxQsVP2hdBCXhkQ',
        clickTracking: 'David Wu',
      },
      {
        style: { left: '222', width: '126', height: '96', top: '1617' },
        id: 5,
        link:
          'https://www.linkedin.com/messaging/thread/2-MWJiZDFiMjgtZDI2Yi00NmRlLTkyYWItMTg3ZWViNjhkY2FkXzAxMA==/',
        wxLink: '/src/pages/profile/profile?peopleId=ACoAAAI8WJ0BLDzAYfzN1kXf7-cWC6ir2gSqTC8',
        clickTracking: '周晨',
      },
      {
        style: { right: '54', width: '126', height: '96', top: '1617' },
        id: 6,
        // link:
        //   '',
        // wxLink:
        //   '',
        clickTracking: '海外招聘专场',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '2700' },
        id: 7,
        link: 'https://www.linkedin.com/jobs/view/2457900621/',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2521670399&refId=GjXBfeIIrhBFiE8gV8cxuQ%3D%3D',
        clickTracking: '小红书',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '2837' },
        id: 8,
        link: 'https://www.linkedin.com/jobs/view/2512141883/',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2512141883&refId=cVhlr5lSChchy4BOe%2FW%2Flw%3D%3D',
        clickTracking: 'Zhihu',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '2974' },
        id: 9,
        link: 'https://www.linkedin.com/jobs/view/2478159924/',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2478159924&refId=gzpBPxyzFPeGCTJxo39UQw%3D%3D',
        clickTracking: 'iQiyi',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '3111' },
        id: 10,
        link: 'https://www.linkedin.com/jobs/view/2497794172/',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2507839059&refId=twA4f9s5tUT9eekL2vGebw%3D%3D',
        clickTracking: '摩根大通',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '3248' },
        id: 11,
        link: 'https://www.linkedin.com/mwlite/jobs/view/2506086472',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2506086472&refId=mTfvqxDIQPk3p%2FRgyH0n8g%3D%3D',
        clickTracking: 'KIKA',
      },
      {
        style: { left: '32', width: '686', height: '137', top: '3385' },
        id: 12,
        link: 'https://www.linkedin.com/jobs/view/2497498770/',
        wxLink:
          '/src/pages/job/detail/detail?jobUrn=urn%3Ali%3Afs_zephyrminiJob%3A2497498770&refId=Uh3N0MOX22iYbg5P%2BzD1tg%3D%3D',
        clickTracking: 'iHandy',
      },
    ],
    fixedBottoms: [
      {
        style: { left: '0', width: '100%', height: '250', bottom: '0', 'z-index': '1000' }, //position: fixed
        id: 4,
        bgStyle: require('../assets/overseasStudents/mentorbanner.png'),
        wxLink: '/src/pages/coach/lenovo/lenovo?trk=lenovo-school-202104-karen4',
        link: 'https://www.linkedin.com/wukong-web/coach/mentee',
        clickTracking: 'coach',
      },
    ],
    fixedTops: [],
    fixedElements: [],
    // swipers: [
    //   {
    //     type: '', //目前默认留空，就是最普通的一页一页横滑swiper，也许未来有其他形式type的swiper
    //     style: { width: '654', height: '315', left: '64', top: '2269', 'z-index': 500 },
    //     active: false,
    //     elements: [
    //       {
    //         id: 6,
    //         src: require('../assets/overseasStudents/hannah.png'),
    //         link: 'https://www.linkedin.com/in/hannah-hou/',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAACl0nDcBJzQtoAT5srfpoOK2GNbNoJuRTb8',
    //         clickTracking: 'Hannah Hou',
    //       },
    //       {
    //         id: 4,
    //         src: require('../assets/overseasStudents/scarlet.png'),
    //         link: 'https://www.linkedin.com/in/scarlet-li-78b45818b/',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAACy9L1sB-G0D1ToNXWS92-h9i1GpH4OBr8s',
    //         clickTracking: 'Scarlet Li',
    //       },
    //       {
    //         id: 1,
    //         src: require('../assets/overseasStudents/david.png'),
    //         link: 'http://linkedin.com/in/zhenyu-wang-0827981b5',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAADIgs2IBUUYH72CkhPuN7HsDiu2QI5Ku5sM',
    //         clickTracking: 'David Wang',
    //       },
    //       {
    //         id: 2,
    //         src: require('../assets/overseasStudents/eva.png'),
    //         link: 'https://www.linkedin.com/in/yutzu-chen/',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAACxAjKIBbM9JpYOc_mruXNoiqIRqm2HEtz4',
    //         clickTracking: 'Eva Chen',
    //       },
    //       {
    //         id: 3,
    //         src: require('../assets/overseasStudents/jay.png'),
    //         link: 'https://www.linkedin.com/in/jay4869',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAABYcwhkBY8ZUa2sl33fhGoFbBSnupO1M-ws',
    //         clickTracking: 'Jay Li',
    //       },
    //       {
    //         id: 5,
    //         src: require('../assets/overseasStudents/Stella.png'),
    //         link: 'https://www.linkedin.com/in/xiang-stella-li/',
    //         wxLink: '/src/pages/profile/profile?peopleId=ACoAABptm3wB4cblfyHbh3TkUuO6hAJ-g7E6Ymk',
    //         clickTracking: 'Stella Li',
    //       },
    //     ],
    //   },
    // ],
    hScrolls: [
      {
        style: { width: '654', height: '315', left: '64', top: '2269', 'z-index': '500' },
        elements: [
          {
            style: {
              width: '350',
              height: '200',
              'margin-right': '20',
            },
            bgStyle: require('../assets/overseasStudents/scarlet.png'),
            link: 'https://www.linkedin.com/in/veshi/',
            wxLink: '/src/pages/profile/profile?peopleId=ACoAABFvXuYB_YGPK82GQv5uHJhBmsDi2QVKXLU',
            clickTracking: '施能 Vera',
          },
          {
            style: {
              width: '350',
              height: '200',
              'margin-right': '20',
            },
            bgStyle: require('../assets/overseasStudents/scarlet.png'),
            link: 'https://www.linkedin.com/in/veshi/',
            wxLink: '/src/pages/profile/profile?peopleId=ACoAABFvXuYB_YGPK82GQv5uHJhBmsDi2QVKXLU',
            clickTracking: '施能 Vera',
          },
          {
            style: {
              width: '350',
              height: '200',
              'margin-right': '20',
            },
            bgStyle: require('../assets/overseasStudents/scarlet.png'),
            link: 'https://www.linkedin.com/in/veshi/',
            wxLink: '/src/pages/profile/profile?peopleId=ACoAABFvXuYB_YGPK82GQv5uHJhBmsDi2QVKXLU',
            clickTracking: '施能 Vera',
          },
        ],
      },
    ],
    textRules: [
      {
        entrance: {
          style: { top: '700', left: '30', width: '686', height: '84', position: 'absolute' },
          bgStyle: require('../assets/overseasStudents/scarlet.png'),
          clickTracking: 'text-rule',
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
    ],
    imageRules: [
      {
        entrance: {
          style: {
            top: '850',
            left: '30',
            width: '686',
            height: '84',
            position: 'fixed',
            'z-index': '10',
          },
          bgStyle: require('../assets/overseasStudents/scarlet.png'),
          clickTracking: 'image-rule',
        },
        content: {
          style: { width: '500', height: '500' },
          bgStyle: require('../assets/overseasStudents/code.png'),
        },
      },
    ],
    videos: [
      {
        style: {
          left: '100',
          width: '550',
          top: '100',
          'border-radius': '10',
        },
        id: 1,
        src: 'https://media.licdn.cn/media/AAYIBADKAAAAAQAAAAAAADHRTFULjylrSUCzZGknL2W6Qw.mp4',
      },
    ],
    imagesToSave: [
      {
        style: {
          left: '56',
          width: '164',
          height: '161',
          top: '1972',
          'z-index': '5',
        },
        id: 1,
        src: require('../assets/overseasStudents/code.png'),
        active: false,
      },
    ],
    // inputs: [
    //   {
    //     style: {
    //       width:'468',
    //       left: '24',
    //       top: '830',
    //     },
    //     value: '0HUIGUIFULI66666',
    //   }
    // ],
    copyTexts: [
      {
        style: {
          width:'468',
          left: '24',
          top: '0',
          height: '100',
        },
        value: '0HUIGUIFULI66666', 
      }
    ]
  },
};

export const layoutsData = {
  activity: res.pageName, // need to be unique enough
  pageKey: res.pageName, // need to be unique enough
  title: res.title_page,
  miniProgramTrk: 'Overseas-poster-20210510-karen',
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
