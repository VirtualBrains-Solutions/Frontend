import { createRouter, createWebHistory } from 'vue-router'
import ScenariosView from "../views/ScenariosView.vue"
import ProfileView from "../views/ProfileView.vue"
import IndividualScenarioView from "../views/IndividualScenarioView.vue"
import SuggestView from "../views/SuggestView.vue"
import QuestionnairesView from "../views/QuestionnairesView.vue"
import PlansView from "../views/PlansView.vue"
import ListPlansMedic from "../views/ListPlansMedic.vue";
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import RegisterPlanView from "../views/RegisterPlanView.vue";
import PlanView from "../views/PlanView.vue"
import RegisterGoal from "../views/RegisterGoal.vue";
import RecoverPassword from "../views/RecoverPassword.vue";
import ChangePassword from "../views/ChangePassword.vue";
import UpdateUserInfoView from "../views/UpdateUserInfoView.vue"
import ChangePasswordWithoutTokenView from "../views/ChangePasswordWithoutTokenView.vue"
import AnswersQuestionnairesView from "../views/questionnaires/AnswersQuestionnairesView.vue";
import QuestionnaireGeneralView from "../views/questionnaires/QuestionnaireGeneralView.vue";
import QuestionnaireInterviewAfterView from "../views/questionnaires/Interview/QuestionnaireInterviewAfterView.vue"
import QuestionnaireInterviewBeforeView from "../views/questionnaires/Interview/QuestionnaireInterviewBeforeView.vue"
import QuestionnaireMeetingBarBeforeView from "../views/questionnaires/MeetingBar/QuestionnaireMeetingBarBeforeView.vue"
import QuestionnaireMeetingBarAfterView from "../views/questionnaires/MeetingBar/QuestionnaireMeetingBarAfterView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/iniciar-sesion'
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
      component: PlansView
    },
    {
      path:"/planes/:id",
      name: "planes-id",
      component: PlanView
    },
    {
      path:"/planes/registrar",
      name: "planes-registrar",
      component: RegisterPlanView
    },
    {
      path:"/planes/medico",
      name: "planes-medico",
      component: ListPlansMedic
    },
    {
      path:"/planes/:id/metas/registrar",
      name: "metas-registrar",
      component: RegisterGoal
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
    },
    {
      path: "/recuperar-cuenta",
      name: "recuperar-cuenta",
      component: RecoverPassword
    },
    {
      path: "/cambiar-password/:token",
      name: "change-password",
      component: ChangePassword
    },
    {
      path: "/actualizar-informacion",
      name: "actualizar-informacion",
      component: UpdateUserInfoView
    },
    {
      path: "/actualizar-password",
      name: "actualizar-password",
      component: ChangePasswordWithoutTokenView
    },
    {
      path: "/cuestionarios/respuestas",
      name: "cuestionarios-respuestas",
      component: AnswersQuestionnairesView
    },
    {
      path: "/cuestionarios/general",
      name: "cuestionarios-general",
      component: QuestionnaireGeneralView
    },
    {
      path: "/cuestionarios/entrevista/antes",
      name: "cuestionarios-entrevista-antes",
      component: QuestionnaireInterviewBeforeView
    },
    {
      path: "/cuestionarios/entrevista/despues",
      name: "cuestionarios-entrevista-despues",
      component: QuestionnaireInterviewAfterView
    },
    {
      path: "/cuestionarios/reunionbar/antes",
      name: "cuestionarios-reunionbar-antes",
      component: QuestionnaireMeetingBarBeforeView
    },
    {
      path: "/cuestionarios/reunionbar/despues",
      name: "cuestionarios-reunionbar-despues",
      component: QuestionnaireMeetingBarAfterView
    }
  ]
})

export default router
