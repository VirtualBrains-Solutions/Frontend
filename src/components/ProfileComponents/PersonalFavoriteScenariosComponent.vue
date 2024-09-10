<template>
    <h2 class = "mt-4">Mapas Favoritos</h2>
    <section class = "container-favorite-scenarios">
        <article v-for = "item in scenarios" class = "article-favorite-scenario">
            <img :src = "item.img_url" alt="" class = "scenario-img">
            <p class = "mt-2">{{item.nombre_escenario}}</p>
            <div class="flex-center">
                <button class = "btn btn-success "  @click = "$router.push(`/escenarios/${item.escenario_id}`)">Ver</button>
                <button class = "btn  ml-4 btn-danger" @click = "deleteFavoriteScenario(item.id)">Quitar</button>
            </div>
        </article>
    </section>
    <p class = "ml-1"  v-if = "scenarios.length === 0">No tienes mapas favoritos.</p>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import Swal from "sweetalert2";
export default{
    props: {
        scenarios: {
            type: Array,
            required: true
        }
    },
    methods:{
        async deleteFavoriteScenario(id){
            try{
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "Se eliminará de tu lista de escenarios favoritos.",
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
                            text: "El escenario ha sido eliminado de tu lista de escenarios favoritos.",
                            icon: "success"
                        });
                        const objService = new RegisterApplicationService()
                        await objService.deleteFavoriteScenario(id[0])
                        window.location.reload();
                    }
                });
            }
            catch(error){

            }
        }
    }
}

</script>
<style scoped>
.scenario-img{
    width: 200px;
    height: 200px;
}
.container-favorite-scenarios{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-bottom: 10px;
}
.article-favorite-scenario{
    width: 200px;
}


</style>