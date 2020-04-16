<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <button v-on:click="AddtoCart(product)">
        <div class="info">
          <h1>{{product.name}}</h1>
        </div>
        <div class="image">
          <img :src="'/images/'+product.image">
        </div>
        <p> {{product.description}} </p>
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    AddtoCart(product) {
      return this.$root.$data.cart.push(product); // You have to attatch it to the root. Which is why we use this syntax
      // the other cool thing about this, that you pass in the product from up above.
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.products {
  /*THis makes it so the products don't bump into each other*/
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  width: 30%;
}
.product img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
.product .image {
  display: flex;
  justify-content: center;
}
.info {
  color: #000;
  /* padding: 10px 30px; */
  width: 50%;
}
.info h1 {
  font-family: sans-serif;
  font-size: 16px;
  /* text-align: center; */
}
.info h2 {
  font-family: sans-serif;
  font-size: 12px;
  padding: 20px;
  text-align: left;
}
.image-box{
  background-color: #ffffff;
  padding: 20px;
}

button {
  background-color: #ffffff;
  border: round;
  padding: 5px;
}
.auto {
  margin-left: auto;
}

</style>
