<script setup lang="ts">
useHead({
    title: "Store Page",
});
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/stores/myStore';


const store = useCounterStore();
store.$reset();
const { increment } = store;
const { name, count, doubleCount } = storeToRefs(store);
console.log('Store');

const { api } = await $fetch('/api/hello');
console.log(api);
</script>

<template>
    <div>
        {{ name }}
        {{ count }}
        {{ doubleCount }}
        {{ api }}
    </div>
    <div>
        <Store />
    </div>
    <div>
        <State />
    </div>
    <button @click="increment">Increment</button>
</template>

<style lang="scss" scoped></style>