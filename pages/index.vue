<template>
    <section class="page page_front">
        <Hero />
        <FullLine />
        <Post />
        <FullLine />
        <PostTwo />
        <FullLine />
        <Enter />
        <FullLine />
    </section>
</template>
<script>
import Hero from '~/components/Hero';
import Post from '~/components/Post';
import PostTwo from '~/components/PostTwo';
import FullLine from '~/components/FullLine';
import Enter from '~/components/Enter';

export default {
    components: {
        Hero,
        Post,
        PostTwo,
        FullLine,
        Enter,
    },
    data() {
        return {
        };
    },
    mounted() {
    },
};
</script>
