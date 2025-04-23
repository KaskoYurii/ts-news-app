<script setup lang="ts">
import type { NewsArticle } from 'src/types/newsTypes.ts';
defineProps({
  post: {
    type: Object as () => NewsArticle,
    required: true,
  },
});
</script>

<template>
  <q-card class="item-preview">
    <q-img :src="post.IMAGE_URL">
      <div class="absolute-bottom text-h6">{{ post.TITLE }}</div>
    </q-img>
  </q-card>
</template>
<style scoped lang="scss">
.item-preview {
  height: 100%;
  display: block;
  & > .q-img {
    height: 100%;
  }
}
</style>
