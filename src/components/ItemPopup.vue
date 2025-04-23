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
  <q-dialog v-model="card" full-height :backdrop-filter="'blur(4px)'">
    <q-card class="item-popup-wrapper q-pa-lg" @click="card = false">
      <q-img :src="post.IMAGE_URL" />
      <q-card-section>
        <div class="q-ma-sm text-bold text-uppercase">{{ post.TITLE }}</div>
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
  overflow: hidden;
  & > .q-card__section {
    height: calc(100% - 320px);
    & > .popup-text-body {
      max-height: 100%;
      overflow-y: auto;
    }
  }
  & > .q-img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
