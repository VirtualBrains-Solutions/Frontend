<template>
    <h1 class = "mt-4">Regístrate</h1>
    <div class="container-form">
        <div class="container-form-element">
            <input type="text" placeholder="Nombre" v-model = "this.userRegister.nombre">
        </div>
        <div class="container-form-element">
            <input type="text" placeholder="Apellido" v-model = "this.userRegister.apellido">
        </div>
        <div class="container-form-element">
            <input type="text" placeholder="Correo" v-model = "this.userRegister.email">
        </div>
        <div class="container-form-element">
            <input type="password" placeholder="Contraseña" v-model ="this.userRegister.password">
        </div>
        <select id="styled-select" class = "mt-1" v-model = "this.userRegister.tipo_usuario">
            <option value="" selected>Seleccione el tipo de usuario</option>
            <option value="Paciente">Paciente</option>
            <option value="Médico">Médico</option>
        </select>
        <v-file-input label="Foto de perfil" v-model = "this.userPhoto" variant = "outlined" class = "mt-3"></v-file-input>
        <button class = "btn btn-primary mt-3 btn-register" @click = "createUser" v-if = "this.validations.showButton">Enviar</button>
        <div class="container-form-question mt-3">
            <span class = "ml-2" @click = "$router.push('/iniciar-sesion')">¿Ya tienes una cuenta?</span>
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
                    await objService.createUser(this.userRegister, this.userPhoto)

                    this.$router.push('/iniciar-sesion')

                    Swal.fire({
                        title: "¡Registrado!",
                        text: "Tu usuario se ha creado correctamente. Ahora inicia sesión.",
                        icon: "success"
                    });
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