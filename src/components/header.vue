<template>
	<div class="b-navbar" id="navbar">
		<b-navbar toggleable="lg" type="dark" variant="" class="container-fluid">
		    <b-navbar-brand href="#">FutureLand</b-navbar-brand>

		    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		    <b-collapse id="nav-collapse" is-nav>
		      <b-navbar-nav>
		        <b-nav-item href="#">
		        	<router-link to="/" class="a_home">Home</router-link>
		        </b-nav-item>

		        <b-nav-item-dropdown text="Service" right>
		        <b-dropdown-item href="#">
		        	<router-link to="/menu" class="text-dark">Menu</router-link>
		        </b-dropdown-item>
		        <b-dropdown-item href="#">
		        	<router-link to="/tbooking" class="text-dark">Table Booking</router-link>
		        </b-dropdown-item>
		        <b-dropdown-item href="#">
		        	<router-link to="/dilivery" class="text-dark">Dilivery</router-link>
		        </b-dropdown-item>
		        <b-dropdown-item href="#">
		        	<router-link to="/schedule" class="text-dark">Schedule</router-link>
		        </b-dropdown-item>
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
	a{
		text-decoration: none !important;
	}

	.a_home{
		color: white !important;
	}



	.b-navbar{
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
	}

	.dropdown-item{
		color: black !important;
	}

	.dropdown-item:hover{
		background-color: #bb86fc !important;
	}

	
</style>

