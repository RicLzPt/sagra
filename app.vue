<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log("main");
console.log(runtimeConfig);
</script>

<template>
  <div>
    <NuxtLayout>
      <HeaderApp />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>

</style>