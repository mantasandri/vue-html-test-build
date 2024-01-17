<script setup lang="ts">
const email = ref('');

const fetchAPI = async () => {
  const result = await $fetch('/api/email', {
    method: 'post',
    body: JSON.stringify({
      username: 'Jane Smith'
    })
  });
  console.log(result);
  email.value = result;
};

onMounted(() => {
  const result = await $fetch('/api/email');
  console.log(result);
  email.value = result;
})
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
