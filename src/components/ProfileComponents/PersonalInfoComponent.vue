<template>
    <h1 class = "mt-2">Información de usuario</h1>
    <img :src = "infoUser.img_url_profile" alt="" class = "profile-img">
    <div class="info-user">
        <p><span>Nombre</span>: {{infoUser.nombre}}</p>
        <p><span>Apellido</span>: {{infoUser.apellido}}</p>
        <p><span>Tipo de usuario</span>: {{infoUser.tipo_usuario}}</p>
        <p><span>Correo</span>: {{infoUser.email}}</p>
    </div>
    <button class = " ml-2 btn btn-danger">Eliminar usuario</button>
</template>
<script>
export default{
    props:{
        infoUser: {
            type: Object,
            required: true
        }
    }
}

</script>
<style scoped>
.profile-img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
.info-user{
    padding: 10px;
    margin-top: 5px;
}
.info-user{
    font-size: 1.5rem;
}
span{
    font-weight: bold;
}

</style>