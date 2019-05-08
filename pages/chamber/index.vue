<template>
    <div
        class="v-chamber"
        :class="{ 'v-chamber--hide-hotspots': hideHotspots }"
    >
        <div
            v-for="(item, index) in items"
            :key="index"
            :style="{
                left: item.hotspot.x,
                top: item.hotspot.y,
                transitionDelay: index * 0.1 + 's'
            }"
            class="v-chamber__hotspot"
        >
            <transition name="fade">
                <div v-show="chamberLoaded">
                    <nuxt-link :to="`/chamber/${item.id}`">
                        <BaseHotspot>
                            <Icon
                                name="plus"
                            />
                        </BaseHotspot>
                    </nuxt-link>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <img
                v-show="chamberLoaded"
                ref="chamberImg"
                class="v-chamber__background"
                src="/img/chamber.jpg"
                alt="Prittlewell Princely Burial"
            >
        </transition>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import BaseHotspot from '~/components/SouthendMuseum/BaseHotspot';
import Icon from '~/components/SouthendMuseum/Icon';

export default {
    layout: 'sidebar',
    components: {
        BaseHotspot,
        Icon,
    },
    data() {
        return {
            items: null,
            chamberLoaded: false,
        };
    },
    computed: {
        hideHotspots() {
            return this.$store.state.settings.hideHotspots;
        },
    },
    asyncData(context) {
        return {
            items: context.store.getters.getContent,
        };
    },
    mounted() {
        this.$refs.chamberImg.onload = () => {
            this.chamberLoaded = true;
            this.toggleSidebar(true);
        };
    },
    beforeDestroy() {
        this.toggleSidebar(false);
    },
    methods: {
        ...mapMutations({
            toggleSidebar: 'settings/toggleSidebar',
        }),
    },
};
</script>

<style lang="scss">
.v-chamber {
    height: 100vh;
    position: relative;
    width: 100%;

    &__background {
        display: block;
        height: 100%;
        left: 0;
        object-fit: contain;
        position: absolute;
        top: 0;
        transform: translate3d(0, 0, 0);
        width: 100%;
        will-change: opacity;
        z-index: 5;
    }

    &__hotspot {
        position: absolute;
        transition-duration: .3s;
        transition-property: opacity;
        transition-timing-function: ease;
        z-index: 10;
    }

    // Visability variations

    &--hide-hotspots {

        .v-chamber__hotspot {
            opacity: 0;
        }

    }

}
</style>
