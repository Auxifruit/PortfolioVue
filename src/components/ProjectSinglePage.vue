<template>
    <div id="main_container">
        <div id="project_overview">
            <div id="project_info">
                <h1>{{ title }}</h1>
                <p>
                    {{ summary }}
                </p>
                <div>
                    <b>{{ t('projects.technos') }}</b>
                    <ul id="technos_container">
                        <li v-for="techno in project.technos" class="techno_item">
                            <img v-if="getTechnoIcon(techno)" :src="getTechnoIcon(techno)" class="techno_icon"/>
                            {{ techno }}
                        </li>
                    </ul>
                </div>
            </div>
            <img id="project_image" :src="project.img"/>
        </div>
        
        <hr/>

        <div v-if="paragraphs && paragraphs.length">
            <div v-for="(para, index) in paragraphs" :key="index" class="paragraph">
                <h2>{{ para.title }}</h2>
                <div v-html="para.text"></div>
                <div v-if="para.imgs && para.imgs.length" class="paragraph_image_container">
                    <img 
                        v-for="(image, index) in para.imgs" 
                        :key="index" 
                        :src="image" 
                        class="paragraph_image"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useI18n } from 'vue-i18n';
    import { useRoute, useRouter } from 'vue-router';
    import { computed } from 'vue';
    import { getTechnoIcon } from '../getTechnoIcon.js'
    import projects_list from '../projects_list.json';

    const { t, tm } = useI18n()
    const route = useRoute();
    const router = useRouter();

    const project = computed(() => {
        const id = Number(route.params.id);
        return projects_list.find(project => project.id === id);
    });

    if (!project.value) {
        router.replace({ name: 'not_found' });
    }

    const title = computed(() => project.value ? t(`projects.${project.value.id}.title`) : '');
    const summary = computed(() => project.value ? t(`projects.${project.value.id}.summary`) : '');
    
    const paragraphs = computed(() => project.value ? tm(`projects.${project.value.id}.paragraphs`) : [])
</script>

<style scoped>
    #project_overview {
        display: flex;
        justify-content: start;
        align-items: center;
        
    }

    @media screen and (max-width: 1000px) {       
        #project_overview {
            display: block;
        }

        #project_info {
            margin-right: 0%;
        }
    }

    #technos_container {
        list-style-type: none;
    }

    .techno_item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .techno_icon {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }

    hr {
        margin: 2rem 0;
    }

    #project_info {
        margin-right: 10%;
    }

    #project_image {
        max-width: 30%;
    }

    .paragraph {
        margin-bottom: 5%;
    }

    .paragraph_image_container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        justify-items: center;
    }

    .paragraph_image {
        width: 100%;
        height: auto;
        max-height: 400px;
        object-fit: contain;
    }
</style>