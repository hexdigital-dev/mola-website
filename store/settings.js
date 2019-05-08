export const state = () => ({
    hideHotspots: false,
    showVideoOverlay: false,
    showSidebar: false,
    showToppanel: false,
    interactionTimerId: null,
    sleepTimeout: 120000,
});

export const mutations = {
    toggleHotspots(state) {
        state.hideHotspots = !state.hideHotspots;
    },

    toggleVideoOverlay(state) {
        state.showVideoOverlay = !state.showVideoOverlay;
    },

    toggleSidebar(state, toState = null) {
        state.showSidebar = (toState !== null)
            ? toState
            : !state.showSidebar;
    },

    toggleToppanel(state, toState = null) {
        state.showToppanel = (toState !== null)
            ? toState
            : !state.showToppanel;
    },

    clearTimer(state) {
        clearTimeout(state.interactionTimerId);
    },

    startTimer(state) {
        state.interactionTimerId = setTimeout(() => {
            this.app.router.push('/');
        }, state.sleepTimeout);
    },
};

export const actions = {
    initTimer({ commit }) {
        commit('startTimer');
    },
    resetTimer({ commit }) {
        commit('clearTimer');
        commit('startTimer');
    },
};
