//actions异步修改状态
// export const addAction = (context) => {
//   return context.commit('add', 10)
// };
// export const reduceAction = (context) => {
//   return context.commit('reduce', 5)
// }

export default {
  addAction({ commit }, num) {
    console.log(commit)
    commit('add', num)
  },
  reduceAction({ commit }, num) {
    commit('reduce', num)
  },
  add_book({ commit }, book) {
    commit('ADD_BOOK', book);
  },
  delete_book({ commit }, book) {
    commit('DELETE_BOOK', id);
  }
}