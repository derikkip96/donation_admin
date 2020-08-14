<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\SubmitRequestTrait;
use Illuminate\Support\Facades\Auth;


class HomeController extends Controller
{
    use SubmitRequestTrait ;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $email = Auth::user()->email;
        $password = Auth::user()->password;
        $token = Auth::user()->token;
        // dd($token);
        $headers = array('Content-Type:application/json','Authorization:Bearer ' . $token);
        $url = "http://localhost:8000/api/payments-data";

        $transactions = $this->submitRequest($url,'',$headers,"GET");
        $transactions = json_decode($transactions);
        if(empty($transactions)){
            $transactions = [];
        }
        // dd($transactions);
        return view('admin.payments.index',compact('transactions'));
    }
}
