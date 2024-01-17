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

<script setup lang="ts">
const email = ref('');
const apiRoute = ref('/api/email?username=JaneSmith')

const fetchAPI = async () => {
  console.log('fetch api route: ', apiRoute.value);
  const result = await $fetch('/api/email', {
    method: 'post',
    body: JSON.stringify({
      username: 'Jane Smith'
    })
  });
  email.value = result;
};

onMounted(() => {
    console.log('apiRoute: ', apiRoute.value)
})
</script>