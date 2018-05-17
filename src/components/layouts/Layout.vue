<template>
  <div class="layout">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="row">
        <div class="left-side-content col s2"></div>
        <div class="content col s8">
          <slot></slot>
        </div>
        <div class="right-side-content col s2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  components: {
      Header
  }
}
</script>
<style>
  .header {
    width: 100%;
    position: fixed;
  }
  .main {
    padding-top: 70px
  }
</style>