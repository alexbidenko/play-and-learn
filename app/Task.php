<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    protected $fillable = [
        'title', 'level_id', 'answer', 'text', 'image', 'solution_text', 'solution_image'
    ];

    protected $casts = [
        'id' => 'integer',
        'level_id' => 'integer',
    ];

    protected $table = 'tasks';
    protected $primaryKey = 'id';
    public $timestamps = false;
}
