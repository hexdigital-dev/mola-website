<template>
    <transition name="fade">
        <div
            v-show="isVisible"
            class="v-video-overlay"
        >
            <div class="v-video-overlay__background" />
            <div class="v-video-overlay__content">
                <div class="v-video-overlay__content-inner">
                    <AspectMedia
                        ratio="16:9"
                    >
                        <VideoWrapper
                            :src="src"
                            :should-play="isVisible"
                            :should-mute="false"
                        />
                    </AspectMedia>
                </div>
            </div>
            <div class="v-video-overlay__close">
                <BaseControl
                    @controlClicked="closeOverlay"
                >
                    <template v-slot:indicator>
                        <Icon name="cross" />
                    </template>
                    <template v-slot:info>
                        <span class="u-bold u-text--base">Close</span>
                    </template>
                </BaseControl>
            </div>
        </div>
    </transition>
</template>

<script>
import VideoWrapper from './VideoWrapper';
import AspectMedia from './AspectMedia';
import BaseControl from './BaseControl';
import Icon from './Icon';

export default {
    components: {
        VideoWrapper,
        AspectMedia,
        BaseControl,
        Icon,
    },
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    computed: {
        isVisible() {
            return this.$store.state.settings.showVideoOverlay;
        },
    },
    methods: {
        closeOverlay() {
            this.$store.commit('settings/toggleVideoOverlay');
        },
    },
};
</script>

<style lang="scss">
.v-video-overlay {
    // transform: translate3d(0, 0, 0);
    will-change: opacity;

    &__background,
    &__close {
        left: 0;
        position: absolute;
        top: 0;
    }

    &__background {
        background-color: color('video-overlay-background-primary');
        height: 100vh;
        width: 100vw;
    }

    &__content {
        height: 90vh;
        left: 5vw;
        padding: $inuit-global-spacing-unit-large;
        position: absolute;
        top: 5vh;
        width: 90vw;
    }

    &__close {
        left: $inuit-global-spacing-unit-large;
        top: $inuit-global-spacing-unit-large;
    }

    &__content-inner {
        height: 100%;
    }
}

// Fade in transition

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
