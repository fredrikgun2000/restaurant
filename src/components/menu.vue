<template>
	<div>
		<div class="lapis1">
			<video autoplay muted loop src="@/assets/video/Restaurant Promo Video _ Sigma 30mm f_1.4.mp4">
			</video>
		</div>
		<div class="header1">
			<div class="container kontenheader changenavbar">
				<div class="row">
					<div class="col-lg-6">
						<h6>Hai, welcome to </h6>
						<h1 style="color: #BB86FC;">Menu</h1>
					</div>
				</div>
			</div>
		</div>

		<div class="menu my-5">
			<div class="container">
				<div class="row mb-5">
					<div class="col-lg-4">
						<select class="form-control">
							<option>Select The Date</option>
						</select>
					</div>
				</div>
				<div class="row my-4">
					<div class="col-lg-4 text-center">
						<img src="@/assets/img/develope/sabun_gastro-1.jpeg">
					</div>
					<div class="col-lg-8">
						<h3>Lorem ipsum dolor</h3>
						<b style="background-color: #e2a76f;">Appetizer</b>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
				<div class="row my-4">
					<div class="col-lg-4 text-center">
						<img src="@/assets/img/develope/sabun_gastro-1.jpeg">
					</div>
					<div class="col-lg-8">
						<h3>Lorem ipsum dolor</h3>
						<b style="background-color: #71c62b;">Main Course</b>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
				<div class="row my-4">
					<div class="col-lg-4 text-center">
						<img src="@/assets/img/develope/sabun_gastro-1.jpeg">
					</div>
					<div class="col-lg-8">
						<h3>Lorem ipsum dolor</h3>
						<b style="background-color: #0073ff;">Desert</b>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>
<style>
	video{
		width: 100%;
		height: 300px;
		object-fit: cover; 
	}

	.lapis1{
		position: absolute;
		top: 0;
		z-index: 1;
		width: 100%;
	}

	.lapis1::after{
		content: '';
		display: inline-block;
		background-color: rgba(0,0,0,0.4);
		height: 300px;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.header1{
		height: 300px;
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 3;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center; 
	}

	select{
		background-color:rgba(0,0,0,0) !important;
		color: white !important;
	}

	option{
		color: black !important;

	}

	.menu img{
		width: 230px;
		height: 200px;
		border-radius: 45px;
	}

	.menu b{
		padding: 0px 15px;
		border-radius: 10px;
	}
</style>