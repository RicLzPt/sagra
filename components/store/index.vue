<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/stores/myStore';

const store = useCounterStore();
const {increment} = store;
const {name, count, doubleCount } = storeToRefs(store);
</script>

<template>
    <div>
        {{ count }}
    </div>
    <div>
        <StoreSubStore />
    </div>
</template>

<style lang="scss" scoped>

</style>