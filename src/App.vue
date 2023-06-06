<template>
  <nav class="fixed top-0 left-0 right-0 md:absolute bg-blue-950">
    <div class="relative flex items-center justify-between w-full p-4 border-b border-gray-500 " :class="{ 'flex-row': !isMenuOpen, 'flex-col': isMenuOpen }">
      <router-link to="/" class="w-full text-xl text-neutral-100 font-bolder">Pocket Mentor</router-link>
      <div class="justify-between hidden gap-10 md:flex absolute top-4 left-[40%]">
        <router-link to="/" :class="getLinkClass('Home')">Home</router-link>
        <router-link to="/mentors" :class="getLinkClass('Mentors')">Mentors</router-link>
      </div>
      <transition-group name="list" tag="div" class="w-full bg-blue-950 ">
        <div class="flex flex-col gap-2 md:gap-20 md:hidden" :class="{ 'hidden': !isMenuOpen, 'border-t border-gray-500 mt-4': isMenuOpen }" :key="0">
          <router-link to="/" :class="getLinkClass('Home')">Home</router-link>
          <router-link to="/mentors" :class="getLinkClass('Mentors')">Mentors</router-link>
        </div>
      </transition-group>
      <div class="absolute block md:hidden right-2 top-2">
        <button class="py-2 px-2.5 hover:bg-neutral-200/10 active:bg-neutral-200/20 rounded-xl" @click="isMenuOpen = !isMenuOpen"><i class="text-xl text-white fa-solid fa-bars"></i></button>
      </div>
    </div>
  </nav>
  <div class="mt-[60px] py-6 md:py-10">
    <router-view></router-view>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useWindowSize } from '@vueuse/core'


export default defineComponent({
  setup() {
    const routerClass = ref('text-xl font-light hover:text-green-400 py-1')
    const currentRoute = ref('');
    const route = useRoute();
    const { width, height } = useWindowSize()

    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    watch(() => route.name, (routeName) => {
      currentRoute.value = routeName
    });

    const getLinkClass = (path: string) => {
      return currentRoute.value === path ? `${routerClass.value} text-green-300` : `${routerClass.value} text-white`;
    };
    return { routerClass, currentRoute, getLinkClass, isMenuOpen }
  },

})
</script>



<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 300ms ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>