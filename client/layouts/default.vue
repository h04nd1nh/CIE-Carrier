<template>
    <Header />
    <slot></slot>
</template>
<script>
    import Header from '../components/Header.vue';
    export default {
        components: {
            Header
        },
    }
</script>