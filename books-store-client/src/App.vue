<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" href="" to="/">Book Store</router-link>
      <button class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          v-b-toggle="'navbarNav'">
        <span class="navbar-toggler-icon"></span>
      </button>
      <b-collapse class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link d-flex" href="" to="/books">
              <i class="material-icons mr-1">import_contacts</i>
              Books
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link d-flex" href="" to="/cadastro">
              <i class="material-icons mr-1">playlist_add</i>
              Cadastro
            </router-link>
          </li>
        </ul>
      </b-collapse>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>
      <div class="footer mt-4">
        <p>Dev by Diego Coutinho</p>
        <ul class="footer__list">
          <!-- <li class="footer__list-item">
            <p>Dev by Diego Coutinho</p>
          </li> -->
          <li class="footer__list-item">
            <a href="https://github.com/coutinhodiego">GitHub</a>
          </li>
          <li class="footer__list-item">
            <a href="https://www.linkedin.com/in/diego-coutinho-60623546/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  main {
    min-height: calc(100vh - 280px);
  }
  .footer {
    background-color: black;
    padding: 3rem;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .footer__list {
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-content: center;
  }

  .footer__list-item {
    color: white;
    margin: 0 5px;
    display: flex;
    justify-content: center;
  }

  .footer__list-item a {
    color: white;
    margin: 0 5px;
    text-decoration: none;
  }

  .navbar {
    background-color: #20B2AA;
  }

  .btn-first {
    color: white;
    background-color: #20B2AA;
    border-color: #20B2AA;
  }

  .btn-second,
  .btn-second:hover {
    background-color: #FF634D;
    border-color: #FF634D;
    color: white;
  }

  a:not([href]):not([tabindex]) {
    color: white;
  }

  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: white;
  }

  @media (min-width: 760px) {
    .container {
      width: 80%;
    }

    .footer__list {
      flex-flow: row;
      justify-content: center;
    }
  }
</style>
