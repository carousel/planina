<?php

namespace App\Http\Controllers;

use \Illuminate\Support\Facades\Redis;
use RedisFacade;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Controller;


class HomeController extends Controller


{


    /**
     * Create a new password controller instance.
     *
     * @return void
     */


    public function __construct()
    {
        $this->middleware('guest');
    }

    public function getIndex()
    {
        return view('index');
    }
}
