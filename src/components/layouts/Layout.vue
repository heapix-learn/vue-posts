<template>
  <div class="layout">
    <div class="header">
      <Header/>
    </div>
    <div class="main">
      <div class="row">
        <div class="left-side-content col s2"></div>
        <div class="content col s8">
          <slot>
          </slot>
          <back-to-top>
            <button class="scroll-up-btn"><i class="little material-icons">arrow_upward</i></button>
          </back-to-top>
        </div>
        <div class="right-side-content col s2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import BackToTop from 'vue-backtotop'

export default {
  components: {
      Header,
      BackToTop
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/index.scss';
</style>