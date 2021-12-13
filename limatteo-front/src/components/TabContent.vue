<template>
  <div>
    <div style="display: flex; justify-content: space-around">
      <MFilter @click.native="showCityPiceker" :count="selectedCities.length" value="city"
        >城市</MFilter
      >
      <MFilter @click.native="showIndustrySheet" :count="selectedIndustries.length" value="industry"
        >行业</MFilter
      >
    </div>
    <div class="list">
      <JobItem
        v-for="job in filterJobList != null ? filterJobList : jobList"
        :job="job"
        :key="job.id"
      />
      <div
        class="noList"
        style="display: flex; justify-content: center; margin-top: 5px"
        v-show="jobList.length == 0"
      >
        暂无职位
      </div>
    </div>
    <div class="bottomSheet" v-if="showCityPicker || showIndustryPicker">
      <BottomSheet
        :show="showCityPicker"
        :selects="cityList"
        :defaultSelecteds="selectedCities"
        @confirmSelects="onCitiesUpdate"
      />
      <BottomSheet
        :show="showIndustryPicker"
        :selects="industryList"
        :defaultSelecteds="selectedIndustries"
        @confirmSelects="onIndustriesUpdate"
      />
    </div>
  </div>
</template>
<script>
import MFilter from '~/components/mercado/Filter.vue';
import JobItem from '~/components/JobItem.vue';
import BottomSheet from '~/components/BottomSheet.vue';
export default {
  name: 'TabContent',
  components: {
    MFilter,
    JobItem,
    BottomSheet,
  },
  props: ['jobList', 'cityList', 'industryList', 'filterJobList'],
  data() {
    return {
      selectedCities: [],
      selectedIndustries: [],
      showCityPicker: false,
      showIndustryPicker: false,
      filterJob: [],
    };
  },
  watch: {
    showCityPicker: function () {
      this.$emit('showPicker', this.showCityPicker);
    },
    showIndustryPicker: function() {
      this.$emit('showPicker', this.showIndustryPicker);
    }
  },
  methods: {
    showCityPiceker() {
      this.showCityPicker = true;
    },
    showIndustrySheet() {
      this.showIndustryPicker = true;
    },
    onCitiesUpdate(cityList) {
      this.showCityPicker = false;
      this.showTutor = true;
      if (cityList === null) {
        // only close the sheet
        return;
      }
      this.selectedCities = cityList || [];
      this._getFilteredJobs();
    },
    onIndustriesUpdate(industryList) {
      this.showIndustryPicker = false;
      this.showTutor = true;
      if (industryList === null) {
        // only close the sheet
        return;
      }
      this.selectedIndustries = industryList || [];
      this._getFilteredJobs();
    },
    _getFilteredJobs() {
      let filteredJobs = [];
      this.filterJob = this.jobList
        .filter(
          (item) => this.selectedCities.length == 0 || this.selectedCities.includes(item.job_area)
        )
        .filter(
          (item) =>
            this.selectedIndustries.length == 0 ||
            this.selectedIndustries.includes(item.job_industry)
        );
      this.$emit('filterJob', this.filterJob);
    },
  },
};
</script>
<style lang="scss" scoped>
.bottomSheet {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 200;
}
</style>