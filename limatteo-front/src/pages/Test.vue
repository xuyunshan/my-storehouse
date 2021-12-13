<template>
  <div :class="showPicker ? 'wrap-hide' : 'wrap'">
    <Banner
      @click.native="onBannerClick"
      src="https://cdn.chitu.com/summer/Career%20tab%20banner.jpg"
    ></Banner>
    <Tabs expanded :animated="false" @input="switchPosition">
      <TabItem label="实习职位" value="intern">
        <TabContent
          :jobList="internJobs"
          :cityList="cities"
          :industryList="industries"
          :filterJobList="filterCityList"
          @filterJob="getFilterJob"
          @showPicker="getShowPicker"
        />
      </TabItem>
      <TabItem label="校招职位" value="campus">
        <TabContent
          :jobList="campusHiringJobs"
          :cityList="cities"
          :industryList="industries"
          :filterJobList="filterIndustryList"
          @filterJob="getFilterJob"
          @showPicker="getShowPicker"
        />
      </TabItem>
    </Tabs>
    <ScrollToTop @click.native="toTop" :src="toTopUrl" :show="showToTop" />
    <FloatIcon @click.native="toCatch" :src="tutorUrl" :show="!showPicker" />
  </div>
</template>
<script>
// import Button from '~/components/Button.vue';
import Button from '~/components/buefy/components/button/Button.vue';
import Tabs from '~/components/buefy/components/tabs/Tabs.vue';
import TabItem from '~/components/buefy/components/tabs/TabItem.vue';
import Banner from '~/components/Banner.vue';
import BRadio from '~/components/Radio.vue';
import RadioButton from '~/components/buefy/components/radio/RadioButton.vue';
import ScrollToTop from '~/components/ScrollToTop.vue';
import FloatIcon from '~/components/FloatIcon.vue';
import TabContent from '~/components/TabContent.vue';
import { InternJobs, CampusHiringJobs } from '~/mock/summer_intern';
import { cities } from '~/mock/cities';
import { industries } from '~/mock/industries';
import '~/components/buefy/scss/buefy-build.scss';
import toTopUrl from '~/assets/test/button-back-to-top.png';
import tutorUrl from '~/assets/test/tutor.png';
export default {
  metaInfo: {
    title: '实习校招职位精选',
    titleTemplate: '实习校招职位精选',
    meta: [
      {property: 'og:title', content: '【校招·实习专场】精选名企职位  offer先人一步'},
      {property: 'og:url', content: 'https://linkedin-event.com/activity/gridsome_test/test/'},
      {property: 'og:image', content: 'https://cdn.chitu.com/campus_logo/share/bannershare.jpg'}
    ]
  },
  components: {
    Button,
    Tabs,
    TabItem,
    Banner,
    ScrollToTop,
    FloatIcon,
    TabContent,
  },
  data() {
    return {
      radio: 'Jack',
      currentTab: 'intern',
      internJobs: InternJobs,
      campusHiringJobs: CampusHiringJobs,
      cities,
      industries,
      toTopUrl: toTopUrl,
      tutorUrl: tutorUrl,
      filterCityList: null,
      filterIndustryList: null,
      showPicker: false,
      showToTop: false,
    };
  },
  methods: {
    onBannerClick() {
      console.log('banner clicked');
    },
    getShowPicker(data) {
      this.showPicker = data;
    },
    getFilterJob(data) {
      if (this.currentTab == 'intern') {
        this.filterCityList = data;
      } else {
        this.filterIndustryList = data;
      }
    },
    switchPosition(event) {
      // TODO: make two tabs into two parallel components, so we don't need to keep double variables in both tabs.
      this.currentTab = event;
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    scrollToTop() {
      const that = this;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.showToTop = true;
      } else {
        that.showToTop = false;
      }
    },
    toCatch() {
      window.location.href =
        'https://www.linkedin.com/wukong-web/coach/mentee?trk=SJC&keep_back_stack=true';
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    scrollToTop() {
      const that = this;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.showToTop = true;
      } else {
        that.showToTop = false;
      }
    },
    toCatch() {
      window.location.href =
        'https://www.linkedin.com/wukong-web/coach/mentee?trk=SJC&keep_back_stack=true';
    },
  },
  created() {},
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: auto;
  overflow-y: scroll;
}
.wrap-hide {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
</style>