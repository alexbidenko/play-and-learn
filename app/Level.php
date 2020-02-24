<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{

    protected $fillable = [
        'title', 'number', 'subject_id'
    ];

    protected $casts = [
        'id' => 'integer',
        'subject_id' => 'integer',
        'number' => 'integer',
    ];

    protected $table = 'levels';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function tasks() {
        return $this->hasMany('App\Task');
    }
}
