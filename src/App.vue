<template>
    <div id="app">
        <tab>
            <tab-item selected @on-item-click="onItemClick">tab1</tab-item>
            <tab-item @on-item-click="onItemClick">tab2</tab-item>
            <tab-item @on-item-click="onItemClick">tab3</tab-item>
        </tab>
        <router-view></router-view>
    </div>
</template>
<script>
import {
    Tab,
    TabItem
} from 'vux'

export default {

    name: 'app',
    data() {
        return {
            index: 0
        }
    },
    methods: {
        onItemClick(index) {
            if (index == 1) {
                this.$router.push({
                    name: 'ListInfo',
                    params: {
                        repoName: 1
                    }
                });
            } else if (index == 2) {
                this.$router.push({
                    name: 'ListLoadMore'
                });
            } else {
                this.$router.push({
                    name: 'List'
                });
            }

            console.log('on item click:', index)
        }
    },
    components: {
        Tab,
        TabItem
    }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
    background-color: #fbf9fe;
}
</style>
