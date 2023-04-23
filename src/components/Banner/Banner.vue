<template>
  <div class="banner-wrap">
    <div class="banner-background">
      <img
        src="https://ow.extremevision.com.cn/public/uploads/images/20220706/0ed2f18d8fdf461f7c5422a9ef2815ce.png"
        alt="banner"
      />
    </div>
    <div class="banner-content">
      <div class="banner-left">
        <h1>找算法，先上视觉</h1>
        <div class="input-box">
          <el-form :inline="true" class="demo-form-inline" label-width="80px">
            <el-form-item>
              <el-input
                placeholder="请输入关键字"
                prefix-icon="el-icon-search"
                v-model="inputValue"
                @keyup.enter="search"
              ></el-input>
              <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="banner-right">
        <div class="right-box">
          <div class="banner-title">热门算法</div>
          <div class="list">
            <ul>
              <li>
                <a>超分辨率 </a>
              </li>
              <li>
                <a>图像处理 </a>
              </li>
              <li>
                <a>点云处理 </a>
              </li>
              <li>
                <a>视频处理 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-box">
          <div class="banner-title">热门算法</div>
          <div class="list">
            <ul>
              <li>
                <a>超分辨率 </a>
              </li>
              <li>
                <a>图像处理 </a>
              </li>
              <li>
                <a>点云处理 </a>
              </li>
              <li>
                <a>视频处理 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-box">
          <div class="banner-title">热门算法</div>
          <div class="list">
            <ul>
              <li>
                <a>超分辨率 </a>
              </li>
              <li>
                <a>图像处理 </a>
              </li>
              <li>
                <a>点云处理 </a>
              </li>
              <li>
                <a>视频处理 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const inputValue = ref("");
const search = () => {
  console.log(inputValue.value);
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  position: relative;
  width: 100%;
  height: 500px;
  .banner-background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .banner-content {
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    .banner-left {
      width: 800px;

      color: #fff;
      h1 {
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      .input-box {
        display: flex;
        align-items: center;
        .el-input {
          width: 400px;
          margin-right: 20px;
        }
      }
    }

    .banner-right {
      width: 500px;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #9eadf0 0%, #f5f5f5 100%);
      .right-box {
        width: 100%;
        .banner-title {
          font-size: 20px;
          font-weight: 700;
          margin: 20px 0;
        }
        .list ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
          li {
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-top: 2px;
            font-size: 17px;
            color: rgba(0, 0, 0, 0.65);
            border-right: 1px solid #d9d9d9;

            a {
              color: rgba(0, 0, 0, 0.65);
              &:hover {
                color: #2b49de;
              }
            }
          }
        }
      }
    }
  }
}
</style>
