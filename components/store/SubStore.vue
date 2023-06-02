<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/stores/myStore';

const store = useCounterStore();
const { increment } = store;
const { name, count, doubleCount } = storeToRefs(store);
</script>

<template>
    <div>
        {{ doubleCount }}
    </div>
    <div>
        <button @click="increment">Increment</button>
    </div>
</template>

<style lang="scss" scoped></style>