<template>
  <div class='field'>
    <p class='control'>
      <div class='input'>{{ title }}</div>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Thing',
    props: [ 'title', 'id' ]
  }
</script>
