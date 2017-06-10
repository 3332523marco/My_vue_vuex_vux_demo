<template>
    <div>
        <h2 @click="sendEvent">父组件传过来的number值：{{propsNumber}}</h2>
        <h2>父组件传过来的string值：{{propsString}}</h2>
    </div>
</template>
<script>
import bus from './bus.js'

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
    methods: {
        sendEvent() {
              console.log('on item click:', 'hewww')
              bus.$emit('child_msg', '你好，我是子组件')

        }
    },
}
</script>
