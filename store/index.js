export const state = () => ({
    content: [],
});

export const mutations = {
    addItem(state, item) {
        state.content.push(item);
    },
};

export const getters = {
    getContentById: state => id => state.content.find(item => item.id === id),
    getContent: state => state.content,
};

export const actions = {
    setContent({ commit }, data) {
        data.forEach((item) => {
            commit('addItem', item);
        });
    },
};
