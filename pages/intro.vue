<template>
    <div class="v-intro-screen">
        <div class="v-intro-screen__inner">
            <Logo
                size="large"
                alignment="center"
                class="v-intro-screen__logo"
            />
            <LinkButton
                to="/chamber"
                class="v-intro-screen__control"
            >
                Tap to begin
            </LinkButton>
        </div>
        <div class="v-intro-screen__background">
            <FullsizeMedia>
                <img
                    src="/img/intro-screen.jpg"
                    alt="Prittlewell Princely Burial Chamber Background"
                >
            </FullsizeMedia>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import FullsizeMedia from '~/components/SouthendMuseum/FullsizeMedia';
import LinkButton from '~/components/SouthendMuseum/LinkButton';
import Logo from '~/components/SouthendMuseum/Logo';

export default {
    components: {
        Logo,
        FullsizeMedia,
        LinkButton,
    },
    methods: {
        ...mapMutations({
            startTimer: 'settings/startTimer',
        }),
    },
};
</script>

<style lang="scss">
$_logo-to-button-gutter: $inuit-global-spacing-unit-large;

.v-intro-screen {
    position: relative;

    &__background {
        position: relative;
        z-index: 0;
    }

    &__inner {
        left: 50%;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    &__logo,
    &__control {
        margin-top: $_logo-to-button-gutter;
    }

}
</style>
