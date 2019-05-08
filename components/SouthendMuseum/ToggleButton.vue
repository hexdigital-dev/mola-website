<template>
    <div
        class="v-toggle-button"
        :class="{'v-toggle-button--inactive': !isActive}"
    >
        <BaseControl
            @controlClicked="handleToggle"
        >
            <template v-slot:indicator>
                <BaseToggleSwitch
                    :is-active="isActive"
                />
            </template>
            <template v-slot:info>
                <span class="v-toggle-button__text">
                    <slot />
                </span>
            </template>
        </BaseControl>
    </div>
</template>
<script>
import BaseToggleSwitch from './BaseToggleSwitch';
import BaseControl from './BaseControl';

export default {
    components: {
        BaseToggleSwitch,
        BaseControl,
    },
    props: {
        initiallyActive: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isActive: this.initiallyActive,
        };
    },
    methods: {
        handleToggle() {
            this.$emit('toggleButtonClicked');
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style lang="scss">

.v-toggle-button {
    cursor: pointer;
    user-select: none;

    &__text {
        transition-duration: .2s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    // State variations

    &--inactive {

        .v-toggle-button__text {
            opacity: .2;
        }

    }

}

</style>
