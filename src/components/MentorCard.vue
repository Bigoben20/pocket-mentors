<template>
  <div class="flex flex-col w-full gap-3 p-4 bg-white border border-gray-300 rounded-2xl hover:shadow-md hover:border-emerald-600" v-bind:id="'card_' + mentor.id">
    <div class="flex items-start justify-between">
      <div class="flex flex-col">
        <span class="text-lg font-bold">{{ mentor.name }}</span>
        <span class="text-xs">{{ mentor.title }}</span>
      </div>
      <span v-text="mentor.price + '₺/month'" class="text-2xl font-bold text-emerald-600"></span>
    </div>
    <div class="p-2 border border-gray-200 rounded-lg">
      <span v-text="mentor.summary" class=""></span>
    </div>
    <div class="flex items-center justify-between gap-1">
      <div>
        <i class="text-sm text-green-400 fa-solid fa-location-dot"></i> <span v-text="mentor.location" class="text-xs"></span>
      </div>
      <div>
        <Button>Details <i class="text-sm fa-solid fa-arrow-right"></i></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Button from "./Button.vue"
import Mentor from "@/types/Mentor.ts"
import Filter from "@/types/Filter.ts"

export default defineComponent({
  components: { Button },
  props: {
    mentor: {
      required: true,
      type: Object as PropType<Mentor[]>
    }
  }
})
</script>

<style></style>