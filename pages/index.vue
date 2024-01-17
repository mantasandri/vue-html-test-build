<script setup lang="ts">
const email = ref('');

const fetchAPI = async () => {
  const apiRoute = '/api/email?username=JaneSmith'
  console.log(apiRoute);
  const result = await useFetch(apiRoute);
  console.log(result);
  email.value = result;
};
</script>

<template>
  <div>
    <button @click.prevent="fetchAPI">Fetch Email</button>
    <hr />
    <div>
      <h1>Email Output</h1>
      <div v-html="email" />
    </div>
  </div>
</template>
