<template>
    <div v-for="post in posts" :key="post.id">
        <div class="post-preview" >
        <PostSingle :post="post"/>       
        </div>
        <!-- Divider-->
        <hr class="my-4" />
    </div>
    
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import PostSingle from './PostSingle.vue';

export default {
    props: ['posts'],
    setup (props) {
        onMounted(() => console.log('component onMounted'))
        onUnmounted (() => console.log('component onUnMounted'))
        onUpdated (() => console.log('component onUpdated'))
    },
    components: {
        PostSingle,
    }
}
</script>
