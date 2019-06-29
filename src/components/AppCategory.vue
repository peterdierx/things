<template>
  <ul class='menu-list'>
    <li v-for='( category, index ) in categories' style='text-color:is-primary'>
      <a @click='selectCategory( index )' :class="{ 'is-active': category.selected }">
        {{ category.name }}
        <span class='tag is-rounded is-link is-pulled-right'>
          {{ count( category.name ) }}
        </span>
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
      },
      count( category ) {
        return this.$store.state.things.filter( name => name.category === category ).length
      }
    }
  }
</script>
