<template>
    <div>
        <div class="flex flex-col-reverse items-center justify-between gap-2 mb-2 md:flex-row">
            <div class="flex justify-between w-full gap-2 px-2 md:justify-start">
                <ButtonOutlined @click="handleFilter('id')" class="text-gray-600" :class="{ 'outline outline-green-400': sort == 'id' }">Sort by id</ButtonOutlined>
                <ButtonOutlined @click="handleFilter('name')" class="text-gray-600" :class="{ 'outline outline-green-400': sort == 'name' }">Sort by name</ButtonOutlined>
                <ButtonOutlined @click="handleFilter('title')" class="text-gray-600" :class="{ 'outline outline-green-400': sort == 'title' }">Sort by title</ButtonOutlined>
            </div>
            <div class="flex gap-2">
                <Modal :mentorId="mentors.length"></Modal>
                <input type="text" v-model="searchTerm" placeholder="Search..." class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-full focus:outline-green-500 md:w-fit">
            </div>
        </div>
        <transition-group class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 listAnimation" name="list" tag="div">
            <MentorCard v-for="item in filteredItems" :key="item.id" :mentor="item"></MentorCard>
        </transition-group>
        <div class="hidden text-4xl text-center tracking-widest text-gray-700 mt-[10%]" id="errorMsg"></div>

    </div>
</template>
  
  
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import axios from 'axios'
import Mentor from "../types/Mentor"

import MentorCard from "../components/MentorCard.vue"
import ButtonOutlined from "../components/ButtonOutlined.vue"
import Modal from "../components/Modal.vue"

export default defineComponent({
    components: {
        MentorCard, ButtonOutlined, Modal
    },
    setup() {
        const mentors = ref<Mentor[]>([])
        axios.get('src/mentors.json')
            .then((response: any) => {
                mentors.value = response.data.mentors
            })
            .catch((error) => {
                document.getElementById('errorMsg').textContent = error.message
                document.getElementById('errorMsg').classList.remove('hidden')
            })


        const sort = ref('id')

        const handleFilter = (term: string) => {
            sort.value = term
        }

        const searchTerm = ref('');

        const filteredItems = computed(() => {
            const sorted = [...mentors.value];

            if (sort.value === 'name') {
                sorted.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort.value === 'title') {
                sorted.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort.value === 'id') {
                sorted.sort((a, b) => a.id - b.id);
            }

            return sorted.filter(item =>
                item.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                item.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
                item.price.toString().includes(searchTerm.value.toString()) ||
                item.location.toLowerCase().includes(searchTerm.value.toLowerCase())

            );
        });

        return { mentors, handleFilter, searchTerm, filteredItems, sort }
    },
    data() {
        return {
        }
    },
    methods: {

    }
});
</script>
  
  
<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>