<template>
    <div
        class="pop-up"
    >
        <div
            class="image"
            :style="`background-image: url(${img[imgNum]});`"
            @click="popClick"
        >
            <div class="pop-up__circle-plus" />
        </div>
        <div
            class="text"
            @click="popClick"
        >
            {{ text }}
        </div>
        <transition name="uplift">
            <div
                v-if="clickFlag"
                class="pop-up__over"
            >
                <div class="background" />
                <img
                    :src="img[imgNum]"
                    class="image"
                >
                <div
                    class="over__cross"
                    @click="popClick"
                />
            </div>
        </transition>
    </div>
</template>
<script>

const image01 = require('~/assets/img/posts/001.jpg');
const image02 = require('~/assets/img/posts/002.jpg');
const image03 = require('~/assets/img/posts/003.jpg');
const image04 = require('~/assets/img/posts/004.jpg');
const image05 = require('~/assets/img/posts/005.jpg');
const image06 = require('~/assets/img/posts/006.jpg');

export default {
    props: {
        imgNum: {
            type: Number,
            default: 0,
        },
        text: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            img: [
                image01,
                image02,
                image03,
                image04,
                image05,
                image06,
            ],
            clickFlag: false,
        };
    },
    methods: {
        popClick() {
            this.clickFlag = !this.clickFlag;
        },
    },
};
</script>
