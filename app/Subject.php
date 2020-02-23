<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{

    protected $fillable = [
        'title',
    ];

    protected $table = 'subjects';
    protected $primaryKey = 'id';
    protected $timestamps = false;
}
