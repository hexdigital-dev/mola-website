<template>
    <div
        class="c-icon"
    >
        <img
            :src="iconPath"
            alt=""
        >
    </div>
</template>
<script>
export default {
    props: {
        name: {
            required: true,
            type: String,
        },
    },
    computed: {
        iconPath() {
            return require('~/assets/img/southend-museum/' + this.name + '.svg'); // eslint-disable-line
        },
    },
};
</script>
