<template>
    <PersonalInfoComponent :infoUser = "userInfo"/>
    <PersonalFavoriteScenariosComponent :scenarios="favoritesScenarios" />
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import PersonalInfoComponent from "../components/ProfileComponents/PersonalInfoComponent.vue"
import PersonalFavoriteScenariosComponent from "../components/ProfileComponents/PersonalFavoriteScenariosComponent.vue";
export default{
    components: {
      PersonalInfoComponent,
        PersonalFavoriteScenariosComponent
    },
    data(){
        return{
            userId: 1,
            userInfo: {},
            favoritesScenarios: []
        }
    },
    async created() {
        try{
            // Get the info from the user
            const objService = new RegisterApplicationService()
            const result = await objService.getUserInfoById(this.userId)
            this.userInfo = result[0]

            // Get the favorites scenarios from the user
            this.favoritesScenarios = await objService.getFavoriteScenariosByUser(this.userId)
        }
        catch(error){
        }
    }
}

</script>
<style scoped>

</style>