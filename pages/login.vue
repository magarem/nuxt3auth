<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">username:</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  const username = ref('');
  const password = ref('');
  const error = ref('');
  
  const login = async () => {
    try {
      const response = await $fetch('/api/login', {
        method: 'POST',
        body: { username: username.value, password: password.value },
      });
  
      if (response.success) {
        // Armazena o token JWT (por exemplo, em localStorage)
        // localStorage.setItem('token', response.token);
  
        // Redireciona para a página protegida
        navigateTo('/dashboard');
      } else {
        error.value = response;
      }
    } catch (err) {
      error.value = 'Erro ao fazer login';
    }
  };
  </script>