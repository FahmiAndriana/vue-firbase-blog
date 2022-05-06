<template>
 <div >
   <!-- Page Header-->
        <header class="masthead" >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">Posts by tag</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <!--checj error untuk fake json-->
                  <div v-if="error">{{ error }} </div>
                  <div v-if="posts.length">
                     <PostList  :posts="postWithTag"/>
                  </div>
                  <div v-else>
                    <Loading />
                  </div>

                                       
                </div>
            </div>
        </div>



 </div>
          
</template>

<script>

import { reactive, ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
import PostList from '@/components/posts/PostList.vue'
import getPosts from '@/composable/getPosts'
import Loading from '@/components/Loading.vue'
import HomeImg from '@/assets/img/home-bg.jpg'
import { useRoute, useRouter } from 'vue-router'
 export default {
name: 'Tag',
components:{
  PostList,
  Loading,
  HomeImg

},
setup() {
    
      const route = useRoute()  
      const { posts, error, load} = getPosts ()

      //fungsi onUnMounted, untuk menampilkan dan menyembunyikan tampilan post
      const showPosts = ref(true)


      
      load()

      const postWithTag = computed(() => {
          return posts.value.filter((p) => p.tags.includes(route.params.tag))

      })

      return { showPosts, posts, error, postWithTag }
},
mounted(){
  console.log($('para').text())
}
}
</script>

<style>
#masthead{
  background-image: url('@/assets/img/home-bg.jpg')
  }
</style>


