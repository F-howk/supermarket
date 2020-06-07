<template>
  <div id="wine-cabinet">
    <el-card>
      <div slot="header">
        <el-page-header @back="goBack" content="详情"></el-page-header>
      </div>
      <div class="g-main">
        <div v-for="(v,i) in newSrc" :key="i">
          <el-image :src="v" :preview-src-list="newSrc"></el-image>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSrc:[]
    };
  },
  created(){
    this.newSrc.push(require("../assets/img/design-chart/d (1).png"));
    this.newSrc.push(require("../assets/img/design-chart/d (2).png"));
    this.newSrc.push(require("../assets/img/design-chart/d (3).png"));
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style>
.g-main {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.g-main > div,.g-main > div>.el-image,.g-main > div>img {
  margin-bottom: 10px;
  width: 300px;
  height: 200px;
}
</style>
