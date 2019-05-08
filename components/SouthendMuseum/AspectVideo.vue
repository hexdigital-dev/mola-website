<template>
    <video
        autoplay
        loop
        :src="videoPath"
    />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        }
    },
    computed: {
        videoPath() {
            return require('~/assets/videos/' + this.src + '.mp4');
        },
    },
};
</script>
