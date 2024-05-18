<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from "@/components/General/NavbarComponent.vue"
</script>

<template>
    <NavbarComponent />
    <div class="container">
        <RouterView />
    </div>
</template>

<style scoped>

</style>
