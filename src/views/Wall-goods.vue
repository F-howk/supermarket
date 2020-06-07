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
    this.newSrc.push(require("../assets/img/Wall-goods/w (1).jpg"));
    this.newSrc.push(require("../assets/img/Wall-goods/w (2).jpg"));
    this.newSrc.push(require("../assets/img/Wall-goods/w (3).jpg"));
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
