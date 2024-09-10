<template>
    <h1 class = "margin-top-navbar">Simulación de entrevista laboral (Antes de usar la aplicación)</h1>
    <p> En este cuestionario, te invitamos a responder 14 preguntas relacionadas con tu experiencia que has tenido en una entrevista laboral.</p>
    <div class = "father-container-questions">
        <div class="form-group father-element">
            <label for="exampleFormControlSelect1">1) Antes de responder una pregunta en una entrevista, ¿te preocupa decir algo incorrecto?</label>
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
            <label for="exampleFormControlSelect2">2) Durante la entrevista, ¿te preocupa constantemente que el entrevistador te esté juzgando negativamente?</label>
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
            <label for="exampleFormControlSelect3">3) Durante la entrevista, ¿piensas que no eres lo suficientemente bueno para la posición?</label>
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
            <label for="exampleFormControlSelect4">4) Antes de una entrevista laboral, ¿a menudo piensas en cancelar o evitar la entrevista por miedo o sentirte muy ansioso?</label>
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
            <label for="exampleFormControlSelect5">5) Después de una entrevista, ¿tiendes a repasar mentalmente todas las respuestas que diste y a criticarte por los errores?</label>
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
            <label for="exampleFormControlSelect6">6) Durante una entrevista laboral, ¿sientes que tu corazón late con mayor intensidad?</label>
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
            <label for="exampleFormControlSelect7">7) ¿Sientes que tus manos o frente comienzan a sudar cuando estás en una entrevista laboral?</label>
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
            <label for="exampleFormControlSelect8">8) Durante una entrevista, ¿notas que tu voz suena tensa o temblorosa cuando hablas?</label>
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
            <label for="exampleFormControlSelect9">9) ¿Sientes que tus músculos se tensan cuando estás siendo entrevistado/a?</label>
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
            <label for="exampleFormControlSelect10">10) Mientras estás siendo entrevistado/a, ¿tiendes a cruzar los brazos o adoptar una postura cerrada para sentirme más seguro/a?</label>
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
            <label for="exampleFormControlSelect11">11) Durante una entrevista, ¿te cuesta mantener el contacto visual con el entrevistador?</label>
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
            <label for="exampleFormControlSelect12">12) Durante la entrevista, ¿tiendes a jugar tus manos, morderte los labios o hacer movimientos repetitivos para lidiar con la ansiedad?</label>
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
            <label for="exampleFormControlSelect13">13) ¿Qué tan a menudo recurres a comportamientos de evitación, como revisar el celular o mirar hacia otro lado, cuando estás en la entrevista laboral?</label>
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
            <label for="exampleFormControlSelect14">14) Cuando te hacen una pregunta difícil, ¿intentas cambiar de tema o desviar la conversación durante la entrevista?</label>
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
                    await objService.createQuestionnairePreInterview(this.responses)

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