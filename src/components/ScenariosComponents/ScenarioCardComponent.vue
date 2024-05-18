<template>
    <img :src = "scenario.img_url" alt="" class = "scenario-img">
    <div class="scenario-data">
        <p>{{scenario.nombre_escenario}}</p>
        <p>Número de likes: {{scenario.num_likes}}</p>
        <p>Número de dislikes: {{scenario.num_dislikes}}</p>
        <button class = "btn btn-primary w-100" @click = "$router.push(`/escenarios/${scenario.id}`)" >Ver</button>
    </div>
</template>
<script>
export default {
    props: {
        scenario: {
            type: Object,
            required: true
        }
    }
}

</script>
<style scoped>
.scenario-img{
    width: 240px;
    height: 250px;
}
.scenario-data{
    padding: 10px;
}

</style>