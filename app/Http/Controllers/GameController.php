<?php

namespace App\Http\Controllers;

use App\Level;
use App\Subject;
use Illuminate\Http\Request;

class GameController extends Controller
{

    function subjectsByExamination($examinationId, Request $request) {
        return Subject::whereExaminationId($examinationId)->get();
    }

    function levelsBySubject($subjectId, Request $request) {
        return Level::with('tasks')->whereSubjectId($subjectId)->get();
    }
}
