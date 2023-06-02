 <script setup lang="ts">
const { x, y } = useMouse();
const isDark = usePreferredDark();
const store = useLocalStorage(
    'my-storage',
    {
        name: 'Apple',
        color: 'red',
    },
);
</script>
<template>
    <div class="main">
        <Alert />
        <Profile />
    </div>
    <div>pos: {{ x }}, {{ y }}</div>
    <div>isDark: {{ isDark }}</div>
    <div>store: {{ store }}</div>
</template>