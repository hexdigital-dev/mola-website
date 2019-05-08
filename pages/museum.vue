<template>
    <div class="v-embed">
        <div class="v-embed__overlay">
            <span class="v-embed__overlay-text">Please rotate your<br>device to landscape</span>
        </div>
        <iframe
            src="https://southend-interactive-display.netlify.com/"
            frameborder="0"
            class="frame"
        />
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: 'MOLA | Prittlewell Princely Burial',
            meta: [
                { hid: 'description', name: 'description', content: 'Archaeologists discovered an extraordinary Anglo-Saxon princely burial in Prittlewell in 2003, but many of its secrets remained hidden, only to be revealed as experts began their painstaking research.' },
            ],
        };
    },
};
</script>
<style lang="scss">

$_embed-scales: (
    null: .3,
    '1000px': .5,
    '1200px': .6,
    '1360px': .7
);

.v-embed {
    background-color: color('background-primary');
    height: 100vh;
    overflow: hidden;
    position: relative;
    width: 100vw;

    &__overlay {
        @include text-styles('big');
        align-items: center;
        background-color: rgba(color('brand-primary'), .9);
        display: none;
        height: 100%;
        justify-content: center;
        position: absolute;
        width: 100%;
        z-index: 999;

        @media only screen and (orientation: portrait) {
            display: flex;
        }
    }

    &__overlay-text {
        text-align: center;
    }

    iframe {
        $_default-scale: map-get($_embed-scales, null);
        height: 1080px;
        left: 50%;
        position: relative;
        top: 50%;
        -webkit-transform: scale(#{$_default-scale}) translate(-50%, -50%);
        -o-transform: scale(#{$_default-scale}) translate(-50%, -50%);
        -ms-transform: scale(#{$_default-scale}) translate(-50%, -50%);
        -moz-transform: scale(#{$_default-scale}) translate(-50%, -50%);
        transform: scale(#{$_default-scale}) translate(-50%, -50%);
        -webkit-transform-origin: top left;
        -o-transform-origin: top left;
        -ms-transform-origin: top left;
        -moz-transform-origin: top left;
        transform-origin: top left;
        width: 1920px;

        @each $_min-breakpoint, $_scale in $_embed-scales {

            @if ($_min-breakpoint != null) {

                @media only screen and (min-width: #{$_min-breakpoint}) {
                    -webkit-transform: scale(#{$_scale}) translate(-50%, -50%);
                    -o-transform: scale(#{$_scale}) translate(-50%, -50%);
                    -ms-transform: scale(#{$_scale}) translate(-50%, -50%);
                    -moz-transform: scale(#{$_scale}) translate(-50%, -50%);
                    transform: scale(#{$_scale}) translate(-50%, -50%);
                }

            }

        }

    }
}
</style>
