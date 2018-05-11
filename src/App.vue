<template>
  <div class="app">
    <layout>
      <router-view/>
    </layout>
  </div>
</template>

<script>
import Layout from './components/layouts/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
