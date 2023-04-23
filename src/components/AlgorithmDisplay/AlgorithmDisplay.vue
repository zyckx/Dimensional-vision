<template>
  <div class="algorithm-wrap">
    <div class="select-wrap">
      <span class="select-title">算法商城</span>
      <ul>
        <li class="active">
          <i class="fa fa-search"></i>
          全部算法
        </li>
        <li>
          <i class="fa fa-search"></i>
          超分辨率
        </li>
        <li>
          <i class="fa fa-search"></i>
          图像处理
        </li>
        <li>
          <i class="fa fa-search"></i>
          点云处理
        </li>
        <li>
          <i class="fa fa-search"></i>
          视频处理
        </li>
      </ul>
    </div>
    <div class="algorithm-display">
      <div class="display-title">建筑地产</div>
      <div class="display-content">
        <ul class="content-wrap">
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
          <li class="content-item">
            <a href="" class="item-wrap">
              <img
                src="../../assets/img/9981非机动车停放.jpg"
                alt=""
                class="content-img"
              />
              <div class="content-title">超分辨率</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.algorithm-wrap {
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  .select-wrap {
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    .select-title {
      display: block;
      width: 100%;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      background: #6798f3;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
    }
    ul {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 20px;
      li {
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        color: #666;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          color: #000;
        }

        i {
          display: none;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #6798f3;
          display: inline-block;
          margin-right: 10px;
          visibility: hidden;
        }
        &.active i {
          display: inline-block;
          visibility: visible;
        }
        &:hover {
          color: #000;
        }
      }
    }
  }
  .algorithm-display {
    width: 1200px;
    margin-top: 60px;
    height: 1300px;
    overflow: auto;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    .display-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .display-content {
      .content-wrap {
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        .content-item {
          position: relative;
          overflow: hidden;
          width: 31%;
          height: 200px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 10px;
          margin: 0 20px 20px 0;
          cursor: pointer;

          .item-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            .content-img {
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
              width: 100%;
              height: 100%;
              border-radius: 10px;
              object-fit: cover;
              transition: all 0.3s;
            }
            .content-title {
              margin-top: 10px;
              font-size: 16px;
              font-weight: 500;
              color: #fff;
            }
          }
          &:hover {
            // 透明度
            opacity: 0.8;
            background: linear-gradient(#6798f3, #ffffff);
            .content-img {
              opacity: 0.5;
              scale: 1.1;
            }
          }
        }
      }
    }
  }
}
</style>
