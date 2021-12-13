const res = {
  "title_page": "【到梦空间培训】",
  "pageName": "2021-freshman-classroom-erke-taishan",
  "background_color": "",
  "title_share_zephyr": "",
  "shareImg_Rect1": "",
  "title_share_wx": "",
  "shareImg_square": "",
  "description_share_wx": "",
  "title_share_miniprogram": "到梦空间系统学生端培训",
  "description_share_miniprogram": "",
  "shareImg_Rect2": "https://www.linkedin-event.com/image/2021-freshman-classroom/mini_share.jpg",
  "render": {
    "layouts": [
      {
        "src": "https://www.linkedin-event.com/image/2021-freshman-classroom/Slice1.png",
        "id": "https://www.linkedin-event.com/image/2021-freshman-classroom/Slice1.png",
        "active": false
      },
      {
        "src": "https://www.linkedin-event.com/image/2021-freshman-classroom/slice2.png",
        "id": "https://www.linkedin-event.com/image/2021-freshman-classroom/slice2.png",
        "active": false
      }
    ],
    "fixedElements": [],
    "fixedBottoms": [],
    "fixedTops": [],
    "hotAreas": [
      {
        "style": {
          "left": "51",
          "width": "648",
          "height": "253",
          "bottom": "",
          "top": "990"
        },
        "wxLink": "/src/pages/live/live-introduction/live-introduction?room_id=81&enterRoom=true&trk=erke-yijing-page-marina",
        "link": "",
        "clickTracking": "button_1",
        "active": false
      },
      {
        "style": {
          "left": "51",
          "width": "648",
          "height": "253",
          "bottom": "",
          "top": "1352"
        },
        "wxLink": "/src/pages/live/live-introduction/live-introduction?room_id=82&enterRoom=true&trk=erke-daisy-page-marina",
        "link": "",
        "clickTracking": "button_2",
        "active": false
      },
      {
        "style": {
          "left": "51",
          "width": "648",
          "height": "253",
          "bottom": "",
          "top": "1727"
        },
        "wxLink": "/src/pages/live-list/live-list?promoId=college_collection_0819&trk=erke-college-09-marina",
        "link": "",
        "clickTracking": "button_3",
        "active": false
      },
      {
        "style": {
          "left": "60",
          "width": "630",
          "height": "368",
          "bottom": "",
          "top": "314",
        },
        "wxLink": "/src/pages/live/live-introduction/live-introduction?room_id=87&trk=erke-taishan-page-marina",
        "link": "",
        "clickTracking": "live_subscribe",
        "active": false
      },
      {
        "style": {
          "left": "279",
          "width": "192",
          "height": "59",
          "bottom": "",
          "top": "665",
        },
        "wxLink": "/src/pages/live/live-introduction/live-introduction?room_id=87&trk=erke-taishan-page-marina",
        "link": "",
        "clickTracking": "live_subscribe",
        "active": false
      }
    ],
    "imagesToSave": [
      {
        "style": {
          "left": "279",
          "width": "192",
          "height": "59",
          "bottom": "",
          "z-index": "500",
          "top": "665",
          "border-radius": ""
        },
        "src": "https://www.linkedin-event.com/image/2021-freshman-classroom/live.png",
      },
      {
        "style": {
          "left": "60",
          "width": "630",
          "height": "368",
          "bottom": "",
          "z-index": "",
          "top": "314",
          "border-radius": "8"
        },
        "src": "https://www.linkedin-event.com/image/2021-freshman-classroom/taitian.png",
      },
      {
        "style": {
          "left": "233",
          "width": "299",
          "height": "299",
          "bottom": "",
          "z-index": "",
          "top": "2164",
          "border-radius": ""
        },
        "src": "https://www.linkedin-event.com/image/2021-freshman-classroom/test_code.png",
      }
    ],
    "swipers": [
      {
        "style": {
          "left": "",
          "width": "",
          "height": "",
          "bottom": "",
          "zIndex": ""
        },
        "elements": [
          {
            "src": "",
            "link": "",
            "wxLink": "",
            "clickTracking": ""
          }
        ],
        "type": "",
        "active": ""
      }
    ],
    "hScrolls": [],
    "videos": [],
    "imageRules": [],
    "copyTexts": [],
    "inputs": []
  }
}

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
