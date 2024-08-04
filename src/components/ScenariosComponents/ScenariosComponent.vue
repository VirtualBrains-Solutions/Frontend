<template>
    <h1 class = "margin-top-navbar">Listado de escenarios</h1>
    <p>Aquí podrás ver todos los escenarios disponibles en nuestra aplicación de realidad virtual. Podrás dejar tus comentarios, calificarlos y ver las opiniones de
    los demás usuarios.</p>
    <section class = "container-scenarios mt-4">
        <article v-for = "item in scenarios" :key = "item" class = "scenario-article">
            <ScenarioCardComponent :scenario = "item" />
        </article>
    </section>
</template>
<script>

import ScenarioCardComponent from "./ScenarioCardComponent.vue"

export default {
    components: {
        ScenarioCardComponent
    },
    props: {
        scenarios: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
.container-scenarios{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    place-items: center;
}
.scenario-article{
    width: 250px;
    height: 430px;
}
</style>