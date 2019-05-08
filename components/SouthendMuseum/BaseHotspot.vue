<template>
    <div
        class="v-hotspot"
        @click="handleClick"
    >
        <div class="v-hotspot__inner">
            <span class="v-hotspot__icon">
                <slot />
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            expandOut: false,
            audio: new Audio('audio/click.wav'),
        };
    },
    methods: {
        handleClick() {
            this.audio.play();
            this.$emit('hotspotClicked');
            this.expandOut = !this.expandOut;
        },
    },
};
</script>

<style lang="scss">
$_hotspot-base-size: 64px;

.v-hotspot {
    animation: pulse 2s infinite;
    background-color: color('hotspot-background-primary');
    border-radius: $_hotspot-base-size;
    cursor: pointer;
    display: block;
    height: $_hotspot-base-size;
    position: relative;
    user-select: none;
    width: $_hotspot-base-size;

    &__icon {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

}

@keyframes pulse {

    0% {
        box-shadow: 0 0 0 0 rgba(color('hotspot-background-primary'), .8);
    }

    70% {
        box-shadow: 0 0 0 20px rgba(color('hotspot-background-primary'), 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(color('hotspot-background-primary'), 0);
    }
}

</style>
