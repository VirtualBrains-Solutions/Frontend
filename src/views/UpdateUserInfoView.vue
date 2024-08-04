<template>
    <h1 class = "margin-top-navbar">Actualiza tu información</h1>
    <div class="container-form-element">
        <v-text-field
            type = "text"
            label = "Nombre"
            variant = "outlined"
            required
            v-model = "this.updateUserInfo.nombre"
        >
        </v-text-field>
        <v-text-field
            type = "text"
            label = "Apellido"
            variant = "outlined"
            v-model = "this.updateUserInfo.apellido"
            required
        >
        </v-text-field>
        <v-file-input label="Foto de perfil" variant = "outlined" class = "mt-3" v-model = "this.userUpdatePhoto"></v-file-input>
        <button class = "btn btn-success btn-plus" @click = "updateUserData" v-if = "this.validations.showButton">Enviar cambios</button>
        <button class = "btn btn-primary btn-plus margin-top-cel" @click = "$router.push('/perfil')" v-if = "this.validations.showButton">Volver</button>
        <Spinner class = "mt-3 mb-3" v-if = "this.validations.showSpinner" />
    </div>
</template>
<script>
import Swal from "sweetalert2"
import {appStoreGeneral} from "../store/AppStore.js";
import Spinner from "../components/General/Spinner.vue"
import RegisterApplicationService from "../core/RegisterApplicationService.js"

export default{
    data(){
        return {
            updateUserInfo: {
                "nombre": "",
                "apellido": "",
                "id": ""
            },
            userInfo: {

            },
            userUpdatePhoto: "",
            validations: {
                showSpinner: false,
                showButton: true
            }
        }
    },
    components: {
        Spinner
    },
    mounted() {
        this.updateUserInfo.nombre = this.appStore.getUserName
        this.updateUserInfo.apellido = this.appStore.getUserLastName
        this.updateUserInfo.id = this.appStore.getUserId
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    methods: {
        async updateUserData(){
            this.validations.showSpinner = true
            this.validations.showButton = false
            try{
                const objService = new RegisterApplicationService()
                await objService.updateUserInfoMethod(this.updateUserInfo, this.userUpdatePhoto)
                this.validations.showSpinner = false
                this.validations.showButton = true
                Swal.fire({
                    title: "¡Genial!",
                    text: "Tu información se ha actualizado.",
                    icon: "success"
                });
                this.$router.push('/perfil');
            }
            catch(error){
                Swal.fire({
                    title: "¡Error!",
                    text: "Hay un error en el servidor",
                    icon: "error"
                });
                this.validations.showSpinner = false
                this.validations.showButton = true
            }
        }
    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
.container-form-element input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
.btn-plus{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
.margin-top-cel{
    margin-left: 10px;
}
@media(max-width: 500px ){
    .margin-top-cel{
        margin-top: 10px;
        margin-left: 0px;
    }
}
</style>