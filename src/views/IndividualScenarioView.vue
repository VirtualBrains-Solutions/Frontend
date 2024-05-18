<template>
    <h1>Individual scenario</h1>
</template>
<script>
{}
import RegisterApplicationService from "../core/RegisterApplicationService.js"

export default {
    components:{

    },
    data() {
        return {
            scenarioInfo: {},
            comments: []
        }
    },
    methods: {

    },
    async created(){
        const id = this.$route.params.id
        const objService = new RegisterApplicationService()

        // Get the info from the scenario
        const responseScenario = await objService.getScenario(id)
        this.scenarioInfo = responseScenario[0]

        // Get the comments
        this.comments = await objService.getCommentsFromScenario(id)

    }
}
</script>
<style scoped>

</style>