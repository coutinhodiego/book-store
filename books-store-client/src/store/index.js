import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedBooks: [],
    editItem: null
  },
  mutations: {
    setLoadedBooks (state, payload) {
      state.loadedBooks = payload
    },
    addNewBook (state, payload) {
      state.loadedBooks.push(payload)
    },
    removeBook (state, payload) {
      const payloadID = payload.data._id
      const loadedBooks = state.loadedBooks.filter(book => {
        return book._id !== payloadID
      })
      state.loadedBooks = loadedBooks
    },
    editItem (state, payload) {
      state.editItem = payload
    }
  },
  actions: {},
  getters: {
    loadedBooks (state) {
      return state.loadedBooks
    },
    upBook (state) {
      return state.editItem
    },
    book (state) {
      return (bookId) => {
        return state.loadedBooks.find(book => {
          return book._id === bookId
        })
      }
    } 
  }
})