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
		created: function () {
			window.onscroll = function() {
				if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		  		document.getElementById("navbar").style.padding = "5px 10px";
		  		document.getElementById("navbar").style.backgroundColor = '#121212';
			  } else {
			    document.getElementById("navbar").style.padding = "0px 10px";
			    document.getElementById("navbar").style.backgroundColor = 'rgba(0,0,0,0)';
			  }
			};
		}
	}
</script>

<style>
	a{
		text-decoration: none !important;
	}

	.a_home{
		color: white !important;
	}

	nav{
		width: 100% !important;
	}

	.b-navbar{
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
		width: 100%;
	}

	.dropdown-item{
		color: black !important;
	}

	.dropdown-item:hover{
		background-color: #bb86fc !important;
	}

	
</style>

