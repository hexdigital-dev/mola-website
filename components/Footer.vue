<template>
    <div class="footer">
        <div class="main-container wide">
            <div class="footer__top">
                <div class="top__leftside">
                    <a href="https://www.mola.org.uk/">
                        <img
                            :src="logoMola"
                            style="height: 76px; width: 79px;"
                        >
                    </a>
                    <a href="https://www.southend.gov.uk">
                        <img
                            :src="logoSouthend"
                            style="height: 61px; width: 199px;"
                        >
                    </a>
                </div>
                <div class="top__rightside">
                    <a
                        href="https://www.mola.org.uk/privacy-notice"
                        class="privacy"
                    >
                        Privacy policy
                    </a>
                    <ButtonTop />
                </div>
            </div>
            <h6>
                ©MOLA 2019. MOLA (Museum of London Archaeology)
                is a company limited by guarantee registered
                in England and Wales with company registration
                number 07751831 and charity registration number 1143574.
            </h6>
        </div>
    </div>
</template>
<script>
import ButtonTop from './ButtonTop';

const logoMola = require('~/assets/img/logos/mola-full-big.png');
const logoSouthend = require('~/assets/img/logos/southend-big.png');


export default {
    components: {
        ButtonTop,
    },
    data() {
        return {
            logoMola,
            logoSouthend,
        };
    },
};
</script>
