<template>
    <div class="post">
        <div class="main-container">
            <div class="content">
                <h3 :style="styleTitle">
                    DISCOVERING <br>THE BURIAL
                </h3>
                <p>
                    In 2003 archaeologists from
                    <a href="http://www.mola.org.uk">MOLA</a>
                    excavated a small
                    plot of land in Prittlewell, Essex, for
                    <a href="https://www.southend.gov.uk">Southend-on-Sea Borough Council</a>.
                    They were astounded to discover
                    an intact Anglo-Saxon burial chamber.
                </p>
                <p>
                    Careful excavation revealed
                    a collection of rare and precious
                    objects that had been placed within
                    a rectangular timber structure as
                    part of a carefully choreographed
                    burial rite. The artefacts, including
                    an elaborate gold belt buckle
                    made specially for the burial,
                    show this to be the resting
                    place of a man of princely lineage.
                    The crosses over his eyes indicate
                    he was a Christian, a flagon from
                    Syria speaks of his worldly connections,
                    cauldrons and drinking horns suggest a man
                    accustomed to hosting feasts and a musical
                    instrument provides insight into the
                    traditions and pastimes of this
                    lordly figure.
                </p>
                <p>
                    The chamber’s most impressive items are
                    now on permanent display at Southend
                    Central Museum.
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
                    imgNum: 0,
                    text: 'Archaeologist excavating the Prittlewell princely burial',
                },
                {
                    imgNum: 1,
                    text: 'Gold crosses believed to have been placed over the man\'s eyes',
                },
                {
                    imgNum: 2,
                    text: 'The top of a wooden drinking bottles with decorated gold neck in-situ',
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
