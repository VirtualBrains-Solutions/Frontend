<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class = "container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active" @click = "$router.push('/escenarios')" >
                        <a class="nav-link" href="#">Escenarios <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active" @click = "$router.push('/sugerencias')" >
                        <a class="nav-link" href="#">Sugerencias</a>
                    </li>
                    <li class="nav-item active" @click = "$router.push('/cuestionarios')" >
                        <a class="nav-link" href="#">Cuestionarios</a>
                    </li>
                    <li class="nav-item active" @click = "$router.push('/planes')" >
                        <a class="nav-link" href="#">Planes</a>
                    </li>
                    <li class="nav-item active" @click = "$router.push('/perfil')" >
                        <a class="nav-link" href="#">Perfil</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button class="btn btn-danger my-2 my-sm-0"  @click = "$router.push('/iniciar-sesion')" >Cerrar Sesión</button>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>

</script>
<style scoped>
.white{
    color: white;
}
</style>