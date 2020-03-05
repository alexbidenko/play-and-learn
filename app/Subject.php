<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{

    protected $fillable = [
        'title', 'examination_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'examination_id' => 'integer',
    ];

    protected $table = 'subjects';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
