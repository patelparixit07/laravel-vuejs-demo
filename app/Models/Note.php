<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\softDeletes;

class Note extends Model
{
    use SoftDeletes;

    protected $fillable = ['text'];

}
