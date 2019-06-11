<template>
  <div class='field'>
    <p class='control'>
      <div class='input'>{{ titel }}</div>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Thing',
    props: [ 'titel', 'id' ]
  }
</script>
