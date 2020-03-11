<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\IntentRequest;
use App\Models\Intent;
use Auth;

class ListsController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Show the main page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index() {
        $intent = new Intent;
        return view('lists', ['data' => $intent->where('user_id', '=', Auth::user()->id)->orderBy('id', 'asc')->get()]);
    }

    /**
     * Add item to Database and show the main page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function add(IntentRequest $req) {
        $intent = new Intent;
        $intent->query = $req->input('query');
        $intent->user_id = Auth::user()->id;

        $intent->save();
        return redirect()->route('lists');
    }

    public function edit($id, IntentRequest $req) {
        $intent = Intent::find($id);
        $intent->query = $req->input('query');
        $intent->user_id = Auth::user()->id;

        $intent->save();
        return redirect()->route('lists');
    }

    public function delete($id) {
        Intent::find($id)->delete();

        $intent = new Intent;
        return redirect()->route('lists');
    }
}