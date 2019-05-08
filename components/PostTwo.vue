<template>
    <div class="post row-reverse">
        <div class="main-container">
            <div class="content">
                <h3 :style="styleTitle">
                    REVEALING THE<br>CHAMBER’S SECRETS
                </h3>
                <p>
                    Many of the chamber’s secrets lay concealed
                    beneath centuries of corrosion and soil,
                    only to be revealed as conservators and
                    archaeological specialists began their
                    meticulous work.
                </p>
                <p>
                    The research was undertaken by a
                    team of over 40 experts in a range of specialisms,
                    including Anglo-Saxon artefacts and art, ancient
                    musical instruments and woodworking, engineering,
                    soil science and scientific dating. The team left
                    no stone unturned, using a range of techniques –
                    from soil micromorphology and CT scans to Raman
                    spectroscopy, scanning electron microscopy
                    and mass spectrometry – in their quest to
                    reconstruct and understand the chamber as
                    it would have been on the day of the funeral.
                </p>
                <p>
                    The research has uncovered hitherto
                    unidentified and unique artefacts,
                    and details about the man buried.
                    Led by archaeological experts from
                    <a
                        href="http://www.mola.org.uk"
                        target="_blank"
                    >
                        MOLA</a>,
                    the work was funded by
                    <a
                        href="https://www.southend.gov.uk"
                        target="_blank"
                    >
                        Southend-on-Sea Borough Council</a>
                    and
                    <a
                        href=""
                        target="_blank"
                    >
                        Historic England</a>.
                    The full research is published
                    and available to buy at
                    <a
                        href="https://www.mola.org.uk/publications"
                        target="_blank"
                        style="word-break: break-all;"
                    >
                        www.mola.org.uk/publications</a>.
                </p>
                <short-line />
            </div>
            <div class="gallery">
                <PopUp
                    v-for="block in gallery"
                    :key="block.id"
                    :img-num="block.imgNum"
                    :text="block.text"
                />
            </div>
        </div>
    </div>
</template>
<script>
import PopUp from './PopUp';
import ShortLine from './ShortLine';

const bgTitle = require('~/assets/img/bg-title-gold.jpg');

export default {
    components: {
        PopUp,
        ShortLine,
    },
    data() {
        return {
            gallery: [
                {
                    imgNum: 3,
                    text: 'MOLA conservator working on a hanging bowl',
                },
                {
                    imgNum: 4,
                    text: 'A reconstruction of the Anglo-Saxon lyre with original fittings in silver (left) and in gilded copper-alloy with a garnet inlay',
                },
                {
                    imgNum: 5,
                    text: 'An expert in mineral-preserved wood examining remains from the chamber',
                },
            ],
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
