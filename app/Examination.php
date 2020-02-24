<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Examination extends Model
{

    protected $fillable = [
        'title',
    ];

    protected $casts = [
        'id' => 'integer'
    ];

    protected $table = 'examinations';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
