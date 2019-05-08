<template>
    <a
        :href="href"
        class="buttons-href"
        @click="clickBtn($event)"
    >
        <div class="button-wrapper">
            <div
                v-if="!background"
                class="button"
            >
                <div class="text">
                    {{ text }}
                </div>
            </div>
            <div
                v-if="background"
                class="button"
                :style="`background-image: url(${img.goldBackground});`"
            >
                <div class="text">
                    {{ text }}
                </div>
            </div>
        </div>
    </a>
</template>
<script>

const goldBackground = require('~/assets/img/bg-button-gold.png');

export default {
    props: {
        href: {
            type: String,
            default: () => '/',
        },
        text: {
            type: String,
            default: () => 'Click',
        },
        background: {
            type: Boolean,
            default: true,
        },
        to: {
            type: String,
            default: '',
        },
        scroll: {
            type: String,
            default: '',
        },

    },
    data() {
        return {
            img: {
                goldBackground,
            },
        };
    },
    methods: {
        clickBtn(event) {
            if (this.to) {
                event.preventDefault();
                this.$router.push(this.to);
            }

            if (this.scroll) {
                event.preventDefault();
                this.$scrollTo(this.scroll, 600);
            }
        },
    },
};
</script>
