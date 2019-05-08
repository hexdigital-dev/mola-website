<template>
    <div
        class="o-ratio"
        :class="{[`o-ratio--${ratio}`]: ratio}"
        :style="{maxHeight: maxHeight}"
    >
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        ratio: {
            required: true,
            type: String,
        },
        maxHeight: {
            default: '100%',
            type: String,
        },
    },
};
</script>
