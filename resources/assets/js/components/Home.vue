<template>
    <div id="home">
        <p>{{ welcome }}</p>
    </div>
</template>

<script>
    export default {
        name: 'home',
        computed: {
            welcome(){
                return this.$store.getters.welcome;
            }
        }
    }
</script>
