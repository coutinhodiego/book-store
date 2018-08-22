<template>
  <div class="container mt-5">
      <form @submit.prevent="onSubmit">
        <div class="d-flex justify-content-between align-items-center">
          <h2>Register</h2>
          <button class="btn btn-dark btn-second">Register</button>
        </div>
        <div class="form-group">
          <label for="nameInput">Name</label>
          <input type="text" class="form-control" id="nameInput" v-model="name">
        </div>
        <div class="form-group">
          <label for="priceInput">Price</label>
          <input type="text" class="form-control" id="priceInput" v-model="price">
        </div>
        <div class="form-group">
          <label for="sinopseInput">Sinopse</label>
          <textarea class="form-control" id="sinopseInput" rows="6" v-model="sinopse"></textarea>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="imageInput" @change="onLoadFiles" accept="image/*">
                <label class="custom-file-label" for="imageInput" aria-describedby="imageInput">{{imageName}}</label>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex justify-content-center">
            <img :src="urlImage" class="image-loaded" alt="">
          </div>
        </div>        
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: '',
      sinopse: '',
      image: '',
      imageName: '',
      urlImage: ''
    }
  },
  methods: {
    onSubmit () {
      let data = {
        name: this.name,
        price: this.price,
        sinopse: this.sinopse,
        image: this.image,
        imgName: this.imageName,
        urlImage: this.urlImage
      }
      this.axios.post('http://localhost:3000/produtos', data)
        .then(response => {
          this.$store.commit('addNewBook', response.data)
          this.$router.push('/books')
        })
        .catch(erro => console.log(erro))
    },
    onLoadFiles (event) {
      let file = event.target.files
      this.imageName = file[0].name
      let fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.image = fileReader.result
        this.urlImage = fileReader.result
      })
      fileReader.readAsDataURL(file[0])
    }
  }
}
</script>

<style scoped>
  
  .image-file-load {
    position: relative;
    z-index: 2;
    width: 100%;
    height: calc(2.25rem + 2px);
    margin: 0;
    opacity: 0;
  }

  .custom-file-input ~ .custom-file-label::after {
    content: "UpLoad";
    cursor: pointer;
  }

  .custom-file-label {
    overflow-x: hidden;
  }

  .image-loaded {
    width: auto;
    height: 16rem;
    padding: 10px 0;
  }

  @media (min-width: 760px) {
    .container {
      width: 60%;
    }
  }
</style>
