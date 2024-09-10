<template>
    <h1 class = "margin-top-navbar">Reunión en un bar (Antes de usar la aplicación)</h1>
    <p>En este cuestionario, te invitamos a responder 14 preguntas relacionadas con tu experiencia que has tenido en un bar/lugar social. </p>
    <div class = "father-container-questions">
        <div class="form-group father-element">
            <label for="exampleFormControlSelect1">1) Al acercarte a una conversación grupal, ¿piensas que los demás no querrán hablar contigo?</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model = this.responses.question1>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect2">2) Cuando hablo con alguien del otro sexo, ¿me preocupa constantemente que me juzgue?</label>
            <select class="form-control" id="exampleFormControlSelect2" v-model = this.responses.question2>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect3">3) Mientras estoy hablando, ¿me preocupa si lo que estoy diciendo es irrelevante o aburrido?  </label>
            <select class="form-control" id="exampleFormControlSelect3" v-model = this.responses.question3>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect4">4) Después de hablar con alguien, ¿tiendo a sobrepensar y preocuparme por las cosas que dije durante la conversación?  </label>
            <select class="form-control" id="exampleFormControlSelect4" v-model = this.responses.question4>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect5">5) Antes de acercarme a hablar con alguien que no conozco, ¿pienso que me va a rechazar o ignorar?</label>
            <select class="form-control" id="exampleFormControlSelect5" v-model = this.responses.question5>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect6">6) ¿Siento que mi corazón late más rápido cuando estoy cerca de grupos de personas hablando? </label>
            <select class="form-control" id="exampleFormControlSelect6" v-model = this.responses.question6>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect7">7) Al acercarme a personas desconocidas, ¿siento que me empiezan a sudar las manos?</label>
            <select class="form-control" id="exampleFormControlSelect7" v-model = this.responses.question7>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect8">8) Cuando intento iniciar una conversación con alguien del otro sexo, ¿siento que mis manos o cuerpo tiemblan?</label>
            <select class="form-control" id="exampleFormControlSelect8" v-model = this.responses.question8>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect9">9) ¿Siento que mi cuerpo se tensa cuando estoy rodeado de personas hablando?</label>
            <select class="form-control" id="exampleFormControlSelect9" v-model = this.responses.question9>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect10">10) ¿Tiendo a evitar acercarme a grupos de personas para no tener que iniciar una conversación?</label>
            <select class="form-control" id="exampleFormControlSelect10" v-model = this.responses.question10>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect11">11) ¿Prefiero quedarme en un rincón o un lugar aislado?</label>
            <select class="form-control" id="exampleFormControlSelect11" v-model = this.responses.question11>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect12">12) ¿Tiendo a cruzar los brazos o evitar el contacto visual para sentirme más cómodo/a?</label>
            <select class="form-control" id="exampleFormControlSelect12" v-model = this.responses.question12>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect13">13) Si me siento incómodo/a, ¿suelo buscar una excusa para irme lo más rápido posible?</label>
            <select class="form-control" id="exampleFormControlSelect13" v-model = this.responses.question13>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
        <div class="form-group father-element">
            <label for="exampleFormControlSelect14">14) Cuando hablo con gente nueva, ¿a menudo me encuentro tartamudeando o teniendo dificultad para encontrar las palabras correctas?</label>
            <select class="form-control" id="exampleFormControlSelect14" v-model = this.responses.question14>
                <option></option>
                <option>Nunca</option>
                <option>Rara vez</option>
                <option>A veces</option>
                <option>Casi siempre</option>
                <option>Siempre</option>
            </select>
            <i class="fa-solid fa-angle-down child-element"></i>
        </div>
    </div>
    <Spinner class = "mb-5" v-if = "this.validations.showSpinner"/>
    <button class = "btn btn-success btn-plus margin-top-cel mb-5" v-if = "this.validations.showButton" @click = "this.createQuestionnairePreSocial">Enviar</button>
    <button class = "btn btn-primary btn-plus margin-top-cel mb-5 ml-3"  v-if = "this.validations.showButton"  @click = "$router.push('/cuestionarios')">Volver</button>
</template>
<script>

import RegisterApplicationService from "../../../core/RegisterApplicationService.js"
import {appStoreGeneral} from "../../../store/AppStore.js"
import getCurrentDate from "../../../helpers/GetCurrentDate.js"
import Spinner from "../../../components/General/Spinner.vue"
import Swal from "sweetalert2"


export default{
    components:{
        Spinner
    },
    setup(){
        const appStore = appStoreGeneral()
        return {
            appStore
        }
    },
    data(){
        return {
            responses: {
                usuario_id: "",
                fecha_creacion: "",
                question1: "",
                question2: "",
                question3: "",
                question4: "",
                question5: "",
                question6: "",
                question7: "",
                question8: "",
                question9: "",
                question10: "",
                question11: "",
                question12: "",
                question13: "",
                question14: ""
            },
            validations:{
                showSpinner: false,
                showButton: true
            }

        }
    },
    async created(){
        this.responses.usuario_id = this.appStore.getUserId
        this.responses.fecha_creacion = getCurrentDate()
        window.scrollTo(0, 0)
    },
    methods: {
        async createQuestionnairePreSocial(){
            if(this.responses.question1.length === 0 ||
                this.responses.question2.length === 0 ||
                this.responses.question3.length === 0 ||
                this.responses.question4.length === 0 ||
                this.responses.question5.length === 0 ||
                this.responses.question6.length === 0 ||
                this.responses.question7.length === 0 ||
                this.responses.question8.length === 0 ||
                this.responses.question9.length === 0 ||
                this.responses.question10.length === 0 ||
                this.responses.question11.length === 0 ||
                this.responses.question12.length === 0 ||
                this.responses.question13.length === 0 ||
                this.responses.question14.length === 0){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Debes responder las 14 preguntas",
                    icon: "warning"
                });
                return
            }
            else{
                this.validations.showButton = false
                this.validations.showSpinner = true
                try{
                    const objService = new RegisterApplicationService()
                    await objService.createQuestionnairePreSocial(this.responses)

                    Swal.fire({
                        title: "¡Genial!",
                        text: "Tus respuestas se enviaron correctamente",
                        icon: "success"
                    });

                    this.$router.push('/cuestionarios')
                }
                catch(error){
                    this.validations.showButton = true
                    this.validations.showSpinner = false
                    Swal.fire({
                        title: "¡Error!",
                        text: "Hubo un problema en el servidor",
                        icon: "error"
                    });
                    console.log(error)
                }

            }

        }

    }
}
</script>
<style scoped>
.father-container-questions{

}
.margin-top-navbar{
    margin-top: 70px;
}
.btn-plus{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
.father-element{
    position: relative;
    z-index: 0;
}
.child-element{
    position: absolute;
    right: 10px;
    top: 43px;
}
</style>