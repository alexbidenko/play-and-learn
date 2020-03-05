<?php

namespace App\Http\Controllers;

use App\Result;
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
        ]);
        $requestBody = $request->all();
        foreach ($requestBody as $result) {
            $result['user_id'] = $request->user();
            Result::create($result);
        }
        return response()->setStatusCode(Response::HTTP_CREATED);
    }
}
