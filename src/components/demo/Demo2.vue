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
            XHeader
        },
        //mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性
        computed: mapGetters([
            'evenOrOdd'
        ]),
        //Action 类似于 mutation，不同在于：
        //Action 提交的是 mutation，而不是直接变更状态。
        //Action 可以包含任意异步操作。
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
