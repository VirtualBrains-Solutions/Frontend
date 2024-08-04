<template>
    <h1 class = "margin-top-navbar">Cambiar contraseña</h1>
    <v-text-field
        type = "password"
        label = "Contraseña anterior"
        variant = "outlined"
        required
        v-model = "this.userInfo.origin_password"
    >
    </v-text-field>
    <v-text-field
        type = "password"
        label = "Nueva contraseña"
        variant = "outlined"
        required
        v-model = "this.userInfo.new_password"
    >
    </v-text-field>
    <v-text-field
        type = "password"
        label = "Repite la nueva contraseña"
        variant = "outlined"
        required
        v-model = "this.userInfo.new_password_repeat"
    >
    </v-text-field>
    <button class = "btn btn-success btn-plus" v-if = "this.validations.showButton" @click = "updatePassword">Enviar cambios</button>
    <button class = "btn btn-primary btn-plus margin-top-cel ml-2" v-if = "this.validations.showButton" @click = "$router.push('/perfil')">Volver</button>
    <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner" />
</template>
<script>
import Swal from "sweetalert2"
import Spinner from "../components/General/Spinner.vue"
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore.js";

export default{
    data(){
        return {
            validations:{
                showSpinner: false,
                showButton: true
            },
            userInfo: {
                origin_password: "",
                new_password: "",
                new_password_repeat: "",
                id: ""
            },
            original_password_user: ""
        }
    },
    components:{
        Spinner
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    created() {
        this.userInfo.id = this.appStore.getUserId
        this.original_password_user = this.appStore.getPassword
    },
    methods: {
        async updatePassword(){
            if(this.userInfo.origin_password.length === 0){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Debes ingresar la contraseña actual",
                    icon: "warning"
                });
                return
            }
            if(this.userInfo.new_password.length === 0){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Debes ingresar la nueva contraseña",
                    icon: "warning"
                });
                return
            }
            if(this.userInfo.new_password_repeat.length === 0){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Debes repetir la nueva contraseña",
                    icon: "warning"
                });
                return
            }
            if(this.userInfo.new_password !== this.userInfo.new_password_repeat){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Las contraseñas ingresadas no coinciden",
                    icon: "warning"
                });
                return
            }

            if(this.original_password_user !== this.userInfo.origin_password){
                Swal.fire({
                    title: "¡Espera!",
                    text: "La contraseña anterior no es correcta",
                    icon: "warning"
                });
                return
            }

            this.validations.showSpinner = true
            this.validations.showButton = false
            try{
                const objService = new RegisterApplicationService()
                await objService.updatePasswordByUserId(this.userInfo)

                Swal.fire({
                    icon: "success",
                    title: "¡Genial!",
                    text: "El cambió se realizó correctamente",
                });

                this.appStore.setPassword(this.userInfo.new_password)
                this.$router.push('/perfil');


            }
            catch(error){
                Swal.fire({
                    title: "¡Error!",
                    text: "Hubo un problema en el servidor",
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
.btn-plus{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
</style>