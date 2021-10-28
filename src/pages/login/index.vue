<template>
    <div>
        <Login @next-page="nextPage"/>
    </div>
</template>
<script>
import Login from '../../layout/Login.vue'

export default {
    components: { Login },
    name: "PageLogin",
    data() {
        return {

        }
    },
    created () {
    },
    methods: {
        nextPage () {
            this.$router.push({name: "Home"})
        }
    }
}
</script>
<style>
    
</style>