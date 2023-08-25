<script setup lang="ts">
useHead({
  title: '伟鹏的前端知识小讲堂',
})

const { data, error } = await useFetch('/api/indexdata')
if (process.server && error.value)
  showError('获取数据失败！')

console.table(data)
</script>

<template>
  <n-carousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    style="height: 400px"
    :show-dots="false"
  >
    <n-carousel-item v-for="(item, index) in data?.data.banners" :key="index" :style="{ width: '60%' }" @click="navigateTo(item.url, { external: true })">
      <img :src="item.src" alt="" class="carousel-img">
    </n-carousel-item>
  </n-carousel>
  <ProdList
    :data="data?.data.courses!"
    title="最新课程"
    type="course"
  />
  <ProdList
    :data="data?.data.columns!"
    title="最新专栏"
    type="column"
  />
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
