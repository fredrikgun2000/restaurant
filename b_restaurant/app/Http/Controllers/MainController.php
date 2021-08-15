<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\UploadedFile;
use App\Models\booking;
use App\Mail\ConfirmBooking;

class MainController extends Controller
{
	public function sendEmail($email)
	{
		Mail::to($email)->send(new ConfirmBooking());
	}

    public function booking_post(Request $request)
    {
    	$idc = $request['idc'];
    	$nama = $request['nama'];
    	$hp = $request['hp'];
    	$email = $request['email'];
    	$idp = $request->idp;

        $destinationPath = 'assets/images'; // upload path
        $idp_photo =$idp->hashName();
        $idp->move($destinationPath, $idp_photo);

    	$data = array(
    		'idc' => $idc,
    		'nama' => $nama,
    		'hp' => $hp,
    		'email' => $email,
    		'idp' => $idp_photo,
    	);

    	booking::create($data);


    	$this->sendEmail($email);

    	$data = [];
    	$status = True;
    	$pesan = 'Check Your Email.';

	    $api = array(
	        'status' => $status,
	        'data' => $data,
	        'pesan' => $pesan
	    );

	    return response()->json($api);
	}
}
