<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{

    protected $fillable = [
        'title',
    ];

    protected $table = 'levels';
    protected $primaryKey = 'id';
    protected $timestamps = false;
}
