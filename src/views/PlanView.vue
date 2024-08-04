<template>
    <h1 class = "margin-top-navbar">Plan individual</h1>
    <p><span>Plan:</span> {{this.planInfo.nombre_plan}}</p>
    <p><span>Descripción:</span> {{this.planInfo.descripcion_plan}}</p>
    <p v-if = "this.appStore.getIsMedic"><span>Paciente:</span> {{this.planInfo.nombre}} {{this.planInfo.apellido}}</p>
    <h2>Metas</h2>
    <div v-if = "this.goals.length > 0">
        <p>Estas son todas las metas establecidas por tu especialista de la salud para este plan.</p>
        <article v-for = "goal in goals" class = "bg-dark text-white p-3 mt-2">
            <div class="flex">
                <p class = "mt-1">{{goal.descripcion}}</p>
                <div v-if = "!this.appStore.isMedic">
                    <i class="fa-solid fa-circle-xmark cancel-icon ml-5" v-if = "goal.estado_meta === 'Falta'"  @click = "this.changeStatusToComplete(goal.id)"></i>
                    <i class="fa-regular fa-circle-check check-icon ml-5" v-else></i>
                </div>
            </div>
        </article>
    </div>
    <button class = "btn btn-success mt-5 mb-5" @click = "$router.push(`/planes/${this.id}/metas/registrar`)" v-if = "this.appStore.getIsMedic">Agregar meta</button>
    <div v-if = "!this.goals.length >0">
        <p>No hay metas registradas para este plan.</p>
    </div>
    <button class = "btn btn-danger mt-5 ml-4 mb-5" v-if = "this.appStore.getIsMedic" @click = "$router.push('/planes/medico')">Volver</button>
    <button v-else class = "btn btn-danger mt-5 mb-5" @click = "$router.push('/planes')">Volver</button>
    <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore.js";
import Spinner from "../components/General/Spinner.vue"
export default {
    data(){
        return {
            planInfo: "",
            id: "",
            goals: [],
            validations: {
                showSpinner: false
            }
        }
    },
    components: {
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

</style>