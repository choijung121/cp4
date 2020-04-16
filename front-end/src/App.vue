<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link class="routerLink" to="/">
        <img src="/images/utahLogo.png">
      </router-link>
      <router-link to="/">
        <h1>Explore Utah</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item browse">
          <div class="ifStatement" v-if="this.$root.$data.cart.length === 0 || this.$root.$data.cart.length === 1">{{numberOfItems}} Park</div>
          <div class="ElseStatment" v-else>
            <p>{{numberOfItems}} Parks</p>
          </div>
        </div>
      </router-link>
      <router-link to="/suggestion">
        <div class="menu-item browse">
          <p>Suggestions</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
    <p></p>
    <a href="https://github.com/choijung121/creative3.git">Jung's Github</a>
  </div>
</div>
</template>

<script>
  export default{
    computed:{
      numberOfItems()
      {
        return this.$root.$data.cart.length;
      }
    }
  }

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 80px;
  /* width: 30%; */
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

/* #side img {
  width: 50px;
} */

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer{
  /* display: flex; */
  /* justify-content: center; */
  height: 80px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}
.footer a {
  color: #000;
}

a {
  text-decoration: none;
  color: #000000 !important;
}
</style>
