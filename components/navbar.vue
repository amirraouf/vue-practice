<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <a class="navbar-item">
	      <img src="https://vuejs.org/images/logo.png?_sw-precache=cf23526f451784ff137f161b8fe18d5a" alt="Bulma: a modern CSS framework based on Flexbox" height="28">
	    </a>
	    <nuxt-link to='/' class="navbar-item">
	    	Home
	    </nuxt-link>
	    <nuxt-link to='/calculator' class="navbar-item">
	    	Calculator
	    </nuxt-link>

	    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	      <span aria-hidden="true"></span>
	    </a>
	  </div>
	</nav>
</template>

<script>
	export default {

	}
</script>

<style>
	
</style>