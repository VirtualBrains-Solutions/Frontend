import { createRouter, createWebHistory } from 'vue-router'
import ScenariosView from "../views/ScenariosView.vue"
import ProfileView from "../views/ProfileView.vue"
import IndividualScenarioView from "../views/IndividualScenarioView.vue"
import SuggestView from "../views/SuggestView.vue"
import QuestionnairesView from "../views/QuestionnairesView.vue"
import PacientPlanView from "../views/PacientPlansView.vue"
import PacientSessionView from "../views/PacientSessionView.vue"
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/escenarios'
    },
    {
      path: '/escenarios',
      name: 'escenarios',
      component: ScenariosView
    },
    {
      path:"/sugerencias",
      name: "sugerencias",
      component: SuggestView
    },
    {
      path: "/perfil",
      name: "perfil",
      component: ProfileView
    },
    {
      path: "/cuestionarios",
      name: "cuestionarios",
      component: QuestionnairesView
    },
    {
      path:"/escenarios/:id",
      name: "escenario-individual",
      component: IndividualScenarioView
    },
    {
      path:"/planes",
      name: "planes",
      component: PacientPlanView
    },
    {
      path:"/sesiones",
      name: "sesiones",
      component: PacientSessionView
    },
    {
      path:"/iniciar-sesion",
      name:"iniciar-sesion",
      component: LoginView
    },
    {
      path: "/registrarse",
      name: "registrarse",
      component: RegisterView
    }
  ]
})

export default router
