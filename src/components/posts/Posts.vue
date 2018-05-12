<template>
  <div>
    <!-- From store. This data will always update as updates store.posts -->
    {{posts}} 
  </div>
</template>

<script>
import PostService from '@/services/PostService.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Posts',
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  created () {
    // After component created fetch some data by PostService
    PostService.fetchPosts()
  }
}
</script>
