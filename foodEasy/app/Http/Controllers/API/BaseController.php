<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    //Response
    public function sendResponse($result, $message)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];
        return response()->json($response, 200);
    }


    //Error
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'error' => $error->getMessage(),
            'stackTrace' => $error->getTraceAsString(),
        ];

        if(!empty($errorMessages)){
            $response['status'] = $errorMessages;
        }
        return response()->json($response, $code);
    }
}
