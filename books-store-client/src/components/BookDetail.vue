<template>
  <div class="container mt-5" v-if="book">
    <h1 class="mb-4">Book Detail</h1>
    <div class="row">
      <div class="col-12 col-lg-3">
        <h3>{{book.name}}</h3>
        <p>Price : ${{book.price}}</p>
        <div class="form-group">
          <img :src="book.urlImage" class="image-loaded" alt="">      
        </div>
        <a @click="goBack" class="btn btn-second d-flex justify-content-center">
          <i class="material-icons">
            keyboard_backspace
          </i>
          Back
        </a>
      </div>
      <div class="col-12 col-lg-8 mt-5">
        <div>
          <p class="sinopse-text">{{book.sinopse}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    book () {
      return this.$store.getters.book(this.id)
    }
  },
  methods: {
    goBack () {
      window.history.back()
    }
  }
}
</script>

<style scoped>
  .btn-second {
    width: 10rem;
  }
  .image-loaded {
    width: auto;
    height: 16rem;
    padding: 10px 0;
  }

  .sinopse-text {
    white-space: pre-wrap;
    text-align: justify;
  }
</style>

