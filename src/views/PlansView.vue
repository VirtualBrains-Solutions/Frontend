<template>
    <h1 class = "margin-top-navbar">Planes</h1>
    <div v-if = "appStore.getIsMedic">
        <p>Aquí podrás registrar los planes de seguimiento de tus pacientes.
            Primero, debes crear el plan que seguirá tu paciente y luego establecer las metas a cumplir.</p>
        <button class = "btn btn-success"  @click = "$router.push('/planes/registrar')">Registrar Plan</button>
        <button class = "btn btn-primary ml-2" @click = "$router.push('/planes/medico')">Ver planes registrados</button>
    </div>
    <div v-else>
        <ListPlansPacientComponent />
    </div>
</template>
<script>
import Spinner from "../components/General/Spinner.vue"
import ListPlansMedicComponent from "../components/PlanComponents/ListPlansMedicComponent.vue"
import ListPlansPacientComponent from "../components/PlanComponents/ListPlansPacientComponent.vue";
import {appStoreGeneral} from "../store/AppStore.js";

export default {
    components:{
        Spinner,
        ListPlansMedicComponent,
        ListPlansPacientComponent
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    }
}


</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}

</style>