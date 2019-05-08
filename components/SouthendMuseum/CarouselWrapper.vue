<template>
    <div class="v-carousel">
        <div
            v-if="items.length > 1"
            class="v-carousel__information"
        >
            <div class="o-media o-media--middle">
                <div class="o-media__head">
                    <Icon
                        name="swipe"
                    />
                </div>
                <div class="o-media__body">
                    <span class="u-content u-text--base">Swipe for more information</span>
                </div>
            </div>
        </div>
        <Carousel
            :per-page="1"
            pagination-position="top"
        >
            <Slide
                v-for="(item, index) in items"
                :key="index"
            >
                <div class="u-margin-bottom">
                    <AspectImage
                        ratio="16:9"
                    >
                        <img
                            :src="item.src"
                            :alt="item.alt"
                        >
                    </AspectImage>
                </div>
                <span
                    v-if="item.caption"
                    class="u-content u-text--base u-italic"
                >
                    {{ item.caption }}
                </span>
            </Slide>
        </Carousel>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import AspectImage from './AspectImage';
import Icon from './Icon';

export default {
    components: {
        Carousel,
        Slide,
        AspectImage,
        Icon,
    },
    props: {
        items: {
            required: true,
            type: Array,
        },
    },
};
</script>

<style lang="scss">
$_pagination-spacing: $inuit-global-spacing-unit-tiny;

.v-carousel {
    position: relative;

    &__information {
        position: absolute;
        right: 0;
        top: 0;
    }

    .VueCarousel {

        .VueCarousel-pagination {
            height: 96px;
            position: relative;
        }

        .VueCarousel-dot-container {
            left: -$_pagination-spacing;
            margin-top: 0 !important;
            position: absolute;
            top: 0;
        }

        .VueCarousel-dot {
            background-color: color('carousel-dot-background-primary') !important;
            padding: 0 $_pagination-spacing !important;

            &--active {
                background-color: color('carousel-dot-background-active-primary') !important;
            }

        }

    }

}
</style>
