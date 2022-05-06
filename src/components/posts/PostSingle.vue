<template>
  <div>

      <router-link :to="{ name:'ShowPost', params:{ id: post.id }}" >
           
      </router-link>
      
      

  </div>
    <router-link :to="{ name:'ShowPost', params:{ id: post.id }}" >
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }} </p>
    </router-link>
    <span v-for="tag in post.tags" :key="tag" class="post-meta">
        <router-link :to="{ name: 'Tag', params: { tag: tag } }">
            #{{ tag }}
        </router-link>       
    </span>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
        //fungsi snippet utk mempersingkat tampilan paragraf
        const snippet = computed (() => {
            return props.post.body.substring(0, 50) + '...'        
            })

    return{ snippet }
    },
    

}
</script>

<style>

</style>