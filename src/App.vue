<template>
  <section class='section app-margin'>
    <div class='container'>
      <AppHeader/>
    </div>
  </section>
</template>

<script>
  import AppHeader from '@/components/AppHeader'

  export default {
    components: { AppHeader }
  }
</script>

<style>
  .app-margin {
    margin-top: -20px;
  }
</style>
