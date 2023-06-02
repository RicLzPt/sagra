 <script setup lang="ts">
console.log(useNuxtApp());
const route = useRoute();

console.log(route.params);

</script>

<template>
    <div>
        <h1>Event: {{ $route.params.id }}</h1>
    </div>
</template>