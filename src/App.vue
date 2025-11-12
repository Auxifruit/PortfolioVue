<template>
    <Header/>
    
    <div id="container">
        <RouterView/>
    </div>
</template>

<script setup>
    import Header from './components/Header.vue';
</script>

<style>
    #container {
        padding: 2% 10% 2% 10%;
    }
</style>