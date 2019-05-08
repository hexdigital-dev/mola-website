<template>
    <BaseButton
        :is-full-width="isFullWidth"
        :icon="icon"
        :size="size"
        @buttonClicked="doAction"
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
    methods: {
        doAction(delay = 0) {
            setTimeout(() => {
                this.$emit('actionClicked');
            }, delay);
        },
    },
};
</script>
