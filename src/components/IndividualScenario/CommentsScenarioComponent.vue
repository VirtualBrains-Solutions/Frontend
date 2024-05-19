<template>
    <div class="container-section-comments">
        <h1 class = "mt-2">Comentarios</h1>
        <div class="container-comments">
            <article v-for = "item in comments" class = "single-comment">
                <div class="info-comment">
                    <img :src = "item.img_url_profile" class = "img-profile-comment" alt="">
                    <p>{{item.texto}}</p>
                </div>
            </article>
            <div class="container-input-comment">
                <input type="text" placeholder="Escribe un comentario..." v-model = "this.commentInfo.texto">
                <button class = "btn btn-primary" v-on:click = "createComment">Enviar</button>
            </div>
        </div>
    </div>
</template>
<script>
import getCurrentDate from "../../helpers/GetCurrentDate.js";
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import Swal from "sweetalert2";
export default {
    data(){
        return {
            commentInfo: {
                texto: "",
                escenario_id: "",
                usuario_id: 1,
                fecha_creacion: ""
            }
        }
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    methods: {
        async createComment(){
            if(this.commentInfo.texto.length === 0){
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "¡No puedes ingresar un comentario vacío!",
                });
            }
            else{
                const registerService = new RegisterApplicationService()
                this.commentInfo.fecha_creacion = getCurrentDate()
                try{
                    await registerService.createComment(this.commentInfo)
                    window.location.reload();
                }
                catch(error){

                }
            }
        }
    },
    created(){
        const id = this.$route.params.id
        this.commentInfo.escenario_id = id
    }
}
</script>
<style scoped>
.container-section-comments{
    margin-left: 40px;
}
.container-comments{
    background-color: #343A40;
    padding: 10px;
    width: 40vw;
}
.single-comment{
    margin-top: 5px;
    color: white;
}
.img-profile-comment{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.info-comment{
    display: flex;
    align-items: center;
}
.info-comment p{
    margin: 1px 0 0 10px;
}
.container-input-comment{
    margin-top: 50px;
}
.container-input-comment input{
    padding: 10px;
    width: 80%;
    background-color: white;
}
.container-input-comment button{
    margin-left: 10px;
    padding: 10px;
    margin-bottom: 1px;
}
@media(max-width: 900px){
    .container-section-comments{
        margin-left: 0;
    }
    .container-comments{
        width: 95vw;
    }
    .container-input-comment button{
        margin: 10px 5px 5px 4px;

    }
}
</style>