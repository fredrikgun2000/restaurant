<template>
	<div>
		<div class="lapis1">
			<video autoplay muted loop src="@/assets/video/bg1.mp4">
			</video>
		</div>
		<div class="header1">
			<div class="container kontenheader changenavbar">
				<div class="row">
					<div class="col-lg-6">
						<h6>Future innovations and masterpieces</h6>
						<h1 style="color: #BB86FC;">{{heading}}</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
</style>