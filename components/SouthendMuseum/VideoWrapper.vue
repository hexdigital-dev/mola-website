<template>
    <video
        v-if="shouldMute"
        ref="videoPlayer"
        muted
        :src="src"
        loop
    />
    <video
        v-else
        ref="videoPlayer"
        :src="src"
        loop
    />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        shouldPlay: {
            type: Boolean,
            default: false,
        },
        shouldMute: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            playerReady: false,
        };
    },
    watch: {
        shouldPlay() {
            if (this.shouldPlay && this.playerReady) {
                this.$refs.videoPlayer.play();
                this.$emit('videoPlaying');
            } else {
                this.$refs.videoPlayer.pause();
                this.$emit('videoPaused');
            }
        },
    },
    mounted() {
        this.playerReady = true;
        if (this.shouldPlay) {
            this.$nextTick(() => {
                this.$refs.videoPlayer.play();
            });
        }
    },
};
</script>
