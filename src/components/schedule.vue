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
						<h1 style="color: #BB86FC;">Schedule</h1>
					</div>
				</div>
			</div>
		</div>

		<div class="booking my-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h5>Our Activity</h5>
					</div>
				</div>
				<div class="row my-3">
					<div class="col-lg-1 mt-2">
						<b class="btn-order" style="background-color: #71c62b;">Open</b>
					</div>
					<div class="col-lg-11">
						<b>Now</b>
						<p>We are open from <b>07:00 AM - 01:00 PM</b> because after that the road to the restaurant is already covered with water
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12" style="max-height: 300px; overflow-y: auto;">
						<div class="row my-3" style="padding-left: 40px;">
					<div class="col-lg-1 mt-4">
						<b class="btn-order" style="background-color: #d32f2f;">Close</b>
					</div>
					<div class="col-lg-9">
						<b>Now</b>
						<p>We are open from <b>07:00 AM - 01:00 PM</b> because after that the road to the restaurant is already covered with water
						</p>
					</div>
				</div>
				<div class="row my-3" style="padding-left: 40px;">
					<div class="col-lg-1 mt-4">
						<b class="btn-order" style="background-color: #d32f2f;">Close</b>
					</div>
					<div class="col-lg-9">
						<b>Now</b>
						<p>We are open from <b>07:00 AM - 01:00 PM</b> because after that the road to the restaurant is already covered with water
						</p>
					</div>
				</div>
				<div class="row my-3" style="padding-left: 40px;">
					<div class="col-lg-1 mt-4">
						<b class="btn-order" style="background-color: #d32f2f;">Close</b>
					</div>
					<div class="col-lg-9">
						<b>Now</b>
						<p>We are open from <b>07:00 AM - 01:00 PM</b> because after that the road to the restaurant is already covered with water
						</p>
					</div>
				</div>	
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

	.btn-order{
		padding: 0px 15px;
		border-radius: 10px;
	}

	
</style>