<template>
    <h1 class = "margin-top-navbar">Respuestas de los cuestionarios</h1>
    <button class = "btn btn-primary btn-plus margin-top-cel" @click = "$router.push('/cuestionarios')">Volver</button>

</template>
<script>

export default{
    data(){
        return {

        }
    },
    async created(){

    },
    methods: {

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
</style>