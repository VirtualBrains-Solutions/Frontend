<template>
    <div class="container-section-comments">
        <h1 class = "mt-2">Comentarios</h1>
        <div class="container-comments">
            <article v-for = "item_father in comments" class = "single-comment mt-5">
                <div v-if = "item_father.comentario_padre_id === null">
                    <div class="info-comment">
                        <img :src = "item_father.img_url_profile" class = "img-profile-comment" alt="">
                        <div class="container-info-comment">
                            <p class = "username-comment">{{item_father.nombre}} {{item_father.apellido}}</p>
                            <div class = "container-info-comment-data">
                                <p>{{item_father.texto}} </p>
                                <i class="fa-solid fa-trash ml-2 icon-delete mt-1" v-if = "item_father.id[1] === this.appStore.getUserId" @click = "deleteComment(item_father.id[0])"></i>
                            </div>
                        </div>
                    </div>
                    <div v-if = "item_father.showAnswersOrResponse === false">
                        <p class = "response-comment" @click = "showAnswersOrResponse(item_father.id[0])" v-if = "item_father.totalComments === 0" >Responder</p>
                        <p class = "response-comment" @click = "showAnswersOrResponse(item_father.id[0])" v-else-if = "item_father.totalComments === 1" >Ver respuesta</p>
                        <p class = "response-comment" @click = "showAnswersOrResponse(item_father.id[0])" v-else>Ver {{item_father.totalComments}} respuestas</p>
                    </div>
                    <div v-else>
                        <p class = "response-comment" @click = "showAnswersOrResponse(item_father.id[0])">Ocultar</p>
                    </div>
                    <div v-if = "item_father.showAnswersOrResponse && item_father.totalComments > 0">
                        <article v-for = "item_child in comments" class = "single-comment mt-5">
                            <div v-if = "item_father.id[0] == item_child.comentario_padre_id">
                                <div class="info-comment ml-15">
                                    <img :src = "item_child.img_url_profile" class = "img-profile-comment-nested" alt="">
                                    <div class="container-info-comment">
                                        <p class = "username-comment">{{item_child.nombre}} {{item_child.apellido}}</p>
                                        <div class = "container-info-comment-data">
                                            <p>{{item_child.texto}} </p>
                                            <i class="fa-solid fa-trash ml-2 icon-delete mt-1" v-if = "item_child.id[1] === this.appStore.getUserId" @click = "deleteComment(item_child.id[0])"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class = "container-nested-comments" v-if = "item_father.showAnswersOrResponse">
                        <img :src = "this.img_url_profile" class = "img-profile-comment-nested" alt="">
                        <div class="container-nested-comments-input-button">
                            <input type="text" placeholder="Responder..." v-model = "this.commentChildInfo.texto">
                            <button class = "btn btn-primary" @click = "uploadAnswerComment(item_father.id[0])">Enviar</button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        <div class="container-input-comment">
            <img :src = "this.img_url_profile" class = "img-profile-comment  mb-2 photo-user-comment" alt="">
            <input type="text" placeholder="Escribe un comentario..." v-model = "this.commentInfo.texto">
            <button class = "btn btn-primary mb-1" v-on:click = "createComment">Enviar</button>
        </div>
    </div>
