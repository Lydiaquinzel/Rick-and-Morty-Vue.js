<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <ListCharacters/>
  </div>
</template>

<script>

  import ListCharacters from './components/ListCharacters.vue'; 

  export default {
    name: 'App',
    components: {
      ListCharacters
    }
  }

</script>

<style lang="scss">
:root { // Root to global style variables.
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding:  0;
}
body {
  // background-image: url(@/assets/images/rick-and-morty-wallpaper.jpg);
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container { // Container for "ListCharacters" component.
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
