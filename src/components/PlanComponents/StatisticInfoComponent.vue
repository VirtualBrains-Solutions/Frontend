<template>
    <h2>Estadísticas</h2>
    <Pie :data = "this.data"></Pie>
</template>
<script>
import {Pie} from "vue-chartjs"
import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default{
    data(){
        return {

        }
    },
    props:{
      data: {
          type: Array
      }
    },
    components:{
        Pie
    }
}
</script>
<style scoped>

</style>