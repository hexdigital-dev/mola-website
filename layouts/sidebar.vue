<template>
    <div
        class="o-layout o-layout--flush"
        @click="userInteraction"
    >
        <aside class="o-layout__item u-1/4">
            <TheSidebar />
        </aside>
        <main class="o-layout__item u-3/4">
            <Nuxt />
        </main>
    </div>
</template>
<script>
import TheSidebar from '~/components/SouthendMuseum/TheSidebar';
import interactions from '~/mixins/interactions';

export default {
    components: {
        TheSidebar,
    },
    mixins: [interactions],
};
</script>
