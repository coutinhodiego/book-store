import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UpdateItem from '@/components/UpdateItem'
import ListBooksAdm from '@/components/ListBooksAdm'
import BookDetail from '@/components/BookDetail'
import Cadastro from '@/components/Cadastro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books List',
      component: ListBooksAdm
    },
    {
      path: '/books/:id',
      name: 'Books Detail',
      props: true,
      component: BookDetail
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/updateItem/:id',
      name: 'Update',
      component: UpdateItem
    }
  ],
  mode: 'history'
})
