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
    <NewsItemWrapper :posts="postList" />
  </q-page>
</template>
