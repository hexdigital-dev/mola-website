<template>
    <article class="o-wrapper o-wrapper--vertical-padding">
        <div class="o-layout">
            <div class="o-layout__item u-1/2">
                <header>
                    <h1
                        v-if="item && item.title"
                        class="u-title c-heading u-text--large u-margin-bottom"
                    >
                        {{ item.title }}
                    </h1>
                </header>
                <main>
                    <div
                        v-if="item && item.content && item.content.text"
                        class="v-text-content"
                    >
                        <CopyContent
                            v-for="(textItem, index) in item.content.text"
                            :key="index"
                            :tag="textItem.tag"
                            base-classes="u-content u-text--base u-margin-bottom-small"
                        >
                            {{ textItem.text }}
                        </CopyContent>
                    </div>
                </main>
            </div>
            <div class="o-layout__item u-1/2">
                <aside class="u-margin-bottom">
                    <CarouselWrapper
                        v-if="item && item.content && item.content.carousel"
                        :items="item.content.carousel"
                    />
                </aside>
                <footer>
                    <ActionButton
                        v-if="item.content.video"
                        :is-full-width="true"
                        icon="play"
                        size="large"
                        @actionClicked="openVideoOverlay"
                    >
                        Watch video
                    </ActionButton>
                </footer>
            </div>
        </div>
        <VideoOverlay
            v-if="item.content.video"
            :src="item.content.video.src"
        />
    </article>
</template>
<script>
import { mapMutations } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import CarouselWrapper from '~/components/SouthendMuseum/CarouselWrapper';
import CopyContent from '~/components/SouthendMuseum/CopyContent';
import VideoOverlay from '~/components/SouthendMuseum/VideoOverlay';
import ActionButton from '~/components/SouthendMuseum/ActionButton';

export default {
    layout: 'content',
    components: {
        CarouselWrapper,
        VideoOverlay,
        ActionButton,
        CopyContent,
    },
    data() {
        return {
            item: null,
        };
    },
    asyncData(context) {
        const itemData = context.store.getters.getContentById(context.params.item);
        return {
            item: itemData,
        };
    },
    mounted() {
        this.toggleToppanel(true);
    },
    beforeDestroy() {
        this.toggleToppanel(false);
    },
    methods: {
        openVideoOverlay() {
            this.$store.commit('settings/toggleVideoOverlay');
        },
        ...mapMutations({
            toggleToppanel: 'settings/toggleToppanel',
        }),
    },
};
</script>
<style lang="scss">
.v-text-content {
    max-height: 700px;
    overflow-y: scroll;
    padding-bottom: $inuit-global-spacing-unit;
}

.v-text-content::-webkit-scrollbar {
    width: 0 !important;
}
</style>
