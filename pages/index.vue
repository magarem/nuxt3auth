<template>
    <div>
      <h1>Frontend Nuxt 3</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  const { data: message } = await useFetch('/api/hello');
  
  console.log(message.value);
  
  </script>