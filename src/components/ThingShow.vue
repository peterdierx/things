<template>
  <div>
    <div class='box' style='padding:13px;margin-top:30px'>

      <!-- SHOW FORM -->
      <form @submit.prevent='update'>

        <!-- TITLE -->
        <div class='field'>
          <p class='control'>
            <input ref='title' class='input' type='text' placeholder='Title' v-model='title'>
          </p>
          <p v-show='titleValidate' class='help is-danger'>Thing must have a title</p>
        </div>

        <!-- CONTENT -->
        <div class='field'>
          <p class='control'>
            <textarea class='textarea' placeholder='Notes' v-model='content'></textarea>
          </p>
        </div>

        <div class='field is-grouped'>

          <!-- CATEGORY -->
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

          <!-- CREATED  -->
          <p class='control'>
            <a class='button'>
              {{ created | mmddyy }}
            </a>
          </p>

          <!-- COMPLETED -->
          <p class='control' v-show='completed != null'>
            <a class='button'>
              {{ completed | mmddyy }}
            </a>
          </p>

        </div>

        <!-- UPDATE AND DELETE -->
        <div class='field is-grouped'>
          <p class='control'><button class='button is-info'>Update</button></p>
          <p class='control'><button type='button' class='button is-success' @click='cancel'>Cancel</button></p>
          <p class='control'><button type='button' class='button is-warning' @click='deleteThing'   v-show='deleteBtn'>Delete</button></p>
          <p class='control'><button type='button' class='button is-danger'  @click='destroy( id )' v-show='confirmBtn' style='margin-left:-12px'>Confirm</button></p>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.load()
    },
    data() {
      return {
        id:             '',
        created:        '',
        title:          '',
        content:        '',
        category:       '',
        completed:      '',
        deleteBtn:      true,
        confirmBtn:     false,
        titleValidate : false
      }
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    },
    methods: {
      load() {
        const thing = this.$store.state.things.find( thing => thing.id == this.$route.params.id )
        this.id        = thing.id
        this.created   = thing.created
        this.title     = thing.title
        this.content   = thing.content
        this.category  = thing.category
        this.completed = thing.completed
      },
      update() {
        const thing = {
          id:       this.$route.params.id,
          title:    this.title,
          content:  this.content,
          category: this.category
        }
        if ( thing.title ) {
          this.$store.dispatch( 'update', thing )
          this.$router.push( '/' )
        } else {
          this.titleValidate = true
          this.$refs.title.focus()
        }
      },
      deleteThing() {
        this.deleteBtn  = false
        this.confirmBtn = true
      },
      destroy( id ) {
        this.$store.dispatch( 'delete', id )
        this.$router.push( '/' )
      },
      cancel() {
        this.$router.push( '/' )
      }
    }
  }
</script>
