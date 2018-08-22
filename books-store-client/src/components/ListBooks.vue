<template>
    <div class="list-book mt-5">
      <div class="list-book-item card" v-for="item in onLoad" :key="item._id">
        <div class="row card-body d-flex justify-content-between">
          <div class="col-12">
            <div>
              <h5 class="mb-0">Name: {{item.name}}</h5>
              <p><strong>Price:</strong> ${{item.price}}</p>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <div class="form-group">
              <router-link :to="'/books/' + item._id">
                <img :src="item.urlImage" class="image-loaded" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  computed: {
    onLoad () {
      return this.$store.getters.loadedBooks
    }
  },
  methods: {
    excludeItem (id) {
      console.log(id)
      this.axios.delete(`http://localhost:3000/produtos/${id}`)
        .then(response => {
          this.$store.commit('removeBook', response)
          console.log(response)
        })
        .catch(erro => console.log(erro))
    },
    editItem (item) {
      this.$store.commit('editItem', item)
      this.$router.push(`/updateItem/${item._id}`)
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/produtos')
      .then(response => {
        let data = response.data
        this.$store.commit('setLoadedBooks', data)
      })
      .catch(erro => console.log(erro))
  }
}
</script>

<style scoped>
  .image-loaded {
    width: auto;
    height: 16rem;
    padding: 10px 0;
  }

  @media (min-width: 760px) {
    .list-book {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .list-book-item {
      width: 32%;
      margin: 5px 0;
    }
  }
</style>
