<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class AccountController extends Controller
{
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
        return view('account', ['path' => Auth::user()->path]);
    }


    public function upload(Request $req) {
        if($req->file('image')) {
            $path = $req->file('image')->store('uploads', 'public');
            $user = User::find(Auth::user()->id);

            $user->path = $path;

            $user->save();
        }
        return redirect()->route('account');
    }
}