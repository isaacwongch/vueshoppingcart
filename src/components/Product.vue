<template>
    <div class="place">
        <p>{{ name }}</p>
        <img :src="img" width="235" height="300"/>
        <slot></slot>
        <p>{{ desc }}</p>
    </div>
</template>
<script>
export default{
    name: 'product',
    props: ['name','desc','img'],
}
</script>