<template>
<div>
  <div class="wrapper">
    <form class="pure-form">
    </form>
  </div>
  <div class="CartMessage">
    <!-- put vif here and velse in another div-->
    <div class="ifStatement" v-if="this.$root.$data.cart.length === 0">Let's Find Places to Visit!</div>
    <div class="ElseStatment" v-else>
      <ul v-for="product in this.$root.$data.cart" :key="product.id">
        <div class='productBox'>
          <button v-on:click="RemoveProduct(product)">
            <i><strong>X</strong></i>
          </button>
          <div class= 'name'>
              {{product.name}}
          </div>
          <div class="image">
            <img :src="'/images/'+product.image">
          </div>
        </div>
      </ul>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    RemoveProduct(product) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product), 1);
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 1px solid #ccc !important;
  border-radius: 4px;
  width: 50%;
}
.name {
  font-size: 25px;
}
button {
  /* background-color: #DFBBB6; */
  padding: 5px;
  font-size: 20px;
}
form {
  display: table;
  width: 100%;
}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
.ifStatement {
  text-align: center;
}
img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}
.ElseStatment {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.productBox{
  border: round;
  background-color: #ffffff !important;
  padding: 5px;
}
</style>
