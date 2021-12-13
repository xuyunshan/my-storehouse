import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { isInWechatMiniprogram, isInWechatApp } from '@/util/container';
import { useLocation } from '@reach/router';

import Layouts from '@/components/goblin/Layouts';
import HotAreas from '@/components/goblin/HotAreas';
import FixedBottoms from '@/components/goblin/FixedBottoms';
import FixedElements from '@/components/goblin/FixedElements';
import FixedTops from '@/components/goblin/FixedTops';
import ImagesToSave from '@/components/goblin/ImagesToSave';
import PopTextRules from '@/components/goblin/Rule/PopTextRules';
import PopImageRules from '@/components/goblin/Rule/PopImageRules';
import Swipers from '@/components/goblin/Swipers';
import Videos from '@/components/goblin/Videos';
import HorizontalScroll from '@/components/goblin/Scroll/HorizontalScrolls';
import VerticalScrolls from '@/components/goblin/Scroll/VerticalScrolls';
import Inputs from '@/components/goblin/Inputs';
import CopyTexts from '@/components/goblin/CopyTexts';
import '@/style/_reset.scss';

const LivePreviewIframe = () => {
  const EVENT_HTTP_PREFIX = 'https://www.linkedin-event.com/camo';
  const Location = useLocation();
  let [layoutsData, setLayoutsData] = useState({
    render: {
      meta: {},
      sharing: {},
      layouts: [],
      hotAreas: [],
      imagesToSave: [],
      fixedTops: [],
      fixedElements: [],
      fixedBottoms: [],
      textRules: [],
      imageRules: [],
      swipers: [],
      videos: [],
      hScrolls: [],
      vScrolls: [],
    },
  });
  useEffect(() => {
    //Receive Iframe message
    window.addEventListener(
      'message',
      (updatedLayout) => {
        setLayoutsData(updatedLayout.data);
      },
      false
    );
    async function wxSetup() {
      if (isInWechatApp()) {
        const wxConfig = await axios.get('//api.linkedin-event.com/get_signature', {
          params: {
            reqUrl: global.location.href,
          },
        });
        console.log('== wechat config params ==', wxConfig.data);
        global.wx.config({
          // debug: true,
          ...wxConfig.data,
          jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
        });

        global.wx.ready(() => {
          const shareConfig = {
            imgUrl: `${layoutsData.render.sharing?.imageUrl}`, //分享卡片的图标，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
            desc: `${layoutsData.render.sharing?.description}`, //摘要,如果分享到朋友圈的话，不显示摘要。
            title: `${layoutsData.render.sharing?.title}`, // 分享卡片标题
            link: `${global.location.href}`, // 分享出去后的链接，这里是返回的链接。注意：不能包含 '#' 以及后面的内容！！
            success: function () {
              // 分享成功后的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            },
            // 还有其他几种回调函数，详见官网文档
          };
          // 分享给朋友及分享到QQ按钮的分享内容
          global.wx.updateAppMessageShareData(shareConfig);
          // 分享到朋友圈及分享到QQ空间按钮的分享内容
          global.wx.updateTimelineShareData(shareConfig);
          // 分享到腾讯微博的分享内容
          global.wx.onMenuShareWeibo(shareConfig);
        });
      }
      if (await isInWechatMiniprogram()) {
        global.wx.miniProgram.postMessage({
          data: {
            type: 'wechatSharingConfig',
            shareObj: {
              title: `${layoutsData.render.miniprogramSharing?.title}`,
              desc: `${layoutsData.render.miniprogramSharing?.desc}`,
              path: `${global.location.href}`,
              imageUrl: `${layoutsData.render.miniprogramSharing?.imageUrl}`,
            },
          },
        });
      }
    }
    wxSetup();
    const _czc = global._czc || [];
    _czc.push(['_setAccount', '1277901282']);
  }, [layoutsData, Location]);

  return (
    <div className="wrapper" style={{ backgroundColor: layoutsData.backgroundColor }}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="og:title" content={`${layoutsData.render.meta?.title}`} />
        <meta name="og:url" content={`${EVENT_HTTP_PREFIX}${Location.pathname}`} />
        <meta name="og:image" content={`${layoutsData.render.meta?.imageUrl}`} />
        <style type="text/css">{`html {font-size: 10vw; max-width: 750px;} body {margin: 0;} @media screen and (min-width: 750px){html {font-size: 75px}}`}</style>
        <script type="application/ld+json">{`window.__pageSharingConfig = {title: '${layoutsData.render.sharing?.title}',imageUrl: '${layoutsData.render.sharing?.imageUrl}',description: '${layoutsData.render.sharing?.description}',url: '${EVENT_HTTP_PREFIX}${Location.pathname}',};`}</script>
        <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js" type="text/javascript" />
        <title>{`${layoutsData.title}`}</title>
      </Helmet>
      {/* // TODO: optimize pagekey handling */}
      {layoutsData?.render?.layouts && (
        <Layouts layouts={layoutsData.render.layouts} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.hotAreas && (
        <HotAreas hotAreas={layoutsData.render.hotAreas} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.imagesToSave && (
        <ImagesToSave
          imagesToSave={layoutsData.render.imagesToSave}
          pageKey={layoutsData.pageKey}
        />
      )}
      {layoutsData?.render?.fixedTops && (
        <FixedTops fixedTops={layoutsData.render.fixedTops} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.fixedElements && (
        <FixedElements
          fixedElements={layoutsData.render.fixedElements}
          pageKey={layoutsData.pageKey}
        />
      )}
      {layoutsData?.render?.fixedBottoms && (
        <FixedBottoms
          fixedBottoms={layoutsData.render.fixedBottoms}
          pageKey={layoutsData.pageKey}
        />
      )}
      {layoutsData?.render?.textRules && (
        <PopTextRules rules={layoutsData.render.textRules} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.imageRules && (
        <PopImageRules rules={layoutsData.render.imageRules} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.swipers && (
        <Swipers swipers={layoutsData.render.swipers} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.videos && (
        <Videos videos={layoutsData.render.videos} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.hScrolls && (
        <HorizontalScroll hScrolls={layoutsData.render.hScrolls} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.vScrolls && (
        <VerticalScrolls vScrolls={layoutsData.render.vScrolls} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.inputs && (
        <Inputs inputs={layoutsData.render.inputs} pageKey={layoutsData.pageKey} />
      )}
      {layoutsData?.render?.copyTexts && (
        <CopyTexts copyTexts={layoutsData.render.copyTexts} pageKey={layoutsData.pageKey} />
      )}
    </div>
  );
};
export default LivePreviewIframe;
