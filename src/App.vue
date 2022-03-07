<template>
  <div id="app" class="text-right">
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <a href="/#intro">Intro</a> |
      <a href="/#skill">Skills</a> |
      <a href="/#project">Projects</a> |
      <router-link to="/about">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Merriweather|Montserrat|Sacramento");

#nav {
  padding: 30px;
  background-color: #E4F9F5 ;
  a{
    color: #11999E;
    font-family: 'Montserrat', sans-serif;
    margin: 10px 20px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:active {
      color: #42b983;
    }

  a:hover {
    color: #66BFBF;
  }
}
</style>
