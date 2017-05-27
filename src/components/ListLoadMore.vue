<template>
    <div>
        <scroller lock-x height="800px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
            <div class="box2">
                <p v-for="i in bottomCount">placeholder {{i}}</p>
                <load-more tip="loading"></load-more>
            </div>
        </scroller>
    </div>
</template>
<script>
import {
    Scroller,
    LoadMore
} from 'vux'

export default {
    components: {
        Scroller,
        LoadMore
    },
    data() {
        return {
            showList1: true,
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