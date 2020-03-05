<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = [
        'task_id', 'success', 'time', 'timestamp', 'user_id'
    ];

    protected $table = 'results';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function task() {
        return $this->hasOne('App\Task');
    }

    public function user() {
        return $this->hasOne('App\User');
    }
}
