<template>
  <div class="header">
    <nav>
      <div class="nav-wrapper">
        <router-link class="brand-logo center" to="/">Vue posts</router-link>
        <ul class="left hide-on-med-and-top">
          <li><router-link to="/posts">Posts</router-link></li>
          <li><router-link to="/posts/create">Create post</router-link></li>
          <li><router-link to="/todos">Todos</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
  nav {
  animation-name: color-change;
  animation-iteration-count: infinite;    
  animation-direction: alternate;
  animation-timing-function: ease;
  animation-duration: 10s;
  }
  @keyframes color-change {
    0% { background-color: black }
    10% { background-color: blue }
    20% { background-color: red }
    30% { background-color: green }
    40% { background-color: orange }
    50% { background-color: yellow }
    60% { background-color: pink }
    70% { background-color: violet }
    80% { background-color: brown }
    90% { background-color: crimson }
    100% { background-color: deeppink }
  }
</style>