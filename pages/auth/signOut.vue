<template>

</template>

<script>
export default {
    asyncData() {
        $nuxt.$fire.auth.signOut()
        this.$router.push('/')

    }
}
</script>

<style>

</style>
