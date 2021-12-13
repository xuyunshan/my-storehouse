<template>
  <div v-if="job" class="list" @click="toLink(job.job_link)">
    <div class="left">
      <img
        class="lazy"
        :data-original="'https://cdn.chitu.com/campus_logo/image/' + job.job_src"
        :src="'https://cdn.chitu.com/campus_logo/image/' + job.job_src"
        style="display: block"
      />
    </div>
    <div class="center">
      <p>{{job.job_name}}</p>
      <p>{{job.job_company_name}} · {{job.jod_location}}</p>
    </div>
    <span class="right_content">
      <div class="right">
        <span>查看</span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JobItem',
  inheritAttrs: false,
  props: {
    job: Object,
  },
  methods: {
    toLink(url){
      window.location.href = url
    }
  }
};
</script>

<style scoped>
.list {
  position: relative;
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  padding-bottom: 13px;
}
.list .left {
  width: 44px;
  height: 44px;
  margin-top: 14px;
  position: relative;
}
.list .left img {
  border: 1px solid #edf0f3;
  border-radius: 2px;
  width: 44px;
  height: 44px;
  display: block;
  min-height: 44px;
}

.list .center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 20px;
  max-width: calc(100% - 144px - 0.3rem);
}

.list .center p:nth-child(1) {
  width: 100%;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  font-weight: bold;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.list .center p:nth-child(2) {
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  margin-top: 6px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.list .right {
  height: 32px;
  width: 54px;
  margin-top: 22px;
  /* margin-right: 16px; */
  border-radius: 16px;
  background-color: #0073b1;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
