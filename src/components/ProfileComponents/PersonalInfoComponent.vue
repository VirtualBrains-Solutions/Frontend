<template>
    <h1 class = "mt-2">Información de usuario</h1>
    <img :src = "infoUser.img_url_profile" alt="" class = "profile-img">
    <div class="info-user">
        <p><span>Nombre</span>: {{infoUser.nombre}}</p>
        <p><span>Apellido</span>: {{infoUser.apellido}}</p>
        <p><span>Tipo de usuario</span>: {{infoUser.tipo_usuario}}</p>
        <p><span>Correo</span>: {{infoUser.email}}</p>
    </div>
    <button class = " ml-2 btn btn-danger" @click = "deleteUserById">Eliminar usuario</button>
</template>
<script>
import Swal from "sweetalert2";
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
export default{
    props:{
        infoUser: {
            type: Object,
            required: true
        }
    },
    methods: {
        async deleteUserById(){
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Eliminarás toda tu información de la plataforma.",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, Eliminar",
                cancelButtonText: "Cancelar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "Tu usuario ha sido eliminado.",
                        icon: "success"
                    });

                    const objService = new RegisterApplicationService()

                    // Delete all the data

                    // First the comments
                    await objService.deleteAllCommentsByUserId(this.infoUser.id)

                    // Second, the suggests
                    await objService.deleteAllSuggestByUserId(this.infoUser.id)

                    // Third, clinic notes

                    // Fourth, the sessions
                   //await objService.deleteAllSessionsByUserId(this.infoUser.id)

                    // Fifth, the goals

                    // Sixth, the plans
                    //await objService.deleteAllPlansByUserId(this.infoUser.id)

                    // Then the favorites scenarios
                    await objService.deleteAllFavoritesScenariosByUserId(this.infoUser.id)

                    // Finally, the user
                    //await objService.deleteUserById(this.infoUser.id)
                    await objService.changeUserStatus(this.infoUser.id)

                    // Move to register
                    this.$router.push('/registrarse');
                }
            });
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