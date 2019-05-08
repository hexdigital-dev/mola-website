<template>
    <div
        class="o-ratio"
        :class="{[`o-ratio--${ratio}`]: ratio}"
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
    },
};
</script>
