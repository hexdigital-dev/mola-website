<template>
    <div>
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '~/components/Footer';

export default {
    components: {
        Footer,
    },
    data() {
        return {
            foo: '123',
        };
    },
};
</script>
