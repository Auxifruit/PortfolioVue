<template>
    <div id="main_container">
        <h1>{{ t('home.title') }}</h1>
        <p v-html="t('home.text')"/>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';

        
    const { t } = useI18n();
</script>

<style scoped>
    #main_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        text-align: center;
    }
</style>