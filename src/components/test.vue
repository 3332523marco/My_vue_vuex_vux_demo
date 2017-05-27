<template>
    <div>
        <h2>秒倒计时,父亲传过来的值：{{startCountsub}}</h2>
        <h2>秒倒计时,父亲传过来的值：{{msg2}}</h2>
    </div>
</template>
<script>
export default {
    name: 'info',
    props: {
        startCountsub: {
            type: Number,
            default: 200
        },
        msg2:[String, Number]
    }
}
</script>
