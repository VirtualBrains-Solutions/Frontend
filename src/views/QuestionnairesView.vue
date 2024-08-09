<template>
    <h1 class = "margin-top-navbar">Cuestionarios</h1>
    <p>En esta sección, podrás responder los diferentes cuestionarios de cada mapa de la aplicación de realidad virtual y
        contarnos cómo te sentiste. De esta manera, podremos conocer tu experiencia antes y después de usar la aplicación.</p>
    <button class = "btn btn-success mb-2" v-if = "this.appStore.getIsMedic" @click = "$router.push('/cuestionarios/respuestas')" >Ver respuestas de tus pacientes</button>
    <h2>Cuestionario General </h2>
    <p>Este primer cuestionario es para conocerte mejor y saber las causas que provocan tu ansiedad social en diferentes entornos.</p>
    <button class = "btn btn-primary" @click = "$router.push('/cuestionarios/general')">Responder cuestionario</button>
    <hr>
    <h1>Antes de usar la aplicación de realidad virtual</h1>
    <h3>Reunión en un bar</h3>
    <p>Aquí nos contarás cómo te sentirías en un bar con gente que recién conoces o con gente desconocida.</p>
    <button class = "btn btn-primary" @click = "$router.push('/cuestionarios/reunionbar/antes')">Responder cuestionario</button>
    <h3 class = "mt-2">Entrevista laboral</h3>
    <p>Aquí nos contarás cómo te sentirías en una entrevista laboral.</p>
    <button class = "btn btn-primary" @click = "$router.push('/cuestionarios/entrevista/antes')">Responder cuestionario</button>
    <hr>
    <h1>Después de usar la aplicación de realidad virtual</h1>
    <h3>Reunión en un bar</h3>
    <p>Aquí nos contarás cómo te sientes luego de sumergirte en el escenario de realidad virtual de una reunión en un bar.</p>
    <button class = "btn btn-primary" @click = "$router.push('/cuestionarios/reunionbar/despues')">Responder cuestionario</button>
    <h3 class = "mt-2">Entrevista laboral</h3>
    <p>Aquí nos contarás cómo te sientes luego de sumergirte en el escenario de realidad virtual de una entrevista laboral.</p>
    <button class = "btn btn-primary" @click = "$router.push('/cuestionarios/entrevista/despues')">Responder cuestionario</button>
    <div class = "mt-3"></div>
</template>
<script>
import {appStoreGeneral} from "../store/AppStore.js";
export default{
    data(){
        return {

        }
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}

</style>