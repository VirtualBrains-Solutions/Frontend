<template>
    <ListPlansMedicComponent/>
    <button class = "btn btn-danger mt-5" @click = "$router.push('/planes')">Volver</button>
</template>
<script>
import ListPlansMedicComponent from "../components/PlanComponents/ListPlansMedicComponent.vue"
export default {
    components: {
        ListPlansMedicComponent
    }

}
</script>
<style scoped>

</style>