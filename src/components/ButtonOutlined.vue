<template>
    <button :class="defaultClass">
        <slot />
    </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        const defaultClass = ref("rounded-full px-2.5 py-1.5 md:py-2 border border-gray-200 bg-white hover:opacity-80")

        return { defaultClass }
    }
}
</script>

<style></style>