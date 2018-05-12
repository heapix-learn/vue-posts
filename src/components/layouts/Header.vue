<template>
  <div class="header">
      <nav>
          <div class="nav-wrapper">
            <router-link class="brand-logo center" to="/">Vue posts</router-link>
            <ul class="left hide-on-med-and-top">
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/users/create">Create user</router-link></li>
                <li><router-link to="/posts">Posts</router-link></li>
            </ul>
          </div>
      </nav>
  </div>
</template>

<script>
</script>

<style>

</style>
