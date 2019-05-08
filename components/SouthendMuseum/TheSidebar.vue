<template>
    <transition name="slide-right">
        <div
            v-show="showSidebar"
            class="v-sidebar"
        >
            <header class="v-sidebar__head">
                <Logo />
            </header>
            <footer class="v-sidebar__controls">
                <div class="v-sidebar__control">
                    <BaseControl>
                        <template v-slot:indicator>
                            <Icon name="tap" />
                        </template>
                        <template v-slot:info>
                            <span class="u-text--base">
                                Find out more information by tapping an item.
                            </span>
                        </template>
                    </BaseControl>
                </div>
                <div class="v-sidebar__control">
                    <ToggleButton
                        :initially-active="true"
                        @toggleButtonClicked="toggleHotspots"
                    >
                        <span class="u-bold u-text--base">
                            {{ hotspotControlText }}
                        </span>
                    </ToggleButton>
                </div>
                <div class="v-sidebar__control">
                    <LinkButton
                        :is-full-width="true"
                        icon="bent-arrow"
                        to="/museum"
                    >
                        Start Again
                    </LinkButton>
                </div>
            </footer>
        </div>
    </transition>
</template>

<script>
import { mapMutations } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import BaseControl from './BaseControl';
import LinkButton from './LinkButton';
import ToggleButton from './ToggleButton';
import Icon from './Icon';
import Logo from './Logo';

export default {
    components: {
        BaseControl,
        LinkButton,
        ToggleButton,
        Icon,
        Logo,
    },
    computed: {
        hotspotControlText() {
            return (this.$store.state.settings.hideHotspots)
                ? 'Show Hotspots'
                : 'Hide Hotspots';
        },
        showSidebar() {
            return this.$store.state.settings.showSidebar;
        },
    },
    methods: {
        ...mapMutations({
            toggleHotspots: 'settings/toggleHotspots',
        }),
    },
};
</script>

<style lang="scss">
.v-sidebar {
    background-color: color('background-secondary');
    border-right: 1px solid color('rule-primary');
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    // transform: translate3d(0, 0, 0);
    // will-change: opacity;

    &__head {
        padding: $inuit-global-spacing-unit-large;
    }

    &__control {
        border-top: 1px solid color('rule-primary');
        padding: $inuit-global-spacing-unit-large;

        &:first-child {
            border-top: none;
        }

    }

}
</style>
