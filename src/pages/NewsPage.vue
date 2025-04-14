<script setup lang="ts">
// import NewsItem from 'src/components/NewsItem.vue';
import NewsItemWrapper from 'src/components/NewsItemWrapper.vue';
import { getNewsList } from 'src/api/newsAPI';
import { onMounted, ref } from 'vue';
import type { NewsArticle } from 'src/types/newsTypes.ts';
const postList = ref<NewsArticle[]>([]);
const loadNewsList = async (): Promise<void> => {
  try {
    const { data } = await getNewsList();
    postList.value = data.Data;
    console.log('News list loaded successfully:', postList.value);
  } catch (error) {
    console.error('Error loading news list:', error);
  }
};
onMounted(async () => {
  await loadNewsList();
});
</script>
<template>
  <q-page class="row items-center justify-evenly">
    <div class="text-h2 q-ma-lg">The list of the recent news</div>
    <NewsItemWrapper :posts="postList" />
  </q-page>
</template>
