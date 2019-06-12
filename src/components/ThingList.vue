<template>
  <div class='things-margin'>
    <thing v-for='thing in things' :key='thing.id' :title='thing.title' :id='thing.id'></thing>
  </div>
</template>

<script>
  import Thing from '@/components/Thing'

  export default {
    components: { Thing },
    computed: {
      things() {
        return this.$store.getters.thingsByCategory
      }
    }
  }
</script>

<style>
  .things-margin {
    margin-top: 30px;
  }
</style>
