<template>
    <h1 class = "margin-top-navbar">Sugerencias</h1>
    <p>Es fundamental para nosotros continuar mejorando nuestra plataforma.
        Por favor, déjanos tus sugerencias y ayúdanos a brindar un mejor servicio a más personas.</p>
    <h5>Tipo de sugerencia</h5>
    <div class="form-group father-element">
        <select  class="form-control" id="exampleFormControlSelect1" v-model = "this.infoSuggest.tipo_sugerencia">
            <option value="option1">Realidad Virtual</option>
            <option value="option2">Aplicación Web</option>
            <option value="option3">Otros</option>
        </select>
        <i class="fa-solid fa-angle-down child-element"></i>
    </div>
    <v-textarea class = "mt-4" label="Deja tu comentario" variant="outlined" v-model = "this.infoSuggest.comentario_sugerencia"></v-textarea>
    <button class = "btn btn-primary" @click = "this.createSuggest" v-if = "this.validations.showButton">Enviar</button>
    <spinner class = "mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import Swal from "sweetalert2";
import getCurrentDate from "../helpers/GetCurrentDate.js";
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../store/AppStore";
import Spinner from "../components/General/Spinner.vue"

export default{
    data(){
        return{
            infoSuggest: {
                "tipo_sugerencia": "",
                "comentario_sugerencia": "",
                "fecha_creacion": "",
                "usuario_id": 1
            },
            validations:{
                showSpinner: false,
                showButton: true
            }
        }
    },
    components:{
        Spinner
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    created() {
        this.infoSuggest.usuario_id = this.appStore.getUserId
    },
    methods:{
        async createSuggest(){
            if(this.infoSuggest.comentario_sugerencia === "" || this.infoSuggest.tipo_sugerencia === ""){
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "¡No puedes mandar una sugerencia vacía!",
                });
            }
            else{
                this.infoSuggest.fecha_creacion = getCurrentDate()
                this.validations.showSpinner = true
                this.validations.showButton =false
                try{
                    const objService = new RegisterApplicationService()
                    await objService.createSuggest(this.infoSuggest)
                    Swal.fire({
                        icon: "success",
                        title: "¡Sugerencia enviada!",
                        text: "Nuestro equipo revisará la sugerencia que nos has dejado lo antes posible. ¡Gracias!",
                    });
                    this.infoSuggest.tipo_sugerencia = ""
                    this.infoSuggest.comentario_sugerencia = ""
                }
                catch(error){
                    console.log(error)
                }
                this.validations.showSpinner = false
                this.validations.showButton = true

            }

        }

    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}

.father-element{
    position: relative;
}
.child-element{
    position: absolute;
    right: 10px;
    top: 12px;
}
</style>