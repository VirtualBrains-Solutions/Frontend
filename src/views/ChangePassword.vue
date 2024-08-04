<template>
    <h1 class = "margin-top-navbar">Ingresa tu nueva contraseña</h1>
    <div class="container-form-element">
        <input type="password" placeholder="Nueva contraseña" v-model = "this.userInfo.newPassword">
    </div>
    <div class="container-form-element">
        <input type="password" placeholder="Repite nuevamente la contraseña" v-model = "this.userInfo.repeatPassword">
    </div>
    <button class = "btn btn-primary mt-3 btn-login" @click = "this.changePassword" v-if = "this.validations.showButton">Enviar</button>
    <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import Swal from "sweetalert2"
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import Spinner from "../components/General/Spinner.vue"

export default{
    data(){
        return {
            userInfo: {
                "newPassword": "",
                "repeatPassword": "",
                "token": ""
            },
            validations:{
                showSpinner: false,
                showButton: true
            }

        }
    },
    components:{
        Spinner
    },
    mounted() {
        this.userInfo.token = this.$route.params.token
    },
    methods: {
        async changePassword(){
            if(this.userInfo.newPassword.length === 0){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Debes ingresar la nueva contraseña",
                    icon: "warning"
                });
                return
            }
            if(this.userInfo.repeatPassword.length === 0){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Debes repetir la contraseña",
                    icon: "warning"
                });
                return
            }
            if(this.userInfo.newPassword !== this.userInfo.repeatPassword){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Las contraseñas ingresadas no coinciden",
                    icon: "warning"
                });
                return
            }
            else{
                this.validations.showSpinner = true
                this.validations.showButton = false
                try{
                    const objService = new RegisterApplicationService()
                    await objService.updatePassword(this.userInfo)
                    Swal.fire({
                        icon: "success",
                        title: "¡Contraseña actualizada!",
                        text: "Ahora prueba ingresando a la plataforma",
                    });
                    this.$router.push('/iniciar-sesion');
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
.btn-login{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
</style>