<script setup lang="ts">
import type { NewsArticle } from 'src/types/newsTypes.ts';
defineProps({
  posts: {
    type: Array as () => NewsArticle[],
    required: true,
  },
});
</script>

<template>
  <q-list bordered class="rounded-borders full-width">
    <q-expansion-item v-for="(post, idx) in posts" :key="idx" expand-separator>
      <template v-slot:header>
        <img :src="post.IMAGE_URL" class="image" />
        <q-item-section class="q-ma-lg"> {{ post.TITLE }} </q-item-section>
      </template>
      <q-card>
        <q-card-section>
          {{ post.BODY }}
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<style scoped lang="scss">
.image {
  width: 150px;
}
</style>
