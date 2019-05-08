<template>
    <div @click="userInteraction">
        <TheTopPanel
            close-to="/chamber"
        />
        <Nuxt />
    </div>
</template>
<script>
import TheTopPanel from '~/components/SouthendMuseum/TheTopPanel';
import interactions from '~/mixins/interactions';

export default {
    components: {
        TheTopPanel,
    },
    mixins: [interactions],
};
</script>
