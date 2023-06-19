<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Employe;

class EmployeController extends BaseController
{
    //
    public function getDelivery(){
        $employes = Employe::get();
        try{
            return $this->sendResponse($employes, 200);
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }
}
