import axios from 'axios'; // eslint-disable-line import/no-extraneous-dependencies

export default function ({ store, env, route, redirect }) {
    if (route.name === 'index') {
        return;
    }
    if ((!store.state.content || store.state.content.length === 0)) {
        axios.get('content.json')
            .then((res) => {
                store.dispatch('setContent', res.data);
            });
    }

    if (route.name !== 'museum') {
        store.dispatch('settings/resetTimer');
    }
    if (route.name === 'museum') {
        store.commit('settings/clearTimer');
    }
}
