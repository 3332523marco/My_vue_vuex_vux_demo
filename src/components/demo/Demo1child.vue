<template>
    <div>
        <divider>子组件</divider>
        <h2>父组件传过来的number值：{{propsNumber}}</h2>
        <h2>父组件传过来的string值：{{propsString}}</h2>
        <x-button mini type="primary" @click.native="sendEvent">向父组件传值</x-button>
        <divider>父组件</divider>
    </div>
</template>
<script>
import bus from '../bus.js'
import {
    XButton,
    Divider
} from 'vux'
export default {
    name: 'info',
    props: {
        propsNumber: {
            type: Number,
            default: 200
        },
        propsString: {
            type: String,
            require: true
        },
    },
    components: {
        XButton,
        Divider
    },
    methods: {
        sendEvent() {
            console.log('on item click:', 'hewww')
            bus.$emit('child_msg', '子组件传来值：你好，我是子组件')

        }
    },
}
</script>
