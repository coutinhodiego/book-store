<template>
  <div class="container mt-5">
    <h2>Update Data</h2>
    <form @submit.prevent="onSubmitEdit">
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input type="text" class="form-control" id="nameInput" v-model="upName">
      </div>
      <div class="form-group">
        <label for="priceInput">Price</label>
        <input type="text" class="form-control" id="priceInput" v-model="upPrice">
      </div>
      <div class="form-group">
        <label for="sinopseInput">Sinopse</label>
        <textarea class="form-control" id="sinopseInput" rows="6" v-model="upSinopse"></textarea>
      </div>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="input-group mb-3">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="imageInput" @change="onLoadFiles" accept="image/*">
              <label class="custom-file-label" for="imageInput" aria-describedby="imageInput">{{upImageName}}</label>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center">
          <img :src="upUrlImage" class="image-loaded" alt="">
        </div>
      </div>
      <button class="btn btn-first">Update</button>
      <b-button class="btn btn-second" @click="backToList">Cancel</b-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: '',
      id: '',
      upName: '',
      upSinopse: '',
      upPrice: '',
      upImage: '',
      upUrlImage: '',
      upImageName: ''
    }
  },
  methods: {
    onLoadFiles () {
      let file = event.target.files
      this.upImageName = file[0].name
      let fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.upImage = fileReader.result
        this.upUrlImage = fileReader.result
      })
      fileReader.readAsDataURL(file[0])
    },
    backToList () {
      this.$router.push('/books')
    },
    onSubmitEdit () {
      let data = {
        name: this.upName,
        price: this.upPrice,
        sinopse: this.upSinopse,
        image: this.upUrlImage,
        imgName: this.upImageName,
        urlImage: this.upUrlImage
      }
      this.axios.put(`http://localhost:3000/produtos/${this.id}`, data)
        .then(response => {
          this.$router.push('/books')
        })
        .catch(erro => console.log(erro))
    }
  },
  mounted () {
    let book = this.$store.getters.upBook
    this.upImageName = book.imgName
    this.upName = book.name
    this.upPrice = book.price
    this.upSinopse = book.sinopse
    this.id = book._id
    this.upImage = book.image
    this.upUrlImage = book.urlImage
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
