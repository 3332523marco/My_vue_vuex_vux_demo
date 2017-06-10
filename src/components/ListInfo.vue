<template>
    <div>
        <x-header style="background-color:#111;" :left-options="{showBack: true}"> {{repoName}} </x-header>
        <div>
            Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <button @click="incrementIfOdd">Increment if odd</button>
            <button @click="incrementAsync">Increment async</button>
        </div>
        <Child :propsNumber="123" :propsString="'hello你好'"></Child>
    </div>
</template>
<script>
import {
    XHeader
} from 'vux'
import {
    mapGetters,
    mapActions
} from 'vuex'
import Child from './ListInfoChild.vue'

export default {
    data() {
            return {
                repoName: null,
                loading: true,
                readMe: null,
                description: null
            }
        },
        created: function() {
            this.repoName = this.$route.params.repoName
        },
        components: {
            XHeader,
            Child
        },
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
}
</script>
<style>
.desc {
    margin-top: 16px
}
</style>
