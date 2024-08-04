<template>
    <h1 class = "margin-top-navbar">Recupera tu cuenta</h1>
    <div class="container-form-element">
        <v-text-field
            type = "text"
            label = "Ingresa el correo de tu cuenta"
            variant = "outlined"
            required
            v-model = "this.userInfo.email"
        >
        </v-text-field>
    </div>
    <button class = "btn btn-primary mt-3 btn-style" v-if = "this.validations.showButton" @click = "this.recoverPassword">Enviar</button>
    <button class = "btn btn-success mt-3 btn-style margin-top-cel" @click = "$router.push('/iniciar-sesion')" >Volver</button>
    <Spinner class = "mt-5 mb-2" v-if = "this.validations.showSpinner" />
</template>
<script>
import Spinner from "../components/General/Spinner.vue"
import RegisterApplicationService from "../core/RegisterApplicationService.js"
import Swal from "sweetalert2"

export default{
    data(){
        return {
            validations: {
                "showSpinner": false,
                "showButton": true
            },
            userInfo:{
              "email": ""
            }
        }
    },
    components:{
        Spinner

    },
    methods:{
        async recoverPassword(){
            if(this.userInfo.email.length === 0){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Debes ingresar tu correo.",
                    icon: "warning"
                });
                return
            }
            this.validations.showSpinner = true
            this.validations.showButton = false

            try{
                const objService = new RegisterApplicationService()
                await objService.recoverPassword(this.userInfo)

                Swal.fire({
                    title: "¡Genial!",
                    text: "Si el correo ingresado le pertenece a alguna cuenta, le llegará un correo para cambiar su contraseña. Revisa la bandeja de tu SPAM.",
                    icon: "success"
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
.btn-style{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
.margin-top-cel{
    margin-left: 10px;
}
@media(max-width: 600px ){
    .margin-top-cel{
        margin-top: 10px;
        margin-left: 0px;
    }
}

</style>