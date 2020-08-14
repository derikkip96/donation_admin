<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Traits\SubmitRequestTrait;


class LoginController extends Controller
{
    use SubmitRequestTrait ;
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    

    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {           
            $post_data = json_encode($credentials);
            $headers = array('Content-Type:application/json');
            $url = "http://localhost:8000/login_user";;
            $login_data = $this->submitRequest($url,$post_data,$headers,"POST");
            $login_data = json_decode($login_data);
            if (property_exists($login_data,'success')){
                $validation = $login_data->success;
                if($validation !=false){
                    $user = Auth::user();
                    $user->token = $login_data->token;
                    $user->save();
                    return redirect('/home');
                } 
                
            } 
        }
        
    }
}
