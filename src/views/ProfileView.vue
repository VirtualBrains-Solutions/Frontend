<template>
    <PersonalInfoComponent :infoUser = "userInfo"/>
    <PersonalFavoriteScenariosComponent :scenarios="favoritesScenarios" />
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import PersonalInfoComponent from "../components/ProfileComponents/PersonalInfoComponent.vue"
import PersonalFavoriteScenariosComponent from "../components/ProfileComponents/PersonalFavoriteScenariosComponent.vue";
import {appStoreGeneral} from "../store/AppStore.js";

export default{
    components: {
      PersonalInfoComponent,
        PersonalFavoriteScenariosComponent
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
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
            const result = await objService.getUserInfoById(this.appStore.getUserId)
            this.userInfo = result[0]

            // Get the favorites scenarios from the user
            this.favoritesScenarios = await objService.getFavoriteScenariosByUser(this.appStore.getUserId)
        }
        catch(error){
            console.log(error)
        }
    }
}

</script>
<style scoped>

</style>