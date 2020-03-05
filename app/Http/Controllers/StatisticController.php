<?php

namespace App\Http\Controllers;

use App\Result;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class StatisticController extends Controller
{
    function addResults(Request $request) {
        $request->validate([
            '*.task_id' => ['required', 'numeric'],
            '*.success' => ['required', 'string'],
            '*.time' => ['required', 'numeric'],
            '*.timestamp' => ['required', 'numeric'],
            '*.answer' => ['sometimes', 'required', 'string'],
        ]);
        $requestBody = $request->all();
        foreach ($requestBody as $result) {
            $result['user_id'] = $request->user()->id;
            Result::create($result);
        }
        return response('', Response::HTTP_CREATED);
    }

    function getUsersList() {
        return User::all();
    }

    function getUserGames($userId) {
        return Result::query()->where('user_id', $userId)->groupBy('timestamp')->get(['id', 'timestamp']);
    }

    function getGameResults($timestamp) {
        return Result::with('task')->where('timestamp', $timestamp)->get();
    }

    function getLastPeriodStatistic($userId) {
        return Result::query()
            ->where('timestamp', '>', (time() - 60 * 60 * 24 * 30) * 1000)->get()->groupBy('timestamp');
    }
}
