<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use App\Http\Controllers\Controller;


class MountainController extends Controller


{




    public function __construct()
    {
        $this->middleware('guest');
    }

    public function getMountain($name)
    {
        return view('mountain')
            ->with('name',$name);
    }
}
