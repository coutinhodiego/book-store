<template>
  <div class="container mt-5">
    <h2>Books</h2>
    <ul class="list-group">
      <li class="list-group-item m-2" v-for="item in onLoad" :key="item._id">
        <div class="row d-flex justify-content-between">
          <div class="col-12 col-lg-4">
            <div>
              <p class="mb-0"><strong>Name:</strong> {{item.name}}</p>
              <p><strong>Price:</strong> ${{item.price}}</p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="form-group">
              <router-link :to="'/books/' + item._id">
                <img :src="item.urlImage" class="image-loaded" alt="">
              </router-link>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="list-buttons">
              <a class="btn btn-first active mb-2" @click="editItem(item)">EDIT</a>
              <a class="btn btn-second active" @click="excludeItem(item._id)">DELETE</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
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

  .list-buttons {
    display: flex;
    flex-flow: column;
  }

  @media (min-width: 760px) {
    .container {
      width: 60%;
    }
  }
</style>

