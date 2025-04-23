<script setup lang="ts">
import type { NewsArticle } from 'src/types/newsTypes.ts';
import ItemPopup from './ItemPopup.vue';
import { ref } from 'vue';
defineProps({
  post: {
    type: Object as () => NewsArticle,
    required: true,
  },
});
const card = ref(false);
</script>

<template>
  <q-card class="item-preview" @click="card = !card">
    <q-img :src="post.IMAGE_URL">
      <div class="absolute-bottom text-h6">{{ post.TITLE }}</div>
    </q-img>
  </q-card>
  <ItemPopup :post="post" v-model="card" />
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
