<template>
    <ScenariosComponent :scenarios = "this.scenarios" />
</template>
<script>

import RegisterApplicationService from "../core/RegisterApplicationService.js"
import ScenariosComponent from "../components/ScenariosComponents/ScenariosComponent.vue"

export default {
    components:{
        ScenariosComponent
    },
    data(){
        return {
            scenarios: []
        }
    },
    methods: {
    },
    async created() {
        const objService = new RegisterApplicationService();
        this.scenarios= await objService.getScenarios()
    }
}

</script>
<style>

</style>