<template>
    <span
        class="v-toggle"
        :class="{'v-toggle--active': isActive}"
        @click="handleToggleClick"
    >
        <span class="v-toggle__slider" />
    </span>
</template>
<script>
export default {
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleToggleClick() {
            this.$emit('toggleClicked');
        },
    },
};
</script>

<style lang="scss">
$_toggle-track-width: 26px;
$_toggle-track-height: 44px;
$_toggle-slider-size: 18px;
$_toggle-slider-padding: 4px;
$_toggle-slider-travel-distance: $_toggle-slider-size;
$_toggle-slider-border-radius: $_toggle-slider-size;
$_toggle-track-border-radius: $_toggle-slider-size + ($_toggle-slider-padding * 2);

.v-toggle {
    background-color: color('toggle-background-primary');
    border-radius: $_toggle-track-border-radius;
    cursor: pointer;
    display: block;
    height: $_toggle-track-height;
    position: relative;
    width: $_toggle-track-width;

    &__slider {
        background-color: color('toggle-slider-color-primary');
        border-radius: $_toggle-slider-size;
        display: block;
        height: $_toggle-slider-size;
        left: $_toggle-slider-padding;
        position: absolute;
        top: $_toggle-slider-padding;
        transition-duration: .2s;
        transition-property: transform, background-color;
        width: $_toggle-slider-size;
    }

    &--active {

        .v-toggle__slider {
            background-color: color('toggle-slider-color-active-primary');
            transform: translateY($_toggle-slider-travel-distance);
        }

    }

}
</style>
