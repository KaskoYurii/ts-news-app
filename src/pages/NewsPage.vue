<script setup lang="ts">
import NewsItemWrapper from 'src/components/NewsItemWrapper.vue';
import { getNewsList } from 'src/api/newsAPI';
import { onMounted, ref } from 'vue';
import type { NewsArticle } from 'src/types/newsTypes.ts';
import RecentThreeNews from 'src/components/RecentThreeNews.vue';

const firstThreePosts = ref<NewsArticle[]>([]);
const postList = ref<NewsArticle[]>([]);
const loadNewsList = async (): Promise<void> => {
  try {
    const { data } = await getNewsList();
    firstThreePosts.value = data.Data.slice(0, 3);
    postList.value = data.Data.slice(3);
  } catch (error) {
    console.error('Error loading news list:', error);
  }
};

onMounted(async () => {
  await loadNewsList();
});
</script>
<template>
  <q-page>
    <RecentThreeNews :posts="firstThreePosts" />
    <NewsItemWrapper :posts="postList" />
  </q-page>
</template>
