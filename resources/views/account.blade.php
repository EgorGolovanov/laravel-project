@extends('layouts.app')

@section('content')
    <h1> Account </h1>
    <div class="container">
        <form action="{{ route('upload-image') }}" method="post" enctype="multipart/form-data" id="account-form">
            @csrf
            @isset($path)
                <img src="{{ asset('/storage/' . $path) }}" alt="Avatar">
            @else
                <img src="/default.png" alt="Default image">
            @endisset
            <div class="form-group">
                <input type="file" name="image">
            </div>
            <span>
                Username: {{ Auth::user()->name }}
            </span>
            <button type="submit" class="btn btn-success">
                Change avatar
            </button>
        </form>
    </div>
@endsection