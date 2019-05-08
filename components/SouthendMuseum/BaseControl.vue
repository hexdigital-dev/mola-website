<template>
    <div
        class="v-base-control o-media o-media--middle"
        @click="handleControlCLick"
    >
        <div class="o-media__head">
            <slot name="indicator" />
        </div>
        <div class="o-media__body">
            <slot name="info" />
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        handleControlCLick() {
            this.$emit('controlClicked');
        },
    },
};
</script>

<style lang="scss">
.v-base-control {
    cursor: pointer;
}
</style>
