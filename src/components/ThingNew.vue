<template>
  <div>
    <div class='box' style='padding:13px;margin-top:30px'>

      <!-- NEW FORM -->
      <form @submit.prevent='save'>

        <!-- TITLE -->
        <div class='field'>
          <p class='control'>
            <input ref='title' v-focus class='input' type='text' placeholder='Title' v-model='title'>
          </p>
          <p v-show='titleValidate' class='help is-danger'>Thing must have a title</p>
        </div>

        <!-- CONTENT -->
        <div class='field'>
          <p class='control'>
            <textarea class='textarea' placeholder='Notes' v-model='content'></textarea>
          </p>
        </div>

        <!-- CATEGORY -->
        <div class='field'>
          <p class='control'>
            <span class='select'>
              <select v-model='category'>
                <option disabled value=''>Category</option>
                <option v-for='( category, index ) in categories'>
                  {{ category.name }}
                </option>
              </select>
            </span>
          </p>
        </div>

        <!-- SAVE -->
        <div class='field is-grouped'>
          <p class='control'><button class='button is-info'>Save</button></p>
          <p class='control'><button type='button' class='button is-success' @click='cancel'>Cancel</button></p>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title:    '',
        content:  '',
        category: this.$store.getters.selectedCategory,
        titleValidate: false
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    methods: {
      save() {
        const thing = {
          title:    this.title,
          content:  this.content,
          category: this.category
        }
        if ( thing.title ) {
          this.$store.dispatch( 'new', thing )
          this.$router.push( '/' )
        } else {
          this.titleValidate = true
          this.$refs.title.focus()
        }
      },
      cancel() {
        this.$router.push( '/' )
      }
    }
  }
</script>
