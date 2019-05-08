<template>
    <div
        class="button-top"
        @click="scrollTop"
    >
        <div class="icon-up" />
        <div class="text">
            Back to Top
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {};
    },
    methods: {
        scrollTop() {
            this.$scrollTo('body', 600, {
                offset: 0,
            });
        },
    },
};
</script>