</template>
<script>
import getCurrentDate from "../../helpers/GetCurrentDate.js";
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../../store/AppStore.js";
import Swal from "sweetalert2";
export default {
    data(){
        return {
            commentInfo: {
                texto: "",
                escenario_id: "",
                usuario_id: "",
                fecha_creacion: ""
            },
            commentChildInfo: {
                texto: "",
                escenario_id: "",
                usuario_id: "",
                fecha_creacion: "",
                comentario_padre_id: ""
            },
            img_url_profile: "",
            comments: []
        }
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
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
                    this.commentInfo.usuario_id = this.appStore.getUserId
                    await registerService.createComment(this.commentInfo)
                    window.location.reload();
                }
                catch(error){

                }
            }
        },
        async deleteComment(id){
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Se eliminará tu comentario.",
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
                        text: "Tu comentario ha sido eliminado.",
                        icon: "success"
                    });
                    const registerService = new RegisterApplicationService()
                    await registerService.deleteCommentById(id)
                    window.location.reload();
                }
            });
        },
        showAnswersOrResponse(id){
            // Search if the current id is opened and wants to close
            let conditionCommentClose = false
            for(let i = 0; i < this.comments.length; i++){
                if(this.comments[i].id[0] === id && this.comments[i].showAnswersOrResponse){
                    this.comments[i].showAnswersOrResponse = false
                    conditionCommentClose = true
                }
            }

            // Close previous comments
            for(let i = 0; i < this.comments.length; i++) {
                if (this.comments[i].showAnswersOrResponse){
                    this.comments[i].showAnswersOrResponse = false
                }
            }
            if(!conditionCommentClose){
                for(let i = 0; i < this.comments.length; i++){
                    if(parseInt(this.comments[i].id[0]) === id) {
                        this.comments[i].showAnswersOrResponse = !this.comments[i].showAnswersOrResponse
                        break
                    }
                }
            }
        },
        async uploadAnswerComment(id){
            const registerService = new RegisterApplicationService()
            this.commentChildInfo.fecha_creacion = getCurrentDate()
            try{
                this.commentChildInfo.usuario_id = this.appStore.getUserId
                this.commentChildInfo.comentario_padre_id = id
                await registerService.createCommentChild(this.commentChildInfo)
                window.location.reload();
            }
            catch(error){

            }
        }
    },
    mounted() {
    },
    async created(){
        const id = this.$route.params.id
        this.commentInfo.escenario_id = id
        this.commentChildInfo.escenario_id = id

        const objService = new RegisterApplicationService()
        this.comments = await objService.getCommentsFromScenario(id)

        this.img_url_profile = this.appStore.getURLPhoto

        // Add the property to show answers or responde a comment
        for(let i = 0; i < this.comments.length; i++){
            this.comments[i].showAnswersOrResponse = false
            this.comments[i].totalComments = 0
        }

        // Set total commnents
        for(let i = 0; i < this.comments.length; i++){
            for(let j = 0; j < this.comments.length; j++){
                if(this.comments[i].id[0] === parseInt(this.comments[j].comentario_padre_id)){
                    this.comments[i].totalComments += 1
                }
            }
        }
    }
}
</script>
<style scoped>
.container-nested-comments-input-button{
    background-color: #3A3B3C;
    margin-left: 10px;
    padding: 10px;
    width: 100%;
    border-radius: 15px;
}
.container-nested-comments-input-button input{
    color: white;
    width: 80%;
}
.container-nested-comments-input-button button{
    margin-left: 15px;
}
.img-profile-comment-nested{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 5px
}
.container-nested-comments{
    padding: 5px;
    display: flex;
    margin-top: 10px;
    margin-left: 55px;
}
.response-comment{
    margin-left: 65px;
    margin-top: 5px;
    color: #B0B3B8;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
}
.username-comment{
    font-size: 12px;
    font-weight: bold;
}
.container-section-comments{
    margin-left: 40px;
}
.container-comments{
    background-color: #242526;
    padding: 10px;
    width: 40vw;
    height: 400px;
    overflow-y: scroll;
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
.photo-user-comment{
    margin-left: 10px;
}
.info-comment{
    display: flex;
    align-items: center;
}
.info-comment p{
    margin: 1px 0 0 10px;
}
.container-input-comment{
    width: 100%;
    background-color: #242526;
}
.container-info-comment{
    margin-left: 10px;
    border-radius: 15px;
    width: 100%;
    padding: 5px;
    background-color: #3A3B3C;
}
.container-input-comment input{
    padding: 10px;
    width: 65%;
    margin-left: 10px;
    background-color: white;
}
.container-input-comment button{
    margin-left: 10px;
    padding: 10px;
    width: 120px;
    font-weight: bold;
}
.icon-delete{
    font-size:20px;
    cursor: pointer;
}
.container-info-comment-data{
    display: flex;
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
    .container-input-comment button{
        margin-left: 10px;
        padding: 10px;
        width: 120px;
        font-weight: bold;
    }
}
</style>