<template>
    <div class="header">
        <div class="main-container wide">
            <a
                href="https://www.mola.org.uk/"
                class="header__logo-wrapper"
            >
                <div
                    class="header__logo"
                    :style="`background-image: url(${img.logoImg});`"
                />
            </a>
        </div>
        <full-line />
    </div>
</template>
<script>
import FullLine from './FullLine';

const logoImg = require('~/assets/img/logos/mola-big.png');

export default {
    components: {
        FullLine,
    },
    data() {
        return {
            img: {
                logoImg,
            },
        };
    },
};
</script>
