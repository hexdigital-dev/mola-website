<template>
    <p
        v-if="tag === 'strong'"
        :class="baseClasses"
    >
        <strong>
            <slot />
        </strong>
    </p>
    <p
        v-else
        :class="baseClasses"
    >
        <slot />
    </p>
</template>
<script>

export default {
    props: {
        baseClasses: {
            type: String,
            default: '',
        },
        tag: {
            type: String,
            default: 'p',
        },
    },
};
</script>
