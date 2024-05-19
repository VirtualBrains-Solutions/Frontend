<template>
    <div class="container-scenario">
        <div class="container-title-icons">
            <h1 class = "mt-2">{{scenarioInfo.nombre_escenario}}</h1>
        </div>
        <img :src = "scenarioInfo.img_url" alt="" class = "scenario-img">
        <div class="container-reactions">
            <div class="container-reaction">
                <span>{{scenarioInfo.num_likes}}</span>
                <i class="fa-solid fa-thumbs-up reaction-icon" @click = "changeLikes"></i>
            </div>
            <div class="container-reaction">
                <span>{{scenarioInfo.num_dislikes}}</span>
                <i class="fa-solid fa-thumbs-down reaction-icon" @click = "changeDislikes"></i>
            </div>
        </div>
    </div>
</template>
<script>
import RegisterApplicationService from "../../core/RegisterApplicationService.js";
export default {
    props: {
        scenarioInfo: {
            type: Object,
            required: true
        }
    },
    methods: {
        async changeLikes(){
            try{
                const id = this.$route.params.id
                const objService = new RegisterApplicationService()
                await objService.changeLikesScenario(id, {num:this.scenarioInfo.num_likes + 1})
                window.location.reload();
            }
            catch(error){
                console.log(error)
            }
        },
        async changeDislikes(){
            try{
                const id = this.$route.params.id
                const objService = new RegisterApplicationService()
                await objService.changeDislikesScenario(id, {num:this.scenarioInfo.num_dislikes + 1})
                window.location.reload();
            }
            catch(error){
                console.log(error)
            }
        }
    }
}

</script>
<style scoped>
.reaction-icon{
    cursor: pointer
}
.container-title-icons{
    display: flex;
    align-items: center;
}
.container-scenario{
    width: 650px;
}
.container-reactions{
    display: flex;
    margin-top: 5px;
}
.container-reaction{
    margin: 5px 0 0 10px;
}
.container-reaction span{
    margin-right: 5px;
}
.scenario-img{
    width: 600px;
    height: 400px;
}
@media(max-width: 900px){
    .scenario-img{
        width: 80vw;
    }
}

</style>