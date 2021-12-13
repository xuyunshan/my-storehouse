<template>
    <div class="downArrow">
        <img :src="src" alt="">
    </div>
</template>
<script>
export default {
    name: 'DownArrow',
    props: ['src']
}
</script>
<style lang="scss" scoped>
    .downArrow{
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
    }
    .downArrow img{
        width: 40px;
        height: 40px;
    }
</style>