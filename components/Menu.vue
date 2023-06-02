 <script setup lang="ts">

</script>

<template>
    <div>
        <ul>
          <li>
            <NuxtLink to="/">Home2</NuxtLink>
            <NuxtLink to="/custom-page">Custom</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
            <NuxtLink to="/events/12">Events 12</NuxtLink>
            <NuxtLink to="/state">State</NuxtLink>
            <NuxtLink to="/store">Store</NuxtLink>
            <StateSubState />
          </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>