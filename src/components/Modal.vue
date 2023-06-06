<template>
    <ButtonOutlined class="px-3 border-gray-300 focus:outline focus:outline-teal-500" @click="modalOpen = !modalOpen"><i class="fa-solid fa-plus"></i></ButtonOutlined>

    <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full transition-all duration-300 bg-black/20"
        :class="{ 'opacity-0 z-[-1]': !modalOpen, 'opacity-100 z-10': modalOpen }" @click.self="modalOpen = false">
        <div class="bg-white border-gray-400 rounded-2xl min-w-[40%] flex flex-col divide-y-2 divide-gray-100">
            <div class="flex items-center justify-between px-4 py-2 tracking-widest bg-gray-50 rounded-t-2xl">
                <span class="text-2xl ">Create a Mentor</span> <button @click="modalOpen = false"><i class="text-lg fa-solid fa-x"></i></button>
            </div>
            <div class="p-2">
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <input type="text" id="name" placeholder="Name" class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-xl focus:outline-green-500" v-model="formDatas.name">
                    <input type="text" id="title" placeholder="Title" class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-xl focus:outline-green-500" v-model="formDatas.title">
                    <input type="text" id="location" placeholder="Location" class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-xl focus:outline-green-500" v-model="formDatas.location">
                    <input type="number" id="price" placeholder="Price (₺)" class="w-full px-4 py-2 text-gray-600 border border-gray-300 appearance-none rounded-xl focus:outline-green-500"
                        v-model="formDatas.price">
                    <textarea id="summary" rows="3" placeholder="Description" v-model="formDatas.summary"
                        class="w-full col-span-2 px-4 py-2 text-gray-600 border border-gray-300 appearance-none rounded-xl focus:outline-green-500"></textarea>
                </div>
            </div>
            <div class="flex justify-end px-4 py-2 bg-gray-50 rounded-b-2xl ">
                <Button class="w-1/3" @click="createMentor">Save</Button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import ButtonOutlined from './ButtonOutlined.vue'
import Button from './Button.vue'
import mentorsJson from '../mentors.json';

export default {
    props: ['mentorId'],
    components: {
        ButtonOutlined, Button
    },
    setup(props) {
        const modalOpen = ref(false)
        const formDatas = ref({
            id: props.mentorId,
            name: '',
            title: '',
            summary: '',
            location: '',
            price: ''
        })
        const createMentor = () => {
            mentorsJson.mentors.push(formDatas)
            const jsonData = JSON.stringify(mentorsJson, null, 2);
            localStorage.setItem('mentors', jsonData);
            console.log(mentorsJson);
        }
        return { modalOpen, formDatas, createMentor }
    }
}
</script>

<style></style>