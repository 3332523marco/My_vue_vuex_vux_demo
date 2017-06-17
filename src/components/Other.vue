<template>
    <div>
        <box gap="10px 10px">
            <x-button type="primary" @click.native="jump('Demo1','测试引入子view及通信')">测试引入子view及通信</x-button>
            <x-button type="primary" @click.native="jump('Demo2','测试vuex实例')">测试vuex实例 实时获得store.state.count：{{ $store.state.count }}</x-button>
            <x-button type="primary" @click.native="jump('Demo3','测试异步更新数据')">测试异步更新数据</x-button>
            <x-button type="primary" @click.native="jump('Demo4','测试生命周期')">测试生命周期</x-button>
        </box>
    </div>
</template>
<script>
import {
    XButton,
    Box,
    Divider
} from 'vux'

export default {
    components: {
        XButton,
        Box,
        Divider
    },
    methods: {
        jump(type) {
            this.$router.push({
                name: type
            });
        },
        jump(type, params) {
            this.$router.push({
                name: type,
                params: {
                    repoName: params
                }
            });
        }
    },
}
</script>
