<template>
    <div
        class="button-scroll"
        @click="scrollDown"
    >
        <div class="icon-down" />
        <div class="text">
            Scroll
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        scrollDown() {
            this.$scrollTo('body', 600, {
                offset: window.innerHeight - (window.innerHeight / 50),
            });
        },
    },
};
</script>
