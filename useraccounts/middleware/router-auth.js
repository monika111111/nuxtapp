/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
export default function ({ store, redirect, route }) {
  store.state.user != null && route.name == 'signin' ? redirect('/addpost') : ''
  store.state.user == null && route.name == 'addpost' ? redirect('/signin') : ''
}
