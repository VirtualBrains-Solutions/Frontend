<template>
    <h1 class = "margin-top-navbar">Cuestionario general</h1>
    <div class="form-group father-element">
        <label for="exampleFormControlSelect1">¿Cómo te sentiste?</label>
        <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <i class="fa-solid fa-angle-down child-element"></i>
    </div>
    <button class = "btn btn-primary btn-plus margin-top-cel" @click = "$router.push('/cuestionarios')">Volver</button>

</template>
<script>

export default{
    data(){
        return {

        }
    },
    async created(){

    },
    methods: {

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
.father-element{
    position: relative;
}
.child-element{
    position: absolute;
    right: 10px;
    top: 43px;
}
</style>