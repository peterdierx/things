<template>
  <ul class='menu-list'>
    <li v-for='( category, index ) in categories' style='text-color:is-primary'>
      <a @click='selectCategory( index )' :class="{ 'is-active': category.selected }">
        {{ category.name }}
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    methods: {
      selectCategory( index ) {
        this.$store.commit( 'category', index )
      }
    }
  }
</script>
