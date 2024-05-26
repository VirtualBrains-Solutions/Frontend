<template>
    <h1 class = "mt-4">Planes</h1>
    <p>Aquí podrás registrar los planes de seguimiento de tus pacientes.
        Primero, debes crear el plan que seguirá tu paciente y luego establecer las metas a cumplir.</p>
    <button class = "btn btn-success"  @click = "$router.push('/planes/registrar')">Registrar Plan</button>
    <button class = "btn btn-primary ml-2" @click = "$router.push('/planes/medico')">Ver planes registrados</button>
</template>
<script>
import Swal from "sweetalert2"
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import Spinner from "../components/General/Spinner.vue"
import ListPlansMedicComponent from "../components/PlanComponents/ListPlansMedicComponent.vue"
import getCurrentDate from "../helpers/GetCurrentDate";
export default {
    components:{
        Spinner,
        ListPlansMedicComponent,
    },
    data(){
        return{
            planInfo: {
                fecha_creacion: "",
                especialista_id: 2,
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


</style>