<template>
    <div
        class="hero"
        :class="{'hero--loaded': heroMounted}"
    >
        <transition name="fade">
            <img
                v-show="heroMounted"
                alt=""
                class="hero__image"
                :src="img.bgImg"
            >
        </transition>
        <div class="hero__content">
            <Header />
            <div class="hero__bottom">
                <transition name="fade">
                    <div v-show="heroMounted">
                        <div class="bg-text">
                            <h1
                                :style="styleTitle"
                            >
                                PRITTLEWELL
                            </h1>
                            <h2
                                :style="styleTitle"
                            >
                                PRINCELY BURIAL
                            </h2>
                        </div>
                        <div class="description">
                            Archaeologists discovered an extraordinary
                            Anglo-Saxon princely burial in Prittlewell
                            in 2003, but many of its secrets remained
                            hidden, only to be revealed as experts
                            began their painstaking research.
                        </div>
                        <div class="buttons">
                            <Button
                                scroll=".post"
                                href="##"
                                text="Discover more"
                            />
                            <Button
                                to="/museum"
                                text="Enter The Chamber"
                                :background="false"
                            />
                        </div>
                        <button-scroll />
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header';
import Button from './Button';
import ButtonScroll from './ButtonScroll';

const bgImg = require('~/assets/img/chamber-hero.jpg');
const bgTitle = require('~/assets/img/bg-title-gold.jpg');

export default {
    components: {
        Header,
        Button,
        ButtonScroll,
    },
    data() {
        return {
            img: {
                bgImg,
                bgTitle,
            },
            isBrowserWebkit: true,
            heroMounted: false,
        };
    },
    computed: {
        styleTitle() {
            if (this.isBrowserWebkit) {
                return {
                    background: `url(${this.img.bgTitle}) no-repeat center center`,
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
        this.heroMounted = true;
    },
};
</script>
