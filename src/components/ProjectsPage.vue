<template>
    <div>
        <h1>{{ t('projects.title') }}</h1>
        <p v-html="t('projects.text')"></p>
    </div>

    <hr/>

    <div id="project_container">
        <ProjectCard
            v-for="project in projects"
            :key="project.id"
            
            :project="project"
        />
    </div>

</template>

<script setup>
    import ProjectCard from './ProjectCard.vue';
    import projects_list from '../projects_list.json';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n()
    const projects = projects_list
</script>

<style scoped>
    #project_container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: flex-start;
    }

    hr {
        margin: 2rem 0;
    }
</style>