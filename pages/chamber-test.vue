<template>
    <section class="page page_front">
        <div
            v-if="landscape"
            class="turn"
        >
            <img
                class="turn__image"
                :src="turnImg"
            >
            <p>
                Please rotate your phone to landscape to view the chamber.
            </p>
        </div>
    </section>
</template>
<script>

const turnImg = require('~/assets/img/turn.png');

export default {
    components: {
    },
    data() {
        return {
            landscape: false,
            turnImg,
        };
    },
    computed: {
        width() {
            return document.documentElement.clientWidth;
        },
    },
    watch: {
        fullWidth() {
            return document.documentElement.clientWidth;
        },
    },
    mounted() {
        this.changeWidth(this.fullWidth);
    },
    methods: {
        changeWidth(width) {
            if (width <= 864) {
                this.landscape = true;
            } else {
                this.landscape = false;
            }
        },
    },

};
</script>
