<template>
    <h1 class = "margin-top-navbar">Regístrate</h1>
    <div class="container-form">
        <div class="container-form-element">
            <v-text-field
                type = "text"
                label = "Nombre"
                variant = "outlined"
                required
                v-model = "this.userRegister.nombre"
            >
            </v-text-field>
        </div>
        <div class="container-form-element">
            <v-text-field
                type = "text"
                label = "Apellido"
                variant = "outlined"
                required
                v-model = "this.userRegister.apellido"
            >
            </v-text-field>
        </div>
        <div class="container-form-element">
            <v-text-field
                type = "text"
                label = "Correo"
                variant = "outlined"
                required
                v-model = "this.userRegister.email"
            >
            </v-text-field>
        </div>
        <div class="container-form-element">
            <v-text-field
                type = "password"
                label = "Contraseña"
                variant = "outlined"
                required
                v-model ="this.userRegister.password"
            >
            </v-text-field>
        </div>
        <div class="form-group father-element">
            <select  class="form-contro mt-1" id="styled-select" v-model = "this.userRegister.tipo_usuario">
                <option value="" selected>Seleccione el tipo de usuario</option>
                <option value="Paciente">Paciente</option>
                <option value="Médico">Médico</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <v-file-input label="Foto de perfil" v-model = "this.userPhoto" variant = "outlined" class = "mt-3"></v-file-input>
        <button class = "btn btn-primary mt-3 btn-register" @click = "createUser" v-if = "this.validations.showButton">Enviar</button>
        <div class="container-form-question mt-3">
            <span class = "ml-2" @click = "$router.push('/iniciar-sesion')" v-if = "this.validations.showButton">¿Ya tienes una cuenta?</span>
        </div>
        <Spinner  v-if = "this.validations.showSpinner" class = "mt-5 mb-5"/>
    </div>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import Swal from "sweetalert2"
import Spinner from "../components/General/Spinner.vue"
import getCurrentDate from "../helpers/GetCurrentDate.js";
import router from "../router";
import {appStoreGeneral} from "../store/AppStore";
export default{
    data(){
        return {
            userRegister: {
                "nombre": "",
                "apellido": "",
                "email": "",
                "fecha_nacimiento": "",
                "fecha_creacion": "",
                "password": "",
                "tipo_usuario": "",
                "img_url_profile": "",
                "estado_usuario": "Activo"
            },
            userEmailValidate: {
              "email": ""
            },
            userPhoto: "",
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
    methods: {
        async createUser(){
            if(this.userRegister.nombre === "" || this.userRegister.email === "" || this.userRegister.apellido === "" || this.userRegister.password === "" || this.userRegister.tipo_usuario === ""){
                Swal.fire({
                    title: "¡Espera!",
                    text: "Todos los campos son obligatorios",
                    icon: "warning"
                });
            }
            else{
                this.validations.showSpinner = true
                this.validations.showButton = false
                try {
                    this.userRegister.fecha_nacimiento = getCurrentDate()
                    this.userRegister.fecha_creacion = getCurrentDate()
                    const objService = new RegisterApplicationService()

                    this.userEmailValidate.email = this.userRegister.email

                    // Validate if there's a user with that email
                    const responseUserSearch = await objService.validateEmailPatient(this.userEmailValidate)

                    if(responseUserSearch.data.length > 0){
                        Swal.fire({
                            title: "¡Cuidado!",
                            text: "Ya existe una cuenta creada con ese correo",
                            icon: "warning"
                        });
                    }
                    else{
                        await objService.createUser(this.userRegister, this.userPhoto)

                        this.$router.push('/iniciar-sesion')

                        Swal.fire({
                            title: "¡Registrado!",
                            text: "Tu usuario se ha creado correctamente. Ahora inicia sesión.",
                            icon: "success"
                        });
                    }
                    this.validations.showButton = true
                    this.validations.showSpinner = false
                }
                catch(error){
                    this.validations.showButton = true
                    this.validations.showSpinner = false
                    console.log(error)
                }
            }
        }
    }
}

</script>
<style scoped>
.father-element{
    position: relative;
}
.child-element{
    position: absolute;
    right: 10px;
    top: 18px;
}
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
select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    appearance: none;
    background-color: #fff;
    cursor: pointer;
}
.btn-register{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}

</style>