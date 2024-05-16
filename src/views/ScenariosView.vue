<template>
    <h1>Scenarios</h1>
</template>
<script>

import RegisterApplicationService from "../core/RegisterApplicationService.js";

export default {
    data(){
        return {
            scenarios: []
        }
    },
    methods: {
    },
    async created() {
        const objService = new RegisterApplicationService();
        const response = await objService.getScenarios()
        console.log(response)
    }
}

</script>
<style>

</style>