<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class booking extends Model
{
    protected $table = "booking";
    protected $fillable = ['idc','nama','hp','email','idp'];
}
