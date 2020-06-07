<template>
  <div id="index">
    <el-container>
      <el-header>
        <div style="display:flex;justify-content:space-between">
          <div>超市宣传</div>
          <div>
            联系电话:<i>肖宇</i> &emsp;<el-link type="primary">19150179513</el-link>&nbsp;
            <el-dropdown trigger="click" placement="bottom-end">
              <span class="el-dropdown-link" style="font-size:20px">
                点我
                <i class="el-icon-link"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <div style="width:140px;padding:0 10px">
                  <img style="width:140px;" src="../assets/img/card-code/cc.jpg" alt="">
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="(item, index) in banner" :key="index">
            <img :src="item" alt />
          </el-carousel-item>
        </el-carousel>
        <el-card v-for="(v,i) in list" :key="i">
          <el-divider>{{v.title}}</el-divider>
          <div class="container">
            <el-image :src="v.imgSrc">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <el-button class="more" icon="el-icon-s-unfold" circle @click="toMore(v.path)"></el-button>
          </div>
        </el-card>
        <el-backtop></el-backtop>
      </el-main>
    </el-container>
    <p
      style="margin-top:30px;border-top:1px solid #DCDFE6;line-height:35px;text-align:right;padding:0 20px"
    >本站仅用做宣传</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      list: []
    };
  },
  created() {
    this.banner.push(require("../assets/img/banner/banner (1).jpg"));
    this.banner.push(require("../assets/img/banner/banner (2).jpg"));
    this.banner.push(require("../assets/img/banner/banner (3).jpg"));
    this.banner.push(require("../assets/img/banner/banner (4).jpg"));
    this.list.push({
      title: "货架",
      imgSrc: require("../assets/img/goods-shelves/g1.jpg"),
      path: "/goods-shelves"
    });
    this.list.push({
      title: "酒柜",
      imgSrc: require("../assets/img/wine-cabinet/w1 (1).jpg"),
      path: "/wine-cabinet"
    });
    this.list.push({
      title: "米桶",
      imgSrc: require("../assets/img/Rice-barrel/r1 (2).jpg"),
      path: "/rice-barrel"
    });
    this.list.push({
      title: "面包柜",
      imgSrc: require("../assets/img/bread/b (1).jpg"),
      path: "/bread"
    });
    this.list.push({
      title: "绕柱",
      imgSrc: require("../assets/img/column/c (1).jpg"),
      path: "/column"
    });
    this.list.push({
      title: "设计图",
      imgSrc: require("../assets/img/design-chart/d (1).png"),
      path: "/design-chart"
    });
    this.list.push({
      title: "收银台",
      imgSrc: require("../assets/img/Cashier/c (1).jpg"),
      path: "/Cashier"
    });
    this.list.push({
      title: "果蔬台",
      imgSrc: require("../assets/img/Fruits/f (1).jpg"),
      path: "/Fruits"
    });
    this.list.push({
      title: "贴墙货架",
      imgSrc: require("../assets/img/Wall-goods/w (1).jpg"),
      path: "/Wall-goods"
    });
    this.list.push({
      title: "玻璃货架",
      imgSrc: require("../assets/img/Glass-goods/g (1).jpg"),
      path: "/Glass-goods"
    });
    this.list.push({
      title: "烟架",
      imgSrc: require("../assets/img/smoke/s (1).jpg"),
      path: "/smoke"
    });
  },
  methods: {
    toMore(path) {
      this.$router.push(path);
    }
  },
  components: {}
};
</script>

<style>
#index .el-link{
  vertical-align: baseline;
}
.el-carousel img {
  width: 100%;
  height: 350px;
}
#index .el-header {
  height: 30px !important;
  line-height: 30px;
  border-bottom: 1px solid #dcdfe6;
  color: #303133;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-card {
  margin-top: 60px;
  position: relative;
  overflow: visible !important;
}
#index .el-card::before {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  background: #409eff;
  position: absolute;
  top: -30px;
  left: 0;
}
.container {
  border-radius: 2px;
  border: 1px solid #dcdfe6;
  position: relative;
}
#index .el-image {
  display: block;
}
#index .more {
  color: #409eff;
  font-size: 14px;
  position: absolute;
  opacity: 0.6;
  right: 8px;
  top: 6px;
}
#index .more i::before {
  font-size: 24px;
}
#index .el-divider__text {
  font-size: 18px;
  font-weight: bold;
}
#index .el-backtop {
  right: 50% !important;
  margin-right: -450px;
}
</style>
