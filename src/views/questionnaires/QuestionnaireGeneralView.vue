<template>
    <h1 class = "margin-top-navbar">Cuestionario general</h1>
    <p> Este cuestionario de 15 preguntas tiene como propósito conocerte mejor antes de que interactúes con alguno de los escenarios que hemos implementado. </p>
    <div class = "father-container-questions">
        <div class="form-group father-element">
            <label for="exampleFormControlSelect1">1)¿Te preocupa sentirte juzgado cuando interactúas en situaciones sociales?</label>
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
            <label for="exampleFormControlSelect2">2)¿Cuándo estás en una reunión social, ¿sueles sentir inseguridad de lo que dices o lo que haces?</label>
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
            <label for="exampleFormControlSelect3">3) Antes de interactuar con otras personas, ¿piensas en evitar la situación para no sentirme incómodo/a?</label>
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
            <label for="exampleFormControlSelect4">4) ¿Te sientes incómodo al interactuar con personas que recién conoces?</label>
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
            <label for="exampleFormControlSelect5">5) ¿A menudo te preocupa que te humillen o te ridiculicen en situaciones sociales?</label>
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
            <label for="exampleFormControlSelect6">6) Cuando estás en una situación social, ¿sientes un aumento en tu ritmo cardíaco?</label>
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
            <label for="exampleFormControlSelect7">7) ¿Sientes que tus manos sudan cuando interactúas con desconocidos?</label>
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
            <label for="exampleFormControlSelect8">8) Cuando estás en situaciones sociales, ¿tiendes a sentir rigidez o tensión en los músculos?</label>
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
            <label for="exampleFormControlSelect9">9) ¿Sientes dificultad para respirar cuando te encuentras en situaciones sociales incómodas?</label>
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
            <label for="exampleFormControlSelect10">10) Cuando estás en situaciones sociales, ¿sientes que tus manos o cuerpo tiemblan?</label>
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
            <label for="exampleFormControlSelect11">11) ¿Tiendes a evitar reuniones o eventos sociales para no sentirte ansioso/a?</label>
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
            <label for="exampleFormControlSelect12">12) Cuando te encuentras en una situación social, ¿tiendes a retirarte o aislarte?</label>
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
            <label for="exampleFormControlSelect13">13) Cuando estás en situaciones sociales, ¿tiendes a cruzar los brazos o evitar el contacto visual para sentirte más seguro/a?</label>
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
            <label for="exampleFormControlSelect14">14) ¿Te cuesta hablar de forma clara cuando estás ansioso/a en situaciones sociales?</label>
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
        <div class="form-group father-element">
            <label for="exampleFormControlSelect15">15) En situaciones sociales incómodas, ¿buscas excusas para irte lo antes posible?</label>
            <select class="form-control" id="exampleFormControlSelect15" v-model = this.responses.question15>
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
    <button class = "btn btn-success btn-plus margin-top-cel mb-5" v-if = "this.validations.showButton" @click = "this.createQuestionnaireGeneral">Enviar</button>
    <button class = "btn btn-primary btn-plus margin-top-cel mb-5 ml-3"  v-if = "this.validations.showButton"  @click = "$router.push('/cuestionarios')">Volver</button>
</template>
<script>

import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import {appStoreGeneral} from "../../store/AppStore";
import getCurrentDate from "../../helpers/GetCurrentDate.js";
import Spinner from "../../components/General/Spinner.vue";
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
                question14: "",
                question15: ""
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
    },
    methods: {
        async createQuestionnaireGeneral(){
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
                this.responses.question14.length === 0 ||
                this.responses.question15.length === 0){
                Swal.fire({
                    title: "¡Cuidado!",
                    text: "Debes responder las 15 preguntas",
                    icon: "warning"
                });
                return
            }
            else{
                this.validations.showButton = false
                this.validations.showSpinner = true
                try{
                    const objService = new RegisterApplicationService()
                    await objService.createQuestionnaireGeneral(this.responses)

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