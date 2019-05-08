import Vue from 'vue'; // eslint-disable-line
import VueScrollTo from 'vue-scrollto'; // eslint-disable-line

Vue.use(VueScrollTo, {
    duration: 800,
    easing: 'linear',
    force: true,
    cancelable: true,
    x: false,
    y: true,
});
