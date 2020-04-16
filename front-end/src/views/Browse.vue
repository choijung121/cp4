<template>
  <div>
    <div class="pure-menu pure-menu-horizontal">
      <ul class="pure-menu-list">
        <li class="pure-menu-item"><a @click="select('National Park')" href="#" class="pure-menu-link">National Park</a></li>
        <li class="pure-menu-item"><a @click="select('State Park')" href="#" class="pure-menu-link">State Park</a></li>
        <li class="pure-menu-item"><a @click="select('Conservation Area')" href="#" class="pure-menu-link">Conservation Area</a></li>
        <li class="pure-menu-item"><a @click="select('National Monument')" href="#" class="pure-menu-link">National Monument</a></li>
      </ul>
    </div>
  <ProductList :products="products" />

</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      variable: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.type === this.variable);
    }
  },
  methods: {
    select(type) {
      this.variable = type;
    }
  }
}
</script>

<style scoped>
.pure-menu-list {
  display: flex;
  justify-content: center;
}
</style>
