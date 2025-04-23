<script setup lang="ts">
import type { NewsArticle } from 'src/types/newsTypes.ts';
import NewsItemPreview from './NewsItemPreview.vue';
defineProps({
  posts: {
    type: Array as () => NewsArticle[],
    required: true,
  },
});
</script>

<template>
  <h3 class="q-ma-lg">Latest news:</h3>
  <div class="news-items-wrapper q-ma-lg">
    <template v-for="(post, idx) in posts" :key="idx">
      <NewsItemPreview :post="post" />
    </template>
  </div>
</template>
<style scoped lang="scss">
.news-items-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 400px;
  gap: 16px;
}
</style>
