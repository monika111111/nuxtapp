import { auth } from '~/plugins/firebase.js'

export const state = () => ({ user: null, error: null })

export const getters = { isAuthenticated (state) { return !!state.user } }

export const mutations = { setUser (state, payload) { state.user = payload }, setError (state, error) { state.error = error } }

export const actions = {
  async signUp ({ state, commit }, form) {
    try {
      await auth.createUserWithEmailAndPassword(form.email, form.password)
      commit('setError', null)
      this.app.router.push('/addpost')
    } catch (e) {
      // this.app.router.push('/error')
      commit('setError', e)
    }
  },
  async signInWithEmail ({ state, commit }, { email, password }) {
    try {
      await auth.signInWithEmailAndPassword(email, password)
      commit('setError', null)
      this.app.router.push('/addpost')
    } catch (e) {
      commit('setError', e)
    }
  },
  async signOut () {
    await auth.signOut()
    this.app.router.push('/')
  }
}
