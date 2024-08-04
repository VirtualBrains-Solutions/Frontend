<template>
    <h1 class = "margin-top-navbar">Iniciar Sesión</h1>
    <div class="container-form">
        <div class="container-form-element">
            <v-text-field
                type = "text"
                label = "Correo"
                variant = "outlined"
                required
                v-model = "this.userLogin.email"
            >
            </v-text-field>
        </div>
        <div class="container-form-element">
            <v-text-field
                type = "password"
                label = "Contraseña"
                variant = "outlined"
                required
                v-model = "this.userLogin.password"
            >
            </v-text-field>
        </div>
        <button class = "btn btn-primary mt-3 btn-login" v-if = "this.validations.showButton" @click = "loginUser">Enviar</button>
        <div class="container-form-question mt-3" v-if = "this.validations.showButton">
             <span class = "ml-2" @click = "$router.push('/recuperar-cuenta')">¿Has olvidado la contraseña?</span>
        </div>
        <hr v-if = "this.validations.showButton">
        <button class = "btn btn-primary mt-3 btn-green" v-if = "this.validations.showButton" @click = "$router.push('/registrarse')">Crear cuenta nueva</button>
        <Spinner class = "mt-5 mb-5" v-if = "this.validations.showSpinner"/>
    </div>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore.js";
import Spinner from "../components/General/Spinner.vue"
import Swal from "sweetalert2"
import router from "../router";
export default{
    data(){
        return {
            userLogin:{
                "email": "",
                "password": ""
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
    mounted() {
        if(this.appStore.getLogeado){
            router.push('/escenarios');
        }
    },
    methods:{
        async loginUser(){
            if(this.userLogin.email === ""){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Falta tu correo",
                    icon: "warning"
                });
            }
            else{
                if(this.userLogin.password === ""){
                    Swal.fire({
                        title: "¡Espera!",
                        text: "Falta tu contraseña",
                        icon: "warning"
                    });
                }
                else{
                    this.validations.showSpinner = true
                    this.validations.showButton = false
                    try{
                        const objService = new RegisterApplicationService()
                        const result = await objService.loginUser(this.userLogin)

                        if(result.data.length > 0){
                            if(result.data[0]["estado_usuario"] === "Eliminado"){
                                Swal.fire({
                                    title: "¡Espera!",
                                    text: "Ese usuario ya fue eliminado",
                                    icon: "warning"
                                });
                            }
                            else{
                                this.appStore.setUserInfo(result.data[0])
                                this.appStore.saveState()
                                // Check if the user is medic
                                if(result.data[0]["tipo_usuario"] === "Médico"){
                                    this.appStore.setMedicTrue()
                                }
                                this.$router.push('/escenarios');
                            }
                        }
                        else{
                            Swal.fire({
                                title: "¡Error!",
                                text: "Esos datos no le corresponden a un usuario",
                                icon: "warning"
                            });
                        }
                        this.validations.showSpinner = false
                        this.validations.showButton = true
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
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
.container-form{
    margin-top: 10px;
}
.container-form-question {
    display: flex;
    font-size: 1.1rem;
}
.container-form-question span{
    text-decoration: underline;
    color: blue;
    cursor: pointer;
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
.btn-green{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #42B72A;
}

</style>