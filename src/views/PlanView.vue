<template>
    <h1 class = "margin-top-navbar">Plan individual</h1>
    <p><span>Plan:</span> {{this.planInfo.nombre_plan}}</p>
    <p><span>Descripción:</span> {{this.planInfo.descripcion_plan}}</p>
    <div v-if = "this.appStore.getIsMedic">
        <p v-if = "this.appStore.getIsMedic"><span>Paciente:</span> {{this.planInfo.nombre}} {{this.planInfo.apellido}}</p>
        <div v-if = "this.goals.length > 0 && this.appStore.getIsMedic" class = "graphics-styles">
            <StatisticInfoComponent :data = this.data v-if = "this.goals.length > 0" />
        </div>
        <p v-else>No hay estadísticas, ya que no metas.</p>
    </div>
    <h2>Metas</h2>
    <div v-if = "this.goals.length > 0">
        <p v-if = "this.appStore.getIsMedic">Estas son todas las metas que has establecido para este plan.</p>
        <p v-else>Estas son todas las metas establecidas por tu especialista de la salud para este plan.</p>
        <article v-for = "goal in goals" class = "bg-dark text-white p-3 mt-2">
            <div class="flex">
                <p class = "mt-1">{{goal.descripcion}}</p>
                <div v-if = "!this.appStore.isMedic">
                    <i class="fa-solid fa-circle-xmark cancel-icon ml-5" v-if = "goal.estado_meta === 'Falta'"  @click = "this.changeStatusToComplete(goal.id)"></i>
                    <i class="fa-regular fa-circle-check check-icon ml-5" v-else></i>
                </div>
                <div class = "mt-1" v-if = "this.appStore.getIsMedic">
                    <i class="fa-solid fa-circle-xmark cancel-icon ml-5" v-if = "goal.estado_meta === 'Falta'"></i>
                    <i class="fa-regular fa-circle-check check-icon ml-5" v-else></i>
                </div>
            </div>
        </article>
    </div>
    <button class = "btn btn-success mt-5 mb-5 mr-4" @click = "$router.push(`/planes/${this.id}/metas/registrar`)" v-if = "this.appStore.getIsMedic">Agregar meta</button>
    <div v-if = "!this.goals.length >0">
        <p>No hay metas registradas para este plan.</p>
    </div>
    <button class = "btn btn-danger mt-5 mb-5" v-if = "this.appStore.getIsMedic" @click = "$router.push('/planes/medico')">Volver</button>
    <button v-else class = "btn btn-danger mt-5 mb-5" @click = "$router.push('/planes')">Volver</button>
    <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore.js";
import Spinner from "../components/General/Spinner.vue"
import StatisticInfoComponent from "../components/PlanComponents/StatisticInfoComponent.vue";

export default {
    data(){
        return {
            planInfo: "",
            id: "",
            goals: [],
            validations: {
                showSpinner: false
            },
            data: {
                labels: ["Completas", "Incompletas"],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#DD1B16'],
                        data: [this.appStore.getTotalCountGoals.Completado, this.appStore.getTotalCountGoals.Falta]
                    }
                ]
            },
        }
    },
    components: {
        StatisticInfoComponent,
        Spinner
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    methods: {
        async changeStatusToComplete(idGoal){
            try{
                const objService = new RegisterApplicationService()
                await objService.changeStatusGoalToComplete(idGoal)

                const idPlan = this.$route.params.id
                window.location.reload();
            }
            catch(error){
                console.log(error)
            }
        }
    },
    async created() {
        this.validations.showSpinner = true
        try{
            // Get the plan id
            this.id = this.$route.params.id
            // Get the plan info
            const objService = new RegisterApplicationService()
            const result = await objService.getPlanById(this.id)
            this.planInfo = result[0]
            // Get goals
            this.goals = await objService.getGoalsByPlanId(this.id)

            // Reset count goals
            this.appStore.setZeroCountGoals()

            // Get count goals
            for(let i = 0; i < this.goals.length; i++){
                if(this.goals[i].estado_meta === "Completado"){
                    this.appStore.incrementCountGoalsComplete()
                }
                else{
                    this.appStore.incrementCountGoalsIncomplete()
                }
            }

            this.validations.showSpinner = false

        }
        catch(error){
            console.log(error)
            this.validations.showSpinner = false
        }
    }

}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
p span{
    font-weight: bold;
}
.cancel-icon{
    margin-top:2px;
    font-size: 30px;
    cursor: pointer;
}
.check-icon{
    margin-top:2px;
    font-size: 30px;
}
.graphics-styles{
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
}
</style>