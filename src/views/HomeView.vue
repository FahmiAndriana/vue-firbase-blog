<template>

   <!-- Page Header-->
        <header class="masthead" >
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
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
                     <PostList v-if="showPosts" :posts="posts"/>
                  </div>
                  <div v-else>
                    <Loading />
                  </div>

                                       
                </div>
            </div>
        </div>



 
          
</template>

<script>
import _ from 'lodash'
import { reactive, ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
import PostList from '../components/posts/PostList.vue'
import getPosts from '../composable/getPosts'
import Loading from '../components/Loading.vue'
import HomeImg from '../assets/img/home-bg.jpg'
 export default {
name: 'Home',
components:{
  PostList,
  Loading,
  HomeImg

},
setup() {
      const { posts, error, load} = getPosts ()

      //fungsi onUnMounted, untuk menampilkan dan menyembunyikan tampilan post
      const showPosts = ref(true)


      
      load()

      return { showPosts, posts, error }
},

}
</script>

<style>
#masthead{
  background-image: url('@/assets/img/home-bg.jpg')
  }
</style>


