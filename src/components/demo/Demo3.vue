<template>
    <div>
        <x-header style="background-color:#111;" :left-options="{showBack: true}"> {{repoName}} </x-header>
        <div>
            <scroller lock-x height="800px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
                <div class="box2">
                    <p v-for="i in bottomCount">placeholder {{i}}</p>
                    <load-more tip="loading"></load-more>
                </div>
            </scroller>
        </div>
    </div>
</template>
<script>
import {
    Scroller,
    LoadMore,
    XHeader
} from 'vux'

export default {
    components: {
        Scroller,
        LoadMore,
        XHeader
    },
    created: function() {
        this.repoName = this.$route.params.repoName
    },
    data() {
        return {
            repoName: null,
            scrollTop: 0,
            onFetching: false,
            bottomCount: 20
        }
    },
    methods: {
        onScrollBottom() {
            if (this.onFetching) {
                // do nothing
            } else {
                this.onFetching = true
                setTimeout(() => {
                    this.bottomCount += 10
                        //   nextTick的由来：
                        //　　　 由于VUE的数据驱动视图更新，是异步的，即修改数据的当下，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
                        //　　nextTick的触发时机：
                        //　　　　在同一事件循环中的数据变化后，DOM完成更新，立即执行nextTick(callback)内的回调。
                        //　　应用场景：
                        //　　　　需要在视图更新之后，基于新的视图进行操作。
                    this.$nextTick(() => {
                        this.$refs.scrollerBottom.reset()
                    })
                    this.onFetching = false
                }, 2000)
            }
        }
    }
}
</script>
<style scoped>
.box2-wrap {
    height: 800px;
    overflow: hidden;
}
</style>
