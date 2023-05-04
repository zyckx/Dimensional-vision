<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="search-input">
        <input
          type="text"
          placeholder="请输入搜索内容"
          v-model="searchValue"
          @keyup.enter="search"
        />
      </div>
      <div class="search-btn" @click="search">
        <i class="fa fa-search"></i>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const searchValue = ref("");

const search = () => {
  console.log(searchValue.value);
};
</script>

<style lang="less" scoped>
.search {
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .search-input {
      width: 100%;
      height: 100%;
      input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 14px;
        color: #666;
        &::placeholder {
          color: #999;
        }
      }
    }
    .search-btn {
      width: 40px;
      height: 28px;
      border-radius: 50%;
      background-color: #409eff;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        color: #fff;
      }
    }
  }
}
</style>
