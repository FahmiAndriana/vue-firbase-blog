<template>
  <div class="home">
   <h1>Home</h1>
   <input type="text" v-model="search">
   <div v-for="(name, index) in resultSearch" :key="index">
     {{ name }}
     </div> 
     <button @click="handleClick">Click!</button>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
 export default {
name: 'Home',
setup() {
  const search = ref('')
  const names = ref(['Katlyn Lehmann', 'Darwin Tremaine', 
      'Noriko Stgelais', 'Shawna Fairbank', 'Zachery Raap', 'Ahmad Urenda', 'Raynon Lafrance', 
      'Caroyln Bolander','Sharell Satcher', 'Annett Purcell'])
  //fungsi watch
  const stop = watch (search, () =>{
    console.log('watch berjalan')
  })
  
  const stopEffect = watchEffect(() =>{
    console.log('watcheffect berjalan', search.value)
  })

   const handleClick = () => {
      stop()
      stopEffect()
   }

//fungsi search
  const resultSearch = computed (() =>{
    return names.value.filter((name) => name.includes(search.value))
  })

  return { names, search, resultSearch, handleClick }
}
  

 
 
}
</script>
