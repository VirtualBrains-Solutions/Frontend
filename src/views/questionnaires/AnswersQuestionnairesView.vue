<template>
    <h1 class = "margin-top-navbar">Respuestas de los cuestionarios</h1>
    <p>Aquí recibirás por correo todas las respuestas de todos los cuestionarios por parte de tus pacientes. Recuerda que solo podrás ver las respuestas de aquellos pacientes a los que les has creado un plan de terapia.</p>
    <article v-for = "patient in this.patients" class = "content-patient-data" v-if = "this.validations.showButton">
        <img :src = "patient.img_url_profile" alt="" class = "img-profile">
        <p class = "text-patient-name p-2">Nombre del paciente: {{patient.nombre}} {{patient.apellido}}</p>
        <button class = "btn btn-success w-100" @click = "sendEmailWithData(patient.id)">Ver respuestas</button>
    </article>
    <button class = "btn btn-primary btn-plus mt-10" v-if = "this.validations.showButton" @click = "$router.push('/cuestionarios')">Volver</button>
    <Spinner class = "mb-5" v-if = "this.validations.showSpinner"/>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
import Spinner from "../../components/General/Spinner.vue"
import {appStoreGeneral} from "../../store/AppStore";
import Swal from "sweetalert2";

export default{
    data(){
        return {
            validations:{
                showSpinner: false,
                showButton: true
            },
            medicalId: "",
            patients: []
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
    async created(){
        this.validations.showButton = false
        this.validations.showSpinner = true
        this.medicalId = this.appStore.getUserId
        // Get pacient's id
        try {
            const objService = new RegisterApplicationService()
            const response = await objService.getPatientsByMedicalId(this.medicalId)

            // Now get users info
            for(let i = 0; i < response.length; i++){
                const userInfo = await objService.getUserInfoById(response[i].paciente_id)
                console.log(userInfo)
                this.patients.push(userInfo[0])
            }
        }
        catch(error){
            console.log(error)
        }
        this.validations.showButton = true
        this.validations.showSpinner = false


    },
    methods: {
        async sendEmailWithData(id){
            this.validations.showButton = false
            this.validations.showSpinner = true
            try{
                const data = {
                    email: this.appStore.getUserEmail,
                    type: "another"
                }
                const objService = new RegisterApplicationService()
                await objService.sendEmailWithData(data, id)

                Swal.fire({
                    title: "¡Enviado!",
                    text: "Las respuestas de este paciente han sido enviadas a tu correo.",
                    icon: "success"
                });

            }
            catch(error){

            }
            this.validations.showButton = true
            this.validations.showSpinner = false
        }

    }
}
</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}
.btn-plus{
    width: 250px;
    font-size: 1.2rem;
    font-weight: bold;
}
.img-profile{
    width: 250px;
    height: 250px;
}
.content-patient-data{
    width: 250px;
}
.text-patient-name{
    margin-top: 10px;
}
</style>