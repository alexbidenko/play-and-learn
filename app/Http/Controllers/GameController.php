<?php

namespace App\Http\Controllers;

use App\Level;
use Illuminate\Http\Request;

class GameController extends Controller
{

    function levelsBySubject($subjectId, Request $request) {
        return Level::with('tasks')->whereSubjectId($subjectId)->get();
    }
}
