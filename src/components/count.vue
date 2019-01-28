<template>
    <div class="count">
        <div>{{user.count}}</div>
        <div v-for="(item, index) in bookList" :key="index">{{item.name}} <span @click="DELETE_BOOK(item.id)">X</span> </div>
        <div>
            <button @click="add(10)">+</button>
            <button @click="reduce(5)">-</button>
        </div>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
        <div>
            <input v-model="addbook" type="text">
            <button @click="ADD_BOOK(addbook)">add</button>
        </div>
    </div>
</template>

<script>
// import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {
            addbook: ''
        }
    },
    created() {
        // console.log(this.$store)
    },
    mounted() {
            
    },
    computed: {
        ...mapState(['user','bookList']),
        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce','ADD_BOOK','DELETE_BOOK']),
        ...mapActions(['addAction','reduceAction']),
        
    },
    // store
}
</script>

<style scoped>
    .count button{
        padding: 5px 20px;
    }
</style>

