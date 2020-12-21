<template> 
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/navBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style src="./assets/tailwind.css"/>
