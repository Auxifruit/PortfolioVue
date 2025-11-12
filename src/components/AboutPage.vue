<template>
    <div>
        <h1>{{ t('about.me.title') }}</h1>
        <p v-html="t('about.me.text')" />
    </div>

    <hr/>

    <div>
        <h1>{{ t('about.education.title') }}</h1>
        <div v-for="(school, index) in schools" :key="index">
            <b>{{ school.title }}</b>
            <ul>
                <li>{{ school.info }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    import { computed } from 'vue';
    
    const { t, tm } = useI18n()

    const schools = computed(() => tm('about.education.schools'))
</script>

<style scoped>
    hr {
        margin: 2rem 0;
    }
</style>