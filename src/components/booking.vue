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
						<h1 style="color: #BB86FC;">Table Booking</h1>
					</div>
				</div>
			</div>
		</div>

		<div class="booking my-5">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h5>Grade</h5>
					</div>
				</div>
				<div class="row my-3">
					<div class="col-lg-12">
						  <div class="row">
						  	<div class="col-lg-3 meja meja1">
						  	</div>
						  	<div class="col-lg-3 meja meja2">
						  	</div>
						  	<div class="col-lg-3 meja meja3">
						  	</div>
						  </div>
						  <div class="row">
						  	<div class="col-lg-3 meja-lapis meja-lapis1">
						  		<b>Under World</b>
						  		<p>10 meters below the water levell</p>
						  	</div>
						  	<div class="col-lg-3 meja-lapis meja-lapis2">
						  		<b>Future</b>
						  		<p>2 meters below the water level</p>
						  	</div>
						  	<div class="col-lg-3 meja-lapis meja-lapis3">
						  		<b>Heaven</b>
						  		<p>10 meters above the water level</p>
						  	</div>
						  </div>
					</div>
				</div>
				<div class="row my-5">
					<div class="col-lg-4 mx-auto text-center">
						<button class="btn-order button" v-b-modal.modal-prevent-closing>Order Table</button>
					</div>
				</div>
			</div>
		</div>

		<b-modal id="modal-prevent-closing" ref="modal" @show="resetModal" @hidden="resetModal" @ok="handleOk">
			<form ref="form" @submit.stop.prevent="handleSubmit" enctype="multipart/form-data" method="POST">
				<b-form-group label="ID Card Citizen" label-for="idc-input" invalid-feedback="id card is required" :state="idcState">
				  <b-form-input id="idc-input" v-model="idc"
				    :state="idcState" required class="my-2"></b-form-input>
				</b-form-group>

				<b-form-group label="Your Name" label-for="nama-input" invalid-feedback="name is required" :state="namaState">
				  <b-form-input id="nama-input" v-model="nama"
				    :state="namaState" required class="my-2"></b-form-input>
				</b-form-group>

				<b-form-group label="Your Email" label-for="email-input" invalid-feedback="Email is required" :state="emailState">
				  <b-form-input id="email-input" v-model="email"
				    :state="emailState" required class="my-2"></b-form-input>
				</b-form-group>

				<b-form-group label="Phone Number" type="password" label-for="phone-input" invalid-feedback="phone number is required" :state="hpState">
				  <b-form-input id="phone-input" v-model="hp"
				    :state="hpState" required class="my-2"></b-form-input>
				</b-form-group>

				<b-form-group label="ID Card Photo" label-for="photo-input" invalid-feedback="photo is required" :state="photoState">
				  <b-form-file id="photo-input" v-model="photo" @change="onfileselected"
				    :state="photoState" required class="my-2">
				    </b-form-file>
				</b-form-group>
				<img :src="pri" width="100">
			</form>
	    </b-modal>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data: function () {
		    return {
		    	idc: '',
		        idcState: null,
		    	nama: '',
		        namaState: null,
		    	email: '',
		        emailState: null,
		    	hp: '',
		        hpState: null,
		    	photo: null,
		        photoState: null,
		        select:null,
		        pri:'',
		        submittedNames: [],
		    }
		},
		methods: {
			checkFormValidity() {
	        const valid = this.$refs.form.checkValidity()
	        this.idcState = valid
	        this.namaState = valid
	        this.emailState = valid
	        this.hpState = valid
	        this.photoState = valid
	        return valid
	      },
	      resetModal() {
		    	this.idc = ''
		        this.idcState = null
		    	this.nama = ''
		        this.namaState = null
		    	this.email = ''
		        this.emailState = null
		    	this.hp = ''
		        this.hpState = null
		    	this.photo = ''
		    	this.pri = ''
		        this.photoState = null
	      },
	      handleOk(bvModalEvt) {
	        bvModalEvt.preventDefault()
	        this.handleSubmit()
	      },
	      onfileselected(event){
	      	this.select = event.target.files[0];
	      	this.pri = URL.createObjectURL(this.select);
	      },
	      handleSubmit() {
	        if (!this.checkFormValidity()) {
	          return
	        }

	        let data = new FormData();
	        data.append('idc', this.idc);
	        data.append('nama', this.nama);
	        data.append('email', this.email);
	        data.append('hp', this.hp);
	        data.append('idp', this.select);
	        console.log(this.select)

	        axios({
			  method: 'post',
			  url: 'http://localhost:8000/api/booking/post',
			  data: data,
			});

	        this.$nextTick(() => {
	          this.$bvModal.hide('modal-prevent-closing')
	        })
	      }
		}
	}
</script>
<style>
	.modal-footer{
		border: none !important;
	}

	.modal-header{
		border: none !important;
	}

	input{
		background-color: rgba(0,0,0,0) !important;
		color: white !important;
		border: 0.1 solid white !important;
	}

	.modal-content{
		background-color: #121212 !important;
		color:white;
	}

	.btn-secondary{
		background-color: rgba(0,0,0,0) !important;
		border: none !important;
	}

	.btn-primary{
		background-color: #BB86FC !important;
	}

	.close{
		background-color: rgba(0,0,0,0);
		border: none;
		color: black;
	}

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

	.meja {
		min-height: 400px; 
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 10px;

	}

	.meja1{
		background-image: url("~@/assets/img/develope/ithaa-1.jpg");
	}

	.meja2{
		background-image: url("~@/assets/img/develope/Alain-Ducasse-scaled.jpg");
		margin: 0px 140px;
	}

	.meja3{
		background-image: url("~@/assets/img/develope/ufo-restaurant.jpg");
	}


	.meja-lapis {
		padding-top: 20px;
		max-height: 400px; 
		background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1));
		border-radius: 10px;
		margin-top: -100px !important;
	}

	.meja-lapis2{
		margin: 0px 140px;
	}

	.btn-order{
		padding: 0px 15px;
		border-radius: 10px;
	}

	
</style>