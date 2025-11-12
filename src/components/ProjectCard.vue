<template>
    <div id="main_container">
        <RouterLink :to="{name: 'project_detail', params: {id: project.id}}">
            <img id="project_image" :src="project.img"></img>
            <div id="project_overview">
                <h2 id="project_title">{{ title }}</h2>
                <p id="project_summary">{{ summary }}</p>
                <ul id="technos_container">
                    <li v-for="techno in project.technos" :key="techno">
                        <img v-if="getTechnoIcon(techno)" :src="getTechnoIcon(techno)" class="techno_icon"/>
                        <b>{{ techno }}</b>
                    </li>
                </ul>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    import { computed } from 'vue';
    import { getTechnoIcon } from '../getTechnoIcon.js'

    const { t } = useI18n()

    const props = defineProps ({
        project: Object
    })

    const title = computed(() => t(`projects.${props.project.id}.title`));
    const summary = computed(() => t(`projects.${props.project.id}.summary`));

</script>

<style scoped>

    #main_container {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        transition: 0.3s;
        max-width: 25%;
        max-height: 35%;
        min-width: 300px;
        border-radius: 10px 10px 10px 10px;
        cursor: pointer;
    }

    #main_container a {
        text-decoration: none;
        color: inherit;
    }

    #main_container:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    }

    #project_image {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
    }

    #project_summary {
        text-align: justify;
    }

    #project_overview {
        padding: 1% 5% 5% 5%;
        background-color: #F7F7F7;
        border-radius: 0px 0px 10px 10px;
    }

    #technos_container {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
    }

    #technos_container li{
        display: flex;
        align-items: center;
    }

    .techno_icon {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }

</style>