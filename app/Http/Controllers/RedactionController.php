<?php

namespace App\Http\Controllers;

use App\Examination;
use App\Level;
use App\Subject;
use App\Task;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class RedactionController extends Controller
{

    function examinations() {
        return response()->json(Examination::all(), 200);
    }

    function subjects() {
        return response()->json(Subject::all(), 200);
    }

    function levels() {
        return response()->json(Level::all(), 200);
    }

    function tasks() {
        return response()->json(Task::all(), 200);
    }

    function subjectsByExamination($examinationId) {
        return Subject::whereExaminationId($examinationId)->get();
    }

    function levelsBySubject($subjectId) {
        return Level::whereSubjectId($subjectId)->get();
    }

    function tasksByLevel($levelId) {
        return Task::whereLevelId($levelId)->get();
    }

    function addExamination(Request $request) {
        $request->validate([
            'title' => ['required', 'string']
        ]);

        $examination = Examination::create([
            'title' => $request->title
        ]);

        return response()->json($examination, 201);
    }

    function addSubject(Request $request) {
        $request->validate([
            'examination_id' => ['required', 'numeric'],
            'title' => ['required', 'string']
        ]);

        $subject = Subject::create([
            'examination_id' => $request->examination_id,
            'title' => $request->title
        ]);

        return response()->json($subject, 201);
    }

    function addLevel(Request $request) {
        $request->validate([
            'subject_id' => ['required', 'numeric'],
            'number' => ['required', 'numeric',
                Rule::unique('levels')->where(function (Builder $query) use ($request) {
                return $query->where('subject_id', $request->subject_id);
            })],
            'title' => ['required', 'string']
        ]);

        $level = Level::create([
            'subject_id' => $request->subject_id,
            'number' => $request->number,
            'title' => $request->title
        ]);

        return response()->json($level, 201);
    }

    function addTask(Request $request) {
        $request->validate([
            'level_id' => ['required', 'numeric'],
            'title' => ['required', 'string'],
            'text' => ['required', 'string'],
            'answer' => ['required', 'string'],
            'image' => ['sometimes', 'sometimes', 'image', 'mimes:jpeg,bmp,png'],
        ]);

        $filepath = '';

        if($request->file('image')) {
            $filepath = ''.time().'_'.Str::random(8).'.'.$request->file('image')->getClientOriginalExtension();

            $request->file('image')->storeAs('tasks', $filepath, 'public');
        }

        $task = Task::create([
            'level_id' => $request->level_id,
            'title' => $request->title,
            'text' => $request->text,
            'answer' => $request->answer,
            'image' => $filepath
        ]);

        return response()->json($task, 201);
    }

    function updateExamination($id, Request $request) {
        $validated = $request->validate([
            'title' => ['string']
        ]);

        Examination::findOrFail($id)->update($validated);

        return response()->json(Examination::find($id));
    }

    function updateSubject($id, Request $request) {
        $validated = $request->validate([
            'examination_id' => ['numeric'],
            'title' => ['string']
        ]);

        Subject::findOrFail($id)->update($validated);

        return response()->json(Subject::find($id));
    }

    function updateLevel($id, Request $request) {
        $validated = $request->validate([
            'subject_id' => ['numeric'],
            'number' => ['numeric',
                Rule::unique('levels')->where(function (Builder $query) use ($request) {
                    return $query->where('subject_id', $request->subject_id);
                })],
            'title' => ['string']
        ]);

        Level::findOrFail($id)->update($validated);

        return response()->json(Level::find($id));
    }

    function updateTask($id, Request $request) {
        $validated = $request->validate([
            'level_id' => ['numeric'],
            'title' => ['string'],
            'text' => ['string'],
            'answer' => ['string'],
            'image' => ['sometimes', 'sometimes', 'image', 'mimes:jpeg,bmp,png'],
        ]);

        $filepath = '';

        if($request->file('image')) {
            $filepath = ''.time().'_'.Str::random(8).'.'.$request->file('image')->getClientOriginalExtension();

            $request->file('image')->storeAs('tasks', $filepath, 'public');

            $oldFile = Task::whereId($id)->value('image');

            if($oldFile && Storage::disk('public')->exists('tasks/'.$oldFile))
                Storage::disk('public')->delete('tasks/'.$oldFile);
        }

        if($filepath)
            $validated['image'] = $filepath;
        else
            unset($validated['image']);

        Task::findOrFail($id)->update($validated);

        return response()->json(Task::find($id));
    }

    function deleteExamination($id) {
        return Examination::whereId($id)->forceDelete();
    }

    function deleteSubject($id) {
        return Subject::whereId($id)->forceDelete();
    }

    function deleteLevel($id) {
        return Level::whereId($id)->forceDelete();
    }

    function deleteTask($id) {
        $oldFile = Task::whereId($id)->value('image');


        if($oldFile && Storage::disk('public')->exists('tasks/'.$oldFile))
            Storage::disk('public')->delete('tasks/'.$oldFile);

        return Task::whereId($id)->forceDelete();
    }
}
