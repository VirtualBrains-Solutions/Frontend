<template>
    <h1 class = "mt-4">Plan individual</h1>
    <p><span>Plan:</span> {{this.planInfo.nombre_plan}}</p>
    <p><span>Descripción:</span> {{this.planInfo.descripcion_plan}}</p>
    <p><span>Paciente:</span> {{this.planInfo.nombre}} {{this.planInfo.apellido}}</p>
    <h2>Metas</h2>
    <p>Estas son todas las metas establecidas para este plan.</p>
    <button class = "btn btn-danger mt-5" @click = "$router.push('/planes/medico')">Volver</button>
    <button class = "btn btn-success mt-5 ml-2" @click = "$router.push(`/planes/${this.id}/metas/registrar`)">Agregar meta</button>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
export default {
    data(){
        return {
            planInfo: "",
            id: ""
        }
    },
    async created() {
        try{
            // Get the plan id
            this.id = this.$route.params.id
            // Get the plan info
            const objService = new RegisterApplicationService()
            const result = await objService.getPlanById(this.id)
            this.planInfo = result[0]
            // Get goals

        }
        catch(error){
            console.log(error)
        }
    }

}

</script>
<style scoped>
p span{
    font-weight: bold;
}

</style>