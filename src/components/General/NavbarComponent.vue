<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class = "container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active" v-if = "appStore.getLogeado" @click = "$router.push('/escenarios')" >
                        <a class="nav-link" href="#">Escenarios <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active" v-if = "appStore.getLogeado" @click = "$router.push('/sugerencias')" >
                        <a class="nav-link" href="#">Sugerencias</a>
                    </li>
                    <li class="nav-item active" v-if = "appStore.getLogeado" @click = "$router.push('/cuestionarios')" >
                        <a class="nav-link" href="#">Cuestionarios</a>
                    </li>
                    <li class="nav-item active" v-if = "appStore.getLogeado" @click = "$router.push('/planes')" >
                        <a class="nav-link" href="#">Planes</a>
                    </li>
                    <li class="nav-item active" v-if = "appStore.getLogeado" @click = "$router.push('/perfil')" >
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
                </ul>
                <div class="form-inline my-2 my-lg-0">
                    <button class="btn btn-danger my-2 my-sm-0"  v-if = "appStore.getLogeado" @click = "logoutUser" >Cerrar Sesión</button>
                    <button class="btn btn-primary my-2 my-sm-0"  v-else  @click = "$router.push('/iniciar-sesion')" >Iniciar Sesión</button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>

import {appStoreGeneral} from "../../store/AppStore.js";
export default {
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    methods: {
        logoutUser(){
            // Remove LocalStorage
            localStorage.removeItem("userInfo")
            // Delete the info
            this.appStore.deleteUserInfo()
            // Move
            this.$router.push('/iniciar-sesion');
        }
    }
}
</script>
<style scoped>
.white{
    color: white;
}
</style>