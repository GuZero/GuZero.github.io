<template>
    <div id="app">
        Count is {{$store.state.count}}
        <button @click="increment">+5</button>
        <button @click="decement">-3</button>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    computed: mapGetters([]),
    methods:mapActions(['increment','decrement'])
}
</script>
