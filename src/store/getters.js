//计算过滤操作
// const getters = {
//     count:state=>{
//       return state.count +=5
//     }
//   }


export default {
    getters:(state)=>{
        return state.user
    },
    bookList:function(state){
        return state.bookList;
    }
}