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
            <option value="" selected>Seleccione opción</option>
            <option value="Paciente">Paciente</option>
            <option value="Médico">Médico</option>
        </select>
        <div class="container-form-element">
            <input type="file" placeholder="Sube tu foto">
        </div>
        <div class="container-form-question">
            <p>¿Ya tienes una cuenta?</p> <span class = "ml-2" @click = "$router.push('/iniciar-sesion')">Iniciar sesión</span>
        </div>
        <button class = "btn btn-primary mt-3" @click = "createUser">Enviar</button>
    </div>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import getCurrentDate from "../helpers/GetCurrentDate.js";
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
                "img_url_profile": ""
            }
        }
    },
    methods: {
        async createUser(){
            try{
                this.userRegister.fecha_nacimiento = getCurrentDate()
                this.userRegister.fecha_creacion = getCurrentDate()
                const objService = new RegisterApplicationService()
                await objService.createUser(this.userRegister)
            }
            catch(error){

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

</style>