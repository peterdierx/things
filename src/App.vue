<template>
  <section class='section app-margin'>
    <div class='container'>
      <!-- APPHEADER -->
      <AppHeader/>
      <div class='columns'>
        <div class='column is-3'>
          <!-- APPSIDEBAR -->
          <AppSidebar/>
        </div>
        <div class='column'>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppHeader  from '@/components/AppHeader' 
  import AppSidebar from '@/components/AppSidebar'

  export default {
    components: { AppHeader, AppSidebar }
  }
</script>

<style>
  .app-margin {
    margin-top: -20px;
  }
</style>
