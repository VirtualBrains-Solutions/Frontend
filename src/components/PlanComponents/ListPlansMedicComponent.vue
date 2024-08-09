<template>
    <h1 class = "margin-top-navbar">Planes creados</h1>
    <p v-if = "this.plans.length > 0">Estos son todos los planes que has creado: </p>
    <p v-else>No tienes planes registrados.</p>
    <div class="container-plans">
        <article v-for = "plan in this.plans" class = "mt-5">
            <p><span>Nombre del plan: </span>{{plan.nombre_plan}}</p>
            <p><span>Paciente:</span> {{plan.nombre}}</p>
            <button class = "btn btn-primary w-100" @click = "$router.push(`/planes/${plan.id[0]}`)">Ver</button>
        </article>
    </div>
    <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../../store/AppStore.js";
import Spinner from "../../components/General/Spinner.vue"

export default{
   data(){
       return {
           plans: [],
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
    async created() {
       this.validations.showSpinner = true
       try{
           const objService = new RegisterApplicationService()
           this.plans = await objService.getPlansByMedicalId(this.appStore.getUserId)
       }
       catch(error){

       }
        this.validations.showSpinner = false
    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
.container-plans{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    place-items: center;
}
article span{
    font-weight: bold;
}

</style>