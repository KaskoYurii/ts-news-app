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
  <h2 class="q-ma-lg">Recent news:</h2>
  <div class="recent-news-wrapper q-ma-lg">
    <template v-for="(post, idx) in posts" :key="idx">
      <NewsItemPreview :post="post" />
    </template>
  </div>
</template>
<style scoped lang="scss">
.recent-news-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
  height: 600px;
}

.recent-news-wrapper :deep(> *) {
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* First card spans two rows */
.recent-news-wrapper :deep(> *:nth-child(1)) {
  grid-row: 1 / 3;
  grid-column: 1;
}

/* Second card top-right */
.recent-news-wrapper :deep(> *:nth-child(2)) {
  grid-row: 1;
  grid-column: 2;
}

/* Third card bottom-right */
.recent-news-wrapper :deep(> *:nth-child(3)) {
  grid-row: 2;
  grid-column: 2;
}
@media (max-width: 900px) {
  .recent-news-wrapper {
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
  }
  .recent-news-wrapper :deep(> *) {
    max-height: 400px;
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    display: block;
  }
}
</style>
