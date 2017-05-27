<template>
    <div>
        <h2>父组件传过来的number值：{{propsNumber}}</h2>
        <h2>父组件传过来的string值：{{propsString}}</h2>
    </div>
</template>
<script>
export default {
    name: 'info',
    props: {
        propsNumber: {
            type: Number,
            default: 200
        },
        propsString:{
            type: String,
            require: true
        },
    }
}
</script>
