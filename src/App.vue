<template>
    <div id="app">
        <tab>
            <tab-item selected @on-item-click="onItemClick">Home</tab-item>
            <tab-item @on-item-click="onItemClick">Other</tab-item>
            <tab-item @on-item-click="onItemClick">About</tab-item>
        </tab>
        <router-view></router-view>
    </div>
</template>
<script>
import {
    Tab,
    TabItem
} from 'vux'
import bus from './components/bus.js'

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
                    name: 'Other'
                });
            } else if (index == 2) {
                this.$router.push({
                    name: 'About'
                });
            } else {
                this.$router.push({
                    name: 'Home'
                });
            }

            console.log('on item click:', index)
        }
    },
    components: {
        Tab,
        TabItem
    },
    mounted() {
        console.log('on item click:', 'mounted')
        bus.$on('app_msg', (text) => {
                
            })
            //接收子组件的数据
    }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
    background-color: #fbf9fe;
}
</style>
