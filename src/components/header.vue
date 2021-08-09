<template>
	<div class="b-navbar">
		<b-navbar toggleable="lg" type="dark" variant="" class="container-fluid">
		    <b-navbar-brand href="#">FutureLand</b-navbar-brand>

		    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		    <b-collapse id="nav-collapse" is-nav>
		      <b-navbar-nav>
		        <b-nav-item href="#">Home</b-nav-item>

		        <b-nav-item-dropdown text="Feature" right>
		        <b-dropdown-item href="#">EN</b-dropdown-item>
			        <b-dropdown-item href="#">ES</b-dropdown-item>
			        <b-dropdown-item href="#">RU</b-dropdown-item>
			        <b-dropdown-item href="#">FA</b-dropdown-item>
		      </b-nav-item-dropdown>

		      </b-navbar-nav>
		    </b-collapse>
		  </b-navbar>
	</div>
</template>

<script>
	export default{

	}
</script>

<style>
	.b-navbar{
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
	}

	::-webkit-scrollbar {
      width: 1px;
    }
</style>

