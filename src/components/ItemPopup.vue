<script setup lang="ts">
import type { NewsArticle } from 'src/types/newsTypes.ts';
import { computed } from 'vue';
interface Props {
  post: NewsArticle;
  modelValue: boolean;
}
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
const props = defineProps<Props>();

const card = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits('update:modelValue', value);
  },
});
</script>

<template>
  <q-dialog v-model="card">
    <q-card class="item-popup-wrapper q-pa-lg">
      <q-img :src="post.IMAGE_URL" />
      <q-card-section>
        <h5 class="q-ma-sm">{{ post.TITLE }}</h5>
        <q-separator />
        <p class="popup-text-body q-ma-sm">
          {{ post.BODY }}
        </p>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<style scoped lang="scss">
.item-popup-wrapper {
  & > .q-img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  .popup-text-body {
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
