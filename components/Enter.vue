<template>
    <div class="enter">
        <div class="main-container">
            <h3 :style="styleTitle">
                ready to enter?
            </h3>
            <Button
                href="/"
                text="enter the chamber"
            />
        </div>
    </div>
</template>
<script>
import Button from './Button';

const bgTitle = require('~/assets/img/bg-title-gold.jpg');

export default {
    components: {
        Button,
    },
    data() {
        return {
            isBrowserWebkit: true,
            bgTitle,
        };
    },
    computed: {
        styleTitle() {
            if (this.isBrowserWebkit) {
                return {
                    background: `url(${this.bgTitle}) no-repeat center center`,
                    '-webkit-background-clip': 'text',
                    'background-size': 'cover',
                    '-webkit-text-fill-color': 'transparent',
                };
            } return false;
        },
    },
    mounted() {
        if (navigator.userAgent.search(/NET CLR /) > 0) {
            this.isBrowserWebkit = false;
        }
    },
};
</script>
