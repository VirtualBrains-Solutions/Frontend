<template>
    <h1 class = "margin-top-navbar">Agregar Meta</h1>
    <v-textarea class = "mt-4" label="Descripción de la meta" variant="outlined" v-model = "this.goalInfo.descripcion"></v-textarea>
    <button class = "btn btn-success" @click = "registerGoal" v-if = "this.validations.showButton">Agregar</button>
    <button class = "btn btn-danger ml-4" @click = "$router.push(`/planes/${this.planId}`)" v-if = "this.validations.showButton">Volver</button>
    <Spinner v-if = "this.validations.showSpinner" class = "mb-5 mt-5"/>
</template>
<script>
import Swal from "sweetalert2"
import RegisterApplicationService from "../core/RegisterApplicationService.js";
import Spinner from "../components/General/Spinner.vue"
export default {
    components: {
      Spinner
    },
    data(){
        return {
            goalInfo: {
                plan_id: "",
                descripcion: "",
                estado_meta: "Falta"
            },
            planId: "",
            validations:{
                showButton: true,
                showSpinner: false
            }
        }
    },
    methods:{
      async registerGoal(){
          try{
              if(this.goalInfo.descripcion === ""){
                  Swal.fire({
                      icon: "warning",
                      title: "Oops...",
                      text: "¡La descripción es obligatoria!",
                  });
              }
              else {
                  // Active spinner
                  this.validations.showSpinner = true
                  this.validations.showButton = false
                  // Set plan id
                  this.goalInfo.plan_id = this.planId
                  const objService = new RegisterApplicationService()
                  await objService.createGoal(this.goalInfo)
                  Swal.fire({
                      icon: "success",
                      title: "¡Meta agregada!",
                      text: "La meta se ha registado correctamente.",
                  });
                  this.goalInfo.descripcion = ""
                  this.validations.showSpinner = false
                  this.validations.showButton = true

              }
          }
          catch(error){
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Hubo un problema al crearse el registro.",
              });

          }
      }
    },
    created(){
        this.planId = this.$route.params.id
    }

}

</script>
<style scoped>
.margin-top-navbar{
    margin-top: 70px;
}

</style>