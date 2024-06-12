<template>
    <div class="container-scenario">
        <div class="container-title-icons">
            <h1 class = "mt-2">{{scenarioInfo.nombre_escenario}}</h1>
        </div>
        <img :src = "scenarioInfo.img_url" alt="" class = "scenario-img">
        <div class="container-reactions">
            <div class="container-reaction">
                <span>{{scenarioInfo.num_likes}}</span>
                <i class="fa-solid fa-thumbs-up reaction-icon" @click = "changeLikes"></i>
            </div>
            <div class="container-reaction">
                <span>{{scenarioInfo.num_dislikes}}</span>
                <i class="fa-solid fa-thumbs-down reaction-icon" @click = "changeDislikes"></i>
            </div>
        </div>
        <button class = "btn btn-success mt-2" v-if = "this.validations.showButton" @click = "selectFavoriteScenario">Agregar a favoritos</button>
        <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner" />
    </div>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../../store/AppStore.js";
import Swal from "sweetalert2";
import Spinner from "../../components/General/Spinner.vue"
export default {
    data(){
        return {
            infoFavoriteScenario:{
                "usuario_id": "",
                "escenario_id": ""
            },
            validations:{
                showSpinner: false,
                showButton: true
            }
        }
    },
    components: {
      Spinner
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    props: {
        scenarioInfo: {
            type: Object,
            required: true
        }
    },
    methods: {
        async changeLikes(){
            try{
                const id = this.$route.params.id
                const objService = new RegisterApplicationService()
                await objService.changeLikesScenario(id, {num:this.scenarioInfo.num_likes + 1})
                window.location.reload();
            }
            catch(error){
                console.log(error)
            }
        },
        async changeDislikes(){
            try{
                const id = this.$route.params.id
                const objService = new RegisterApplicationService()
                await objService.changeDislikesScenario(id, {num:this.scenarioInfo.num_dislikes + 1})
                window.location.reload();
            }
            catch(error){
                console.log(error)
            }
        },
        async selectFavoriteScenario(){
            try{
                this.validations.showSpinner = true
                this.validations.showButton = false
                const objService = new RegisterApplicationService()
                const id = this.$route.params.id
                this.infoFavoriteScenario.escenario_id = id
                this.infoFavoriteScenario.usuario_id = this.appStore.getUserId
                // Before to save this scenario in favorites, we need to check if it already exists
                const response = await objService.validateFavoriteScenario(this.infoFavoriteScenario)
                if(response.data.length > 0){
                    Swal.fire({
                        icon: "warning",
                        title: "Espera",
                        text: "No puedes agregar el mismo escenario dos veces.",
                    });
                }
                else{
                    await objService.createFavoriteScenario(this.infoFavoriteScenario)
                    Swal.fire({
                        icon: "success",
                        title: "¡Escenario agregado!",
                        text: "El escenario se ha guardado en tus favoritos.",
                    });
                }
                this.validations.showSpinner = false
                this.validations.showButton = true
            }
            catch(error){
                Swal.fire({
                    icon: "error",
                    title: "Hay un error",
                    text: "La página está presentando problemas ahora mismo.",
                });
            }
        }
    }
}

</script>
<style scoped>
.reaction-icon{
    cursor: pointer
}
.container-title-icons{
    display: flex;
    align-items: center;
}
.container-scenario{
    width: 650px;
}
.container-reactions{
    display: flex;
    margin-top: 5px;
}
.container-reaction{
    margin: 5px 0 0 10px;
}
.container-reaction span{
    margin-right: 5px;
}
.scenario-img{
    width: 600px;
    height: 400px;
}
@media(max-width: 900px){
    .scenario-img{
        width: 80vw;
    }
}

</style>