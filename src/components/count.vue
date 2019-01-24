<template>
    <div class="count">
        <div>{{count}}-{{name}}-{{age}}</div>
        <div>
            <button @click="add(10)">+</button>
            <button @click="reduce(5)">-</button>
        </div>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    created() {
        
    },
    computed: {
        ...mapState(['count','name','age']),
        // ...mapGetters(['count'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),

    },
    store
}
</script>
