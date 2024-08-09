<template>
    <PersonalInfoComponent :infoUser = "userInfo" v-if = "this.showInfo"/>
    <PersonalFavoriteScenariosComponent :scenarios="favoritesScenarios" v-if = "this.showInfo" />
    <Spinner class = "margin-top-navbar mb-2" v-if = "this.showSpinner"/>
    <p v-if = "this.showSpinner">La información de tu perfil está cargando...</p>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import PersonalInfoComponent from "../components/ProfileComponents/PersonalInfoComponent.vue"
import PersonalFavoriteScenariosComponent from "../components/ProfileComponents/PersonalFavoriteScenariosComponent.vue";
import {appStoreGeneral} from "../store/AppStore.js";
import Spinner from "../components/General/Spinner.vue"

export default{
    components: {
        PersonalInfoComponent,
        PersonalFavoriteScenariosComponent,
        Spinner
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
            favoritesScenarios: [],
            showSpinner: true,
            showInfo: false
        }
    },
    async created() {
        try{
            // Get the info from the user
            const objService = new RegisterApplicationService()
            const result = await objService.getUserInfoById(this.appStore.getUserId)
            this.userInfo = result[0]
            this.appStore.setUserInfo(result[0])

            // Get the favorites scenarios from the user
            this.favoritesScenarios = await objService.getFavoriteScenariosByUser(this.appStore.getUserId)

            this.showSpinner = false
            this.showInfo = true
        }
        catch(error){
            console.log(error)
        }
    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
</style>