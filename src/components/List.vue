<template>
    <div>
        <div class="vux-demo">
            <img class="logo" src="../assets/vux_logo.png">
            <h1> </h1>{{ $store.state.count }}
        </div>
        <scroller lock-x height="800px" ref="scrollerBottom" :scroll-bottom-offst="200">
            <group title="cell demo">
                <div class="box2">
                    <li v-for="repo in repos">
                        <router-link :to="{name:'ListInfo',params:{repoName:repo.name}}">
                            <cell title="test" :value="repo.name" is-link></cell>
                        </router-link>
                    </li>
                </div>
            </group>
        </scroller>
    </div>
</template>
<script>
import {
    Group,
    Cell,
    Scroller,
    LoadMore
} from 'vux'
import Vue from 'vue'

export default {
    data() {
            return {
                title: 'StevenDXC/repos',
                repos: [],
                loading: true
            }
        },
        created: function() {
            Vue.axios.get('https://api.github.com/users/StevenDXC/repos').then((res) => {
                this.repos = res.data
                console.log(this.repos)
                this.loading = false
            }).catch((error) => {
                console.log(error)
                this.loading = false
                this.showAlert(error)
            })
        },
        methods: {
            showAlert(error) {
                this.$vux.alert.show({
                    title: 'error',
                    content: error
                })
            }
        },
        components: {
            Group,
            Cell,
            Scroller,
            LoadMore
        }
}
</script>
<style>
.vux-demo {
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px
}

.box2-wrap {
    height: 800px;
    overflow: hidden;
}
</style>
