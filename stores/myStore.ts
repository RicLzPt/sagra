import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', () => {
  const count: Ref = ref(0)
  const name: Ref = ref('Eduardo')
  const doubleCount: ComputedRef = computed(() => count.value * 2)

  function increment(): void {
    count.value++
  }

  function $reset(): void {
    count.value = 0;
    name.value = 'Ricardo';
  }

  return { count, name, doubleCount, increment, $reset }
})