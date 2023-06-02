<script setup lang="ts">

const person: Ref = usePerson();

const person2: Ref = usePerson();

</script>

<template>
    <div>
        Person: {{ person }} - {{ person }} <br />
        <!-- Person: {{ person2.name }} - {{ person2.age }} <br /> -->
        <button @click="person++">
            +
        </button>
        <button @click="person--">
            -
        </button>
    </div>
    <div>
        <StateSubState />
    </div>
</template>