<template>
    <div class="container-indivisualscenario">
        <InfoScenarioComponent :scenario-info="scenarioInfo"/>
        <CommentsScenarioComponent :comments="comments"/>
    </div>
</template>

<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js"
import InfoScenarioComponent from "../components/IndividualScenario/InfoScenarioComponent.vue"
import CommentsScenarioComponent  from "../components/IndividualScenario/CommentsScenarioComponent.vue";

export default {
    components:{
        InfoScenarioComponent,
        CommentsScenarioComponent
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
.container-indivisualscenario{
    display: flex;
}
@media(max-width: 900px){
    .container-indivisualscenario{
        display: flex;
        flex-direction: column;
    }
}

</style>