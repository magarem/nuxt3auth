<script setup>
const { data: ret } = await useFetch('/api/user');
if (!ret.value) {
    // alert('Você não está logado')
  navigateTo('/login')
}
const logout = async () => {
  await $fetch('/api/logout')
  useCookie('auth_token').value = null
  navigateTo('/login')
}
</script>

<template>
  <div><h1>🔒 Bem vindo {{ ret.user.nome }}</h1>
    <!-- {{ !user ? 'Carregando...' : user.name }} -->
    <br>
  <button @click="logout">Sair</button>
  </div>
</template>
