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
    head() {
        return {
            title: 'MOLA | Prittlewell Princely Burial',
            meta: [
                { hid: 'description', name: 'description', content: 'Archaeologists discovered an extraordinary Anglo-Saxon princely burial in Prittlewell in 2003, but many of its secrets remained hidden, only to be revealed as experts began their painstaking research.' },
            ],
        };
    },
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
