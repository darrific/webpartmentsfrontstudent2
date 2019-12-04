<template>
  <div id="app">
    <nav id="nav">
      <div class="nav-wrapper">
        <div class="container">
          <router-link to="/" class="brand-logo center">WebPartments</router-link>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
            <li><router-link to="/">Apartments</router-link></li>
            <li><router-link to="/Bugs">Bug Reports</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li><router-link to="/">Apartments</router-link></li>
      <li><router-link to="/Bugs">Bug Reports</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted(){
    $('.sidenav').sidenav();
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #1a237e !important;
}

#nav a {
  font-weight: bold;
  color: #fff;
  /* font-size: 20px; */
}

#nav>a.router-link-exact-active {
  color: #42b983;
}

#logoImg {
  margin-top: 5px;
}
</style>
