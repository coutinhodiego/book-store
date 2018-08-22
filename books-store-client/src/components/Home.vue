<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Books Store</h1>
    <div>
      <list-books></list-books>
    </div>
  </div>
</template>

<script>
import ListBooks from './ListBooks'

export default {

  data () {
    return {
      name: '',
      price: '',
      updateStatus: false,
      cadastroStatus: true,
      upName: '',
      upPrice: '',
      updateBook: ''
    }
  },
  components: {
    'list-books': ListBooks
  },
  methods: {
    onLoadBook (id) {
      this.$router.push(`/books/${id}`)
    }
  },
  computed: {
    onLoad () {
      return this.$store.getters.loadedBooks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
