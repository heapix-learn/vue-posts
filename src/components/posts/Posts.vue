<template>
  <div>
   <div v-if="posts">
     <div class="row">
         <ul v-for="post in posts" :key="post.id">
           <li>UserId: {{post.userId}}</li>
           <li>Posi id: {{post.id}}</li>
           <li><strong>Title: {{ post.title }}</strong></li>
           <li>Text: {{ post.body}}</li>
           <a class="waves-effect waves-light red lighten-1 btn" @click="deleteThisPost(post.id)">Delete</a>
         </ul>
     </div>
   </div>
  </div>
</template>

<script>
import PostService from '@/services/PostService.js'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([ 
      'posts'
    ])
  },
  created () {
    // After component created fetch some data by PostService
    PostService.fetchPosts()
  },
  methods: {
    deleteThisPost(id) {
      PostService.deletePost(id)
    }
  }
}
</script>
