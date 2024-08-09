<template>
    <ScenariosComponent :scenarios = "this.scenarios" />
    <Spinner class = "mb-2" v-if = "this.showSpinner"/>
    <p class = "mt-2" v-if = "this.showSpinner">Los escenarios están cargando...</p>
</template>
<script>

import RegisterApplicationService from "../core/RegisterApplicationService.js"
import ScenariosComponent from "../components/ScenariosComponents/ScenariosComponent.vue"
import Spinner from "../components/General/Spinner.vue"

export default {
    components:{
        ScenariosComponent,
        Spinner
    },
    data(){
        return {
            scenarios: [],
            showSpinner: true
        }
    },
    methods: {
    },
    async created() {
        try{
            const objService = new RegisterApplicationService();
            this.scenarios= await objService.getScenarios()

            this.showSpinner = false
        }
        catch(error){
            console.log(error)
        }
    }
}

</script>
<style scoped>


</style>