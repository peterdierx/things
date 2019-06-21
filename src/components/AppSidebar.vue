<template>
  <aside class='menu'>

    <!-- CATEGORY -->
    <p class='menu-label'>
      category
    </p>
    <AppCategory/>

    <!-- ACTIONS -->
    <p class='menu-label'>
      actions
    </p>
    <ul class='menu-list'>
      <li><router-link to='/new'>New</router-link></li>
    </ul>

    <!-- PREFS -->
    <p class='menu-label'>
      preferences
    </p>
    <ul class='menu-list'>
      <li><a>Settings</a></li>
    </ul>

  </aside>
</template>

<script>
  import AppCategory from '@/components/AppCategory'

  export default {
    name: 'AppSidebar',
    components: { AppCategory }
  }
</script>
