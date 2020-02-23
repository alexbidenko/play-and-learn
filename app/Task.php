<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $fillable = [
        'title',
    ];

    protected $table = 'tasks';
    protected $primaryKey = 'id';
    protected $timestamps = false;
}
