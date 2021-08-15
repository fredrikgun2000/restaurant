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
				<div v-for="d in data" v-bind:key = "d.id">
				<div class="row my-4">
					<div class="col-lg-4 text-center">
						<img src="@/assets/img/develope/sabun_gastro-1.jpeg">
					</div>
					<div class="col-lg-8">
						<h3> {{ d.nama }} </h3>
						<b v-bind:style = "style">{{ d.jenis }}</b>
						<p>{{ d.deskripsi }}</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	// import $ from 'jquery'

	export default{
		data: function () {
		    return {
		    	data : undefined,
		    	style : {
		    		backgroundColor : ''
		    	}
		    }
		},
		created: function () {
			this.MenuShow();
		},
		methods: {
			MenuShow(){
				axios({
				  method: 'get',
				  url: 'http://localhost:8000/api/menu/show',
				}).then(
					(response) => {
						this.data = response.data.data;
						this.data.forEach((item) => {
							switch (item.jenis){
								case 'Appetizer':
									this.style.backgroundColor = '#e2a76f';
									break;
								case 'Main Course':
									this.style.backgroundColor = '#71c62b';
									break;
								case 'Dessert':
									this.style.backgroundColor = '#0073ff';
									break;
								default:
									console.log('a');
							}
						});
					} 
				);
			}
		}
	}
</script>
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