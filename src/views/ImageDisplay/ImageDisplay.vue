<template>
  <!-- 行 -->
  <div class="flex-row">
    <!-- 列 -->
    <!-- 一共有4列，每一列里的元素单独填充 -->
    <div
      class="flex-column"
      v-for="(item, index) in allColumnData"
      :key="index"
    >
      <div class="flex-column-ele" v-for="curItem in item" :key="curItem.id">
        <img :src="curItem.imgUrl" />
        <p>{{ curItem.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref, onMounted } from "vue";
import NodeListOf from "typescript";
type waterFallItem = {
  id: number;
  imgUrl: string;
  desc: string;
};
const columnCount = 4;
let data = ref([
  {
    id: 0,
    imgUrl:
      "https://qcloud.dpfile.com/pc/q7QsMdJq_DS7J4xCUgesjjeicLbUbAFCPHHb8mBoN9o4jyZZRObLs5ym-WtN-3N1G45IiB1YIyNuDTtqzVRwesm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "1折起🔥成都最大超级折扣店‼️捡相因啦",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
  {
    id: 10,
    imgUrl:
      "https://qcloud.dpfile.com/pc/dHilnjl51w_qQEnsJ83shVOtIGNsQSgLBA8AUgWZrXeipuAflbCJKK6UI9lwcqKpwHHsQ-9MP97gy410T7ZcBMm_qA1Pf8rFcayTY-n-rG8.jpg",
    desc: "成都市区｜地铁直达免费拍绣球花海 🌸好震撼",
  },
]);
let allColumnData = reactive<waterFallItem[][]>(
  //   Array.from(new Array(4), () => new Array())
  Array.from(new Array(4), () => [])
);
for (let i = 0; i < data.value.length && i < columnCount; i++) {
  allColumnData[i].push(data.value[i]);
}
// 瀑布流布局：取出数据源中最靠前的一个并添加到瀑布流高度最小的那一列，等图片完全加载后重复该循环
let observerObj = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        addPicture();
        observerObj.unobserve(target);
      }
    }
  },
  {
    rootMargin: "0px 0px 300px 0px", // 提前加载高度
  }
);

let dataIndex = columnCount;
const addPicture = () => {
  if (dataIndex >= data.value.length) {
    alert("图片已加载完成");
    return;
  }

  let columnArray: NodeListOf<HTMLElement> =
    document.querySelectorAll(".flex-column");
  let eleHeight = [];
  for (let i = 0; i < columnArray.length; i++) {
    eleHeight.push(columnArray[i].offsetHeight);
  }

  // 每次找出最小的
  let minEle = Math.min(...eleHeight);
  let index = eleHeight.indexOf(minEle);

  // 然后把下一个data元素添加在上面高度最矮的这一列里
  allColumnData[index].push(data.value[dataIndex++]);

  // 为了防止渲染错乱，我们需要等待当前被添加到最低列的元素出现在可视窗口后，再去加载下一个元素
  nextTick(() => {
    columnArray = document
      .querySelectorAll(".flex-column")
      [index].querySelectorAll(".flex-column-ele");
    observerObj.observe(columnArray[columnArray.length - 1]);
  });
};

onMounted(() => {
  addPicture();
});
</script>

<style lang="less" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin-left: 5vw;
  justify-content: space-around;
  align-items: flex-start;
}

// 可以利用meta属性做一个响应式，比如屏幕宽度超过多宽就显示5列，屏幕宽度为多宽就显示4列
.flex-column {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
}

.flex-column-ele {
  img {
    width: 100%;
    max-height: 500px;
    object-fit: contain;
  }

  padding: 5px;
  margin: 5px;
  background-color: #f8f5f5;
  border-radius: 5px;
  box-shadow: 2px 5px 5px 0px #f3f3f3;
}
</style>
