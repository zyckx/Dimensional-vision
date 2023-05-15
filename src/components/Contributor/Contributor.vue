<template>
  <div class="contributor">
    <ul class="contributor-list">
      <li
        class="contributor-item"
        v-for="item in contributors"
        :key="item.name"
      >
        <div class="avatar">
          <img :src="item.avatar" :alt="item.name" />
          <div class="join-time">{{ item.joinTime }}</div>
          <div class="contributor-name">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const contributors = ref([
  {
    avatar: "https://avatars.githubusercontent.com/zyckx",
    name: "zy_Galaxy",
    joinTime: "2021-10-10",
    github: "https://github.com/zyckx",
  },
  {
    avatar: "https://avatars.githubusercontent.com/zyckx",
    name: "zy_Galaxy",
    joinTime: "2021-10-10",

    github: "",
  },
  {
    avatar: "https://avatars.githubusercontent.com/zyckx",
    name: "zy_Galaxy",
    joinTime: "2021-10-10",

    github: "",
  },
]);
</script>

<style lang="less" scoped>
.contributor {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;

  .contributor-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .contributor-item {
      width: 200px;
      height: 200px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
      border-radius: 20px;

      .avatar {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translate(0, -20px);

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        .join-time {
          margin-top: 20px;
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #999;
          font-size: 14px;
        }
        .contributor-name {
          margin-top: 10px;
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: all 0.3s ease-in-out;
          span {
            color: #333;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
      &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        transform: translate(0, -5px);
      }
    }
  }
}
</style>
