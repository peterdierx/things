<template>
  <div>
    <article class='media'>
      <figure class='media-left'>
        <img src='@/assets/logo.png' :width='size' class='margin'>
      </figure>
      <div class='media-content'>
        <div class='content top'>
          <h2 class='title weight'><strong>{{ title }}</strong></h2>
          <p class='subtitle'>{{ text }}</p>
        </div>
      </div>
    </article>
    <hr class='line'>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        title: 'Things',
        text:  'Managing your stuff',
        size:  '100'
      }
    },
  }
</script>

<style scoped>
  .line {
    margin-top: 8px;
    margin-bottom: 15px;
  }
  .top {
    margin-top: 12px
  }
  .margin {
    margin-right: -15px;
  }
  .weight {
    font-weight: 500;
  }
</style>