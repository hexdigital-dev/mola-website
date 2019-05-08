<template>
    <BaseButton
        :is-full-width="isFullWidth"
        :icon="icon"
        :size="size"
        @buttonClicked="routeUser"
    >
        <slot />
    </BaseButton>
</template>

<script>
import BaseButton from './BaseButton';
import buttonMixin from '~/mixins/buttons';

export default {
    components: {
        BaseButton,
    },
    mixins: [buttonMixin],
    props: {
        to: {
            type: String,
            required: true,
        },
    },
    methods: {
        routeUser(delay = 0) {
            setTimeout(() => {
                this.$router.push(this.to);
            }, delay);
        },
    },
};
</script>
