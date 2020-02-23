<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{

    protected $fillable = [
        'title', 'number', 'subject_id'
    ];

    protected $table = 'levels';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
