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
    github: "https://github.com/zyckx",
  },
  {
    avatar: "https://avatars.githubusercontent.com/zyckx",
    name: "zy_Galaxy",
    github: "",
  },
  {
    avatar: "https://avatars.githubusercontent.com/zyckx",
    name: "zy_Galaxy",
    github: "",
  },
]);
</script>

<style lang="scss" scoped></style>
