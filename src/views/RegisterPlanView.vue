<template>
    <h1 class = "margin-top-navbar">Registrar Plan</h1>
    <v-text-field
        type = "text"
        ref = "myComboBox"
        label = "Nombre"
        variant = "outlined"
        class = "input-number"
        v-model = "this.planInfo.nombre_plan"
        required
    >
    </v-text-field>
    <v-textarea  label="Descripción" variant="outlined" v-model = "this.planInfo.descripcion_plan"></v-textarea>
    <v-text-field
        type = "text"
        ref = "myComboBox"
        label = "Correo del paciente"
        variant = "outlined"
        class = "input-number"
        v-model = "this.emailPatientInfo.email"
        required
    >
    </v-text-field>
    <button class = "btn btn-primary" @click = "createPlan" v-if = "this.validations.showButton">Crear plan</button>
    <button class = "btn btn-danger ml-2" @click = "$router.push('/planes')" v-if = "this.validations.showButton" >Regresar</button>
    <Spinner class = "mt-2 mb-2 ml-2" v-if = "this.validations.showSpinner"/>
</template>
<script>
import Swal from "sweetalert2"
import RegisterApplicationService from "../core/RegisterApplicationService"
import Spinner from "../components/General/Spinner.vue"
import getCurrentDate from "../helpers/GetCurrentDate";
import {appStoreGeneral} from "../store/AppStore.js";

export default {
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
        return{
            planInfo: {
                fecha_creacion: "",
                especialista_id: "",
                paciente_id: "",
                descripcion_plan: "",
                nombre_plan: ""
            },
            emailPatientInfo: {
                email: ""
            },
            validations:{
                showSpinner: false,
                showButton: true
            }
        }
    },
    methods: {
        async createPlan(){
            // Change validations
            this.validations.showButton = false
            this.validations.showSpinner = true
            // First, validate all info
            if(this.planInfo.nombre_plan.length === 0 || this.planInfo.descripcion_plan.length === 0 || this.emailPatientInfo.email.length === 0){
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "¡Todos los campos son obligatorios!",
                });
                this.validations.showButton = true
                this.validations.showSpinner = false
            }
            else{
                // Second, we need to validate the user's email
                const objService = new RegisterApplicationService()
                try{
                    const response = await objService.validateEmailPatient(this.emailPatientInfo)
                    if(response.data.length > 0){
                        try{
                            // Set the date
                            this.planInfo.fecha_creacion = getCurrentDate()
                            // Set the patient id
                            this.planInfo.paciente_id = response.data[0].id
                            //  Before to create the plan, set the medic id
                            this.planInfo.especialista_id = this.appStore.getUserId
                            // Now, we create the plan
                            await objService.createPlan(this.planInfo)
                            Swal.fire({
                                icon: "success",
                                title: "¡Plan creado!",
                                text: "El plan se ha creado correctamente.",
                            });
                            this.validations.showButton = true
                            this.validations.showSpinner = false

                            // Reset plan info
                            this.planInfo.nombre_plan = ""
                            this.planInfo.descripcion_plan = ""
                            this.planInfo.fecha_creacion = ""
                            this.planInfo.paciente_id = ""

                            this.emailPatientInfo.email = ""
                        }
                        catch(error){

                        }

                    }
                    else{
                        Swal.fire({
                            icon: "warning",
                            title: "Oops...",
                            text: "¡El correo ingresado no le pertenece a ningún paciente!",
                        });
                        this.validations.showButton = true
                        this.validations.showSpinner = false
                    }
                }
                catch(error){
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Hubo un problema al crearse el registro.",
                    });
                    this.validations.showButton = true
                    this.validations.showSpinner = false
                }
            }

            // Change validations
            //this.validations.showButton = true
            //this.validations.showSpinner = false
        }
    }
}


</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}


</style>