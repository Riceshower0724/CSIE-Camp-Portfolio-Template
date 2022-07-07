<script setup>
import { ref, watch } from "vue";
import { random_text } from "@/utils";
import Typing from "@components/Typing.vue";
import Project from "@components/Project.vue";
import Fade from "../components/Fade.vue";

const projects = [
    {
        name: "如何成為一匹好馬",
        description: "This is a project description. " + random_text(64),
        image: "http://i0.hdslb.com/bfs/archive/5a864396cf52f660f628a355f32621a8bb56ae9c.jpg",
        link: "https://wikifarmer.com/zh-hans/%E9%A9%AC%E7%9A%84%E9%A5%B2%E5%85%BB/",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "來雙好鞋子!!？",
        description: "This is a project description. " + random_text(64),
        image: "http://5b0988e595225.cdn.sohucs.com/images/20181211/d09f6aae302a4c5aad846c8716648be5.jpeg",
        link: "https://playing.ltn.com.tw/article/18388/1",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "成為一匹長距離名馬!!",
        description: "This is a project description. " + random_text(64),
        image: "https://thumbor.4gamers.com.tw/gcjJp2rEfZjh6S-DsvOib5AXR4k=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder%2Fimages%2FALIEN%2F2021-3%2Fo0727040714899752314.jpg%3FversionId%3Dfbhyo1vIDnVjoYGOvyS6_7YJLOkq6FfJ",
        link: "https://running.biji.co/index.php?q=news&act=info&id=105658&subtitle=%E3%80%90%E7%9F%A5%E8%AD%98%E3%80%91%E9%A6%96%E9%81%B8%EF%BC%95%E7%A8%AE%E5%9C%A8%E5%AE%B6%E5%8F%AF%E4%BB%A5%E5%81%9A%E7%9A%84%E9%81%8B%E5%8B%95%20%E8%AE%93%E4%BD%A0%E6%8F%90%E5%8D%87%E8%82%8C%E8%80%90%E5%8A%9B%E5%8F%88%E8%83%BD%E7%87%83%E7%87%92%E8%84%82%E8%82%AA%EF%BC%81",
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        name: "怎麼跑贏麥昆!!!",
        description: "This is a project description. " + random_text(64),
        image: "https://i.imgur.com/WqSFU9M.png",
        link: "https://github.com",
        tags: ["tag1", "tag2", "tag3"],
    },
];

const step = ref(0);
let interval = -1;

watch(step, () => {
    if (step.value > 0 && interval === -1) {
        interval = window.setInterval(() => {
            step.value++;
            if (step.value >= projects.length) {
                window.clearInterval(interval);
            }
        }, 200);
    }
});
</script>
<template>
    <div class="h-full w-full px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="My Projects"
            class="block text-2xl sm:text-3xl lg:text-4xl"
        />
        <div class="py-2">
            <div v-for="(project, index) in projects">
                <Fade>
                    <Project
                        v-if="step >= index + 1"
                        :key="index"
                        class="my-2 w-full rounded-md bg-white bg-opacity-50 p-4 shadow-md shadow-indigo-200"
                        :name="project.name"
                        :description="project.description"
                        :image="project.image"
                        :link="project.link"
                        :tags="project.tags"
                    />
                </Fade>
            </div>
        </div>
    </div>
</template>
