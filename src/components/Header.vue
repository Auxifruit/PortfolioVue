<template>
    <header id="main_container">
        <ul id="header">
            <li><b><RouterLink :to="{name: 'home'}" class="link">{{ t('header.home') }}</RouterLink></b></li>
            <li><b><RouterLink :to="{name: 'about'}" class="link">{{ t('header.about') }}</RouterLink></b></li>
            <li><b><RouterLink :to="{name: 'projects'}" class="link">{{ t('header.projects') }}</RouterLink></b></li>
        </ul>
        <div id="logo_language_container">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Auxifruit">
                <img class="svg_images" src="../assets/github.svg"/>
            </a>
            
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guillaume-barr%C3%A9-93b091291/">
                <img class="svg_images" src="../assets/linkedin.svg"/>
            </a>
            <div id="language_selector">
                <select v-model="currentLocale" @change="changeLanguage">
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const { locale } = useI18n();

    const currentLocale = ref(locale.value);

    function changeLanguage() {
        locale.value = currentLocale.value;
    }
</script>

<style scoped>
    #main_container {
        width: auto;
        background: #393E46;
        padding: 0px 5% 0px 5%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 320px) {       
        #main_container {
            display: inline-block;
        }
    }

    #header {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 2rem;
    }

    @media screen and (max-width: 750px) {       
        #header {
            display: block;
        }

        .link::after {
            content: none;
        }
    }

    .link {
        display: block;
        position: relative;
        text-align: center;
        color: #F7F7F7;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 1.75em;
        cursor: pointer;
    }

    .link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: 8px;
        left: 50%;
        background-color: #F8B500;
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }

    .link:hover::after {
        width: calc(100% - 32px);
    }

    .router-link-active {
        color: #F8B500;
    }

    #logo_language_container {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .svg_images {
        width: 48px;
        height: 48px;
        display: block;
    }

</style>