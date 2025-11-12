import AboutPage from "./components/AboutPage.vue";
import HomePage from "./components/HomePage.vue";
import NotFoundPage from "./components/NotFoundPage.vue";
import ProjectSinglePage from "./components/ProjectSinglePage.vue";
import ProjectsPage from "./components/ProjectsPage.vue";

export const routes = [
    {path: '/', component: HomePage, name: 'home'},
    {path: '/PortfolioVue/', component: HomePage, name: 'home'},
    {path: '/PortfolioVue/about', component: AboutPage, name: 'about'},
    {path: '/PortfolioVue/projects', component: ProjectsPage, name: 'projects'},
    {path: '/PortfolioVue/projects/:id', component: ProjectSinglePage, name: 'project_detail'},
    {path: '/PortfolioVue/:pathMatch(.*)*', component: NotFoundPage, name:"not_found"}
]