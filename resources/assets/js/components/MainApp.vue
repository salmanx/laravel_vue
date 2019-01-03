<template>
    <div id="main">
        <Header />
        <div id="container">
            <div class="col-md-8 col-md-offset-2">
                <router-view></router-view>
            </div>                
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue";

    export default {
        name: 'main-app',
        components: { Header }
    }
</script>
