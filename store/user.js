const state = {
  uid: null,
  displayName: null,
  userEmail: null,
}
// getters
const getters = {
  uid: s => s.uid,
  displayName: s => s.displayName,
  userEmail: s => s.userEmail,
}
// mutations
const mutations = {
  SET_FIREBASE_USER: (state, user) => {
    state.uid = user.uid
    state.displayName = user.displayName
    state.userEmail = user.userEmail
  },
}
// actions
const actions = {
  
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
