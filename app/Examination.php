<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Examination extends Model
{

    protected $fillable = [
        'title',
    ];

    protected $table = 'examinations';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
