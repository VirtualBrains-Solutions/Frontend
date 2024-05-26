<template>
    <h1 class = "mt-4">Planes creados</h1>
    <p>Estos son todos los planes que has creado.</p>
    <div class="container-plans">
        <article v-for = "plan in this.plans">
            <p><span>Nombre del plan:</span>{{plan.nombre_plan}}</p>
            <p><span>Paciente:</span> {{plan.nombre}}</p>
            <button class = "btn btn-primary w-100" @click = "$router.push(`/planes/${plan.id[0]}`)">Ver</button>
        </article>
    </div>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
export default{
   data(){
       return {
           plans: []

       }
   },
    async created() {
       try{
           const objService = new RegisterApplicationService()
           this.plans = await objService.getPlansByMedicalId(2)

       }
       catch(error){

       }

    }
}

</script>
<style>
.container-plans{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    place-items: center;
}
article span{
    font-weight: bold;
}

</style>