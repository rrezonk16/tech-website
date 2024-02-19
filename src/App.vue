<script setup>
import AdminNav from './components/Admin/AdminNav.vue';
import NavigationBar from './components/NavigationBar.vue';
import TheFooter from './components/TheFooter.vue';
const roles = localStorage.getItem('role');
console.log(roles)
const isAdmin = roles==='admin';
console.log(isAdmin)

</script>

<template>
    <NavigationBar v-if="!isAdmin" />
    <AdminNav v-if="isAdmin"/>

    <TheFooter />
</template>
