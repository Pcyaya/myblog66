//修改状态
const mutations = {
  add(state, num) {
    // console.log(num)
    state.user.count += num
  },
  reduce(state, num) {
    state.user.count -= num
  },
  ADD_BOOK(state, book) {
    if (book != '') {
      let id = (((1+Math.random())*0x10000)|0).toString(16).substring(1)+ (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      console.log(this.getters.bookList)
        state.bookList.push({ id: id, name: book });
      return true
    }
  },
  DELETE_BOOK(state, id) {
    for(let i=0;i<state.bookList.length;i++){
      if(id === state.bookList[i].id){
        state.bookList.splice(i,1)
      }
    }
  },
  // randomNum(minNum, maxNum) 
}

export default mutations