<template>
    <h1 class = "mt-4">Iniciar Sesión</h1>
    <div class="container-form">
        <div class="container-form-element">
            <input type="text" placeholder="Correo" v-model = "this.userLogin.email">
        </div>
        <div class="container-form-element">
            <input type="password" placeholder="Contraseña" v-model = "this.userLogin.password">
        </div>
        <div class="container-form-question">
            <p>¿No tienes una cuenta?</p> <span class = "ml-2" @click = "$router.push('/registrarse')">Registrate</span>
        </div>
        <button class = "btn btn-primary mt-3" @click = "loginUser">Enviar</button>
    </div>
</template>
<script>
import RegisterApplicationService from "../core/RegisterApplicationService.js";
export default{
    data(){
        return {
            userLogin:{
                "email": "",
                "password": ""
            }

        }
    },
    methods:{
        async loginUser(){
            try{
                const objService = new RegisterApplicationService()
                const result = await objService.loginUser(this.userLogin)
                console.log(result)
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

</style>