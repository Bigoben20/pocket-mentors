<template>
    <button :class="defaultClass">
        <slot />
    </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        const defaultClass = ref("bg-emerald-500 hover:bg-emerald-500/90 hover:shadow-lg hover:shadow-green-200 rounded-lg px-2.5 py-2 text-white")

        return { defaultClass }
    }
}
</script>

<style></style>