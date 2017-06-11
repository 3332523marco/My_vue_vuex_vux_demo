<template>
    <div>
        <x-header style="background-color:#111;" :left-options="{showBack: true}"> {{repo.name}} </x-header>
        <div style="margin: 10px;overflow: hidden;" >
            <masker style="border-radius: 2px;">
                <div class="m-img" :style="{backgroundImage: 'url(' + itemimg + ')'}"></div>
                <div slot="content" class="m-title">
                    {{repo.description}}
                    <br/>
                    <span class="m-time">2016-03-18</span>
                </div>
            </masker>
        </div>
    </div>
</template>
<script>
import {
    XHeader,
    Masker

} from 'vux'

export default {
    data() {
            return {
                repo: null,
                itemimg: 'https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'

            }
        },
        created: function() {
            this.repo = this.$route.params.repo
        },
        components: {
            XHeader,
            Masker
        }
}
</script>
<style lang="less">
.m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
}

.m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
}

.m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
}
</style>
