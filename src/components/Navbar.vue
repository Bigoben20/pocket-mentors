<template>
    <nav class="absolute top-0 left-0 right-0 flex items-center justify-between w-full p-4 bg-blue-950">
        <div class="text-xl text-neutral-100 font-bolder">Pocket Mentor</div>
        <div class="hidden gap-2 md:flex md:gap-20">
            <router-link to="/" :class="getLinkClass('Home')">Home</router-link>
            <router-link to="/mentors" :class="getLinkClass('Mentors')">Mentors</router-link>
        </div>
        <div>
            <button class="py-2 px-2.5 hover:bg-neutral-200/20 active:bg-neutral-200/30 rounded-xl"><i class="text-xl text-white fa-solid fa-bars"></i></button>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>