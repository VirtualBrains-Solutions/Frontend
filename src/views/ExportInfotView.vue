<template>
    <h1 class = "margin-top-navbar">Exportar datos de progreso</h1>
    <p>Se enviaran todas las respuestas marcadas en los cuestionarios, y aquí debes indicar qué correo recibirá toda esa información.</p>
    <div class="form-group father-element">
        <select  class="form-control mt-1" id="styled-select" v-model = "this.infoData.type_email">
            <option value="" selected>¿Quién recibirá la información?</option>
            <option value="mi_correo">Mi correo</option>
            <option value="otro_correo">Otro correo</option>
        </select>
        <i class="fa-solid fa-angle-down child-element"></i>
    </div>
    <v-text-field
        type = "text"
        label = "Ingresa el otro correo"
        variant = "outlined"
        required
        v-model ="this.dataInfo.email"
        v-if = "this.validations.showSecondInput"
    >
    </v-text-field>
    <Spinner v-if = "this.validations.showSpinner" class = "mb-5" />
    <button class = "btn btn-success btn-plus mr-2" v-if = "this.validations.showButton" @click = "sendEmail">Enviar información</button>
    <button class = "btn btn-primary btn-plus margin-top-cel" v-if = "this.validations.showButton" @click = "$router.push('/perfil')">Volver</button>
</template>
<script>
import Swal from "sweetalert2"
import Spinner from "../components/General/Spinner.vue"
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore";

export default{
    data(){
        return {
            validations: {
                showButton: true,
                showSpinner: false,
                showSecondInput: false
            },
            infoData: {
                type_email: "",
            },
            dataInfo: {
                email: ""
            },
            userID: ""
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
    created(){
        this.userID = this.appStore.getUserId
    },
    methods: {
        async sendEmail(){
            if(this.infoData.type_email.length === 0){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Debes seleccionar una opción.",
                    icon: "warning"
                });
                return
            }

            if(this.infoData.type_email === "otro_correo" && this.dataInfo.email.length === 0){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Debes ingresar el correo al que le llegará la información.",
                    icon: "warning"
                });
                return
            }

            if(this.infoData.type_email === "mi_correo"){
                this.validations.showSpinner = true
                this.validations.showButton = false
                try{
                    const data = {
                        email: this.appStore.getUserEmail,
                        type: "me"
                    }
                    const objService = new RegisterApplicationService()
                    await objService.sendEmailWithData(data, this.userID)

                    Swal.fire({
                        title: "¡Enviado!",
                        text: "Tu información será enviado al correo usado para crear tu cuenta.",
                        icon: "success"
                    });
                    this.$router.push('/perfil')
                }
                catch(error){

                }
                this.validations.showSpinner = false
                this.validations.showButton = true
            }
            else{
                this.validations.showSpinner = true
                this.validations.showButton = false
                try{
                    const data = {
                        email: this.dataInfo.email,
                        type: "another"
                    }
                    const objService = new RegisterApplicationService()
                    await objService.sendEmailWithData(data, this.userID)

                    Swal.fire({
                        title: "¡Enviado!",
                        text: "Tu información será enviado al correo usado para crear tu cuenta.",
                        icon: "success"
                    });

                    this.$router.push('/perfil')
                }
                catch(error){

                }
                this.validations.showSpinner = false
                this.validations.showButton = true
            }



        }
    },
    watch: {
        'infoData.type_email': function(newValue, oldValue){
            if(this.infoData.type_email === "otro_correo"){
                this.validations.showSecondInput = true
            }
            else{
                this.validations.showSecondInput = false
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
.father-element{
    position: relative;
}
.child-element{
    position: absolute;
    right: 10px;
    top: 12px;
}
@media(max-width: 400px ){
    .margin-top-cel{
        margin-top: 10px;
    }
}

</style>