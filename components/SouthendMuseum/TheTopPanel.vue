<template>
    <transition name="slide-down">
        <div
            v-show="showToppanel"
            class="v-top-panel"
        >
            <div class="o-wrapper">
                <div class="v-top-panel__control">
                    <BaseControl
                        @controlClicked="closeContent"
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
        </div>
    </transition>
</template>

<script>
import BaseControl from './BaseControl';
import Icon from './Icon';

export default {
    components: {
        BaseControl,
        Icon,
    },
    props: {
        closeTo: {
            required: true,
            type: String,
        },
    },
    computed: {
        showToppanel() {
            return this.$store.state.settings.showToppanel;
        },
    },
    methods: {
        closeContent() {
            this.$router.push(this.closeTo);
        },
    },
};
</script>

<style lang="scss">
.v-top-panel {
    border-bottom: 1px solid color('rule-primary');
    padding: $inuit-global-spacing-unit-large 0;
    width: 100%;
}
</style>
