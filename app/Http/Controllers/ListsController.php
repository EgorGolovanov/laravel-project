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
    public function index(Request $req) {
        $intent = new Intent;
        $query_id = $req->query('field', 'id');
        $query_order = $req->query('order', 'asc');

        return view('lists', ['data' => $intent->where('user_id', '=', Auth::user()->id)->orderBy($query_id, $query_order)->get()]);
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
        if ($intent->user_id === Auth::user()->id) {
            $intent->query = $req->input('query');
            $intent->user_id = Auth::user()->id;

            $intent->save();
        }
        return redirect()->route('lists');
    }

    public function delete($id) {
        $deleteItem = Intent::find($id);
        if ($deleteItem->user_id === Auth::user()->id) {
           $deleteItem->delete(); 
        }
        return redirect()->route('lists');
    }
}