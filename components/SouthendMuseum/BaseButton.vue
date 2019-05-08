<template>
    <span
        class="v-btn"
        :class="[
            {'v-btn--active': isButtonActive},
            {'v-btn--block': isFullWidth},
            {[`v-btn--${size}`]: size}
        ]"
        @click="handleButtonClick"
    >
        <span class="v-btn__inner">
            <span
                v-if="icon"
                class="v-btn__icon"
            >
                <Icon
                    :name="icon"
                />
            </span>
            <span class="v-btn__text">
                <slot />
            </span>
        </span>
    </span>
</template>
<script>
import Icon from './Icon';
import buttonMixin from '~/mixins/buttons';

export default {
    components: {
        Icon,
    },
    mixins: [buttonMixin],
    data() {
        return {
            isButtonActive: false,
            audio: new Audio('~/static/audio/click.wav'),
            animationDuration: 400, // This must match the time set in --active in below styles
        };
    },
    watch: {
        isButtonActive() {
            if (this.isButtonActive) {
                setTimeout(() => {
                    this.isButtonActive = false;
                }, this.animationDuration);
            }
        },
    },
    methods: {
        handleButtonClick() {
            this.audio.play();
            this.$emit('buttonClicked', this.animationDuration);
            this.isButtonActive = true;
        },
    },
};
</script>

<style lang="scss">
$_btn-border-radius: 5px;
$_btn-font-size: 22px;
$_btn-font-weight: 700;

.v-btn {
    @include text-styles('button');
    background-color: color('button-background-primary');
    border-radius: $_btn-border-radius;
    border-width: 0;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, .5);
    color: color('button-text-primary');
    cursor: pointer;
    display: inline-block;
    font-weight: $_btn-font-weight;
    outline: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: .2s, .1s;
    transition-property: background-color, box-shadow;
    user-select: none;

    &:focus {
        background-color: color('button-background-active-primary');
    }

    &:before {
        background-color: color('button-background-active-primary');
        border-radius: 100%;
        content: '';
        display: block;
        left: 50%;
        padding-top: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0;
    }

    &--active {
        box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0);

        &:before {
            padding-top: 120%;
            transition: width .4s ease-out, padding-top .4s ease-out;
            width: 120%;
        }

    }

    &__inner {
        display: flex;
        justify-content: center;
        padding: $inuit-global-spacing-unit;
        position: relative;
        text-align: center;
    }

    &__text {
        color: inherit;
        text-align: center;
        text-decoration: none;
    }

    &__icon {
        padding-right: $inuit-global-spacing-unit-small;
    }

    // Size Variations

    &--block {
        display: block;
        width: 100%;
    }

    &--large {
        @include text-styles('button-large');
    }

}
</style>
