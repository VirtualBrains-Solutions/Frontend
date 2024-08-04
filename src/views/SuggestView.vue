<template>
    <h1 class = "margin-top-navbar">Sugerencias</h1>
    <p>Es fundamental para nosotros continuar mejorando nuestra plataforma.
        Por favor, déjanos tus sugerencias y ayúdanos a brindar un mejor servicio a más personas.</p>
    <h5>Tipo de sugerencia</h5>
    <select id="styled-select" v-model = "this.infoSuggest.tipo_sugerencia">
        <option value="option1">Realidad Virtual</option>
        <option value="option2">Aplicación Web</option>
        <option value="option3">Otros</option>
    </select>
    <v-textarea class = "mt-4" label="Deja tu comentario" variant="outlined" v-model = "this.infoSuggest.comentario_sugerencia"></v-textarea>
    <button class = "btn btn-primary" @click = "this.createSuggest">Enviar</button>
</template>
<script>
import Swal from "sweetalert2";
import getCurrentDate from "../helpers/GetCurrentDate.js";
import RegisterApplicationService from "../core/RegisterApplicationService.js";

export default{
    data(){
        return{
            infoSuggest: {
                "tipo_sugerencia": "",
                "comentario_sugerencia": "",
                "fecha_creacion": "",
                "usuario_id": 1
            }
        }
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

            }

        }

    }
}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
select {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    appearance: none;
    background-color: #fff;
    cursor: pointer;
}
</style>