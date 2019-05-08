export default {
    methods: {
        userInteraction() {
            this.$store.dispatch('settings/resetTimer');
        },
    },
};
