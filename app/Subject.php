<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{

    protected $fillable = [
        'title', 'examination_id'
    ];

    protected $table = 'subjects';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
