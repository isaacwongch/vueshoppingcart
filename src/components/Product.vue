<template>
    <div class="product">
        <p>{{ name }}</p>
        <img :src="img" width="235" height="300"/>
        <slot></slot>
        <p>{{ price | dollarize }}</p>
        <button class="add" @click="addToCart(invId)">Add To Cart</button>
    </div>
</template>
<script>
export default{
    name: 'product',
    props: {
        invId: Number,
        name: {
            type: String,
            required: true
        },
        price: Number,
        img: String
        },
    filters: {
        dollarize: function(value){
            return `$${value}`;
        }
    },
    methods:{
        addToCart(invId){
            console.log("testing");
            this.$emit("addToCart", invId);
        }
    }
}
</script>