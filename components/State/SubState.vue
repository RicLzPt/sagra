<script setup lang="ts">

const person: Ref = usePerson();
// person.value.name = 'John';
</script>

<template>
    <span>
        {{ person }}
    </span>
</template>

<style lang="scss" scoped>

</style>