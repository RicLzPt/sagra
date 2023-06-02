 <script setup lang="ts">
definePageMeta({
    layout: "custom",
    middleware: ["auth"],
});
</script>

<template>
    <div class="main">
        <Alert />
        <Profile />
        <img src="~/assets/test.png" alt="" />
        <IconsBell class="text-yellow-100 w-20 h-20" />
    </div>
</template>