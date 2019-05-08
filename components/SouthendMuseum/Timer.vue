<template>
    <div>
        {{ timer }}
    </div>
</template>

<script>

export default {
    computed: {
        time() {
            return this.$store.state.settings.interactionTimerId
        }
    }
}
</script>
