<template>
  <div style="text">
    <h4>Create new post</h4>
    <div class="row">
      <div class="col s4">
        <input type="text" v-model="title">
      </div>
      <div class="col s8">
        <input type="text" v-model="body">
      </div>
      <a class="waves-effect waves-light btn" @click="post">Post</a>
    </div>
  </div>
</template>

<script>
import PostService from '@/services/PostService.js'

export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    post() {
      PostService.postNewPost({
        title: this.title,
        body: this.body
      })
    }
  }
}
</script>
