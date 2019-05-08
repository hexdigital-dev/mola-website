<template>
    <div @click="userInteraction">
        <nuxt />
    </div>
</template>
<script>
import interactions from '~/mixins/interactions';

export default {
    mixins: [interactions],
};
</script>
