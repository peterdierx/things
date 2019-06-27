<template>
  <div class='field'>
    <p class='control'>
      <router-link :to="'show/' + id">
        <div class='input'>{{ title }}</div>
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Thing',
    props: [ 'title', 'id' ]
  }
</script>
