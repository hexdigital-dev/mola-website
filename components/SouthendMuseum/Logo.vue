<template>
    <div
        class="c-logo"
        :class="[
            {[`c-logo--${size}`]: size},
            {[`c-logo--${alignment}`]: alignment},
        ]"
    >
        <span class="c-logo__top-line u-title c-heading">
            Prittlewell
        </span>
        <span class="c-logo__bottom-line u-title c-heading">
            Princely Burial
        </span>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            default: 'small',
            type: String,
        },
        alignment: {
            default: 'left',
            type: String,
        },
    },
};
</script>

<style lang="scss">

$_logo-line-alignments: 'left', 'center';
$_logo-line-sizes: (
    'small': (
        'top': 52px,
        'bottom': 36px,
    ),
    'large': (
        'top': 130px,
        'bottom': 88px,
    )
);

.c-logo {

    &__top-line,
    &__bottom-line {
        display: block;
    }

    // Size variations

    @each $_logo-line-size-name, $_logo-line-size-map in $_logo-line-sizes {

        &--#{$_logo-line-size-name} {

            .c-logo__top-line {
                font-size: map-get($_logo-line-size-map, top);
            }

            .c-logo__bottom-line {
                font-size: map-get($_logo-line-size-map, bottom);
            }

        }

    }

    // Alignment variations

    @each $_logo-line-alignment in $_logo-line-alignments {

        &--#{$_logo-line-alignment} {
            text-align: #{$_logo-line-alignment};
        }

    }

}
</style>
