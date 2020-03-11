@extends('layouts.app')

@section('content')
    <h1> Lists page </h1>
    <form id="form" action="{{ route('add-form') }}" method="post">
		@csrf
		<input type="text" placeholder="Input your text" id="query" name="query">
		<button type="submit" id="button">
			Add
		</button>
		@if($errors->any())
			@foreach($errors->all() as $er)
				<div class="alert">
					<span> {{ $er }} </span>
				</div>
			@endforeach
		@endif
	</form>
	<form id="sort-form">
		@csrf
		<p id="text-line">Sort by:</p>
		<div class="radio-wrap">
			<input type="radio" class="asc" name="sort-radiobutton" value="id" id="number-sort" checked>
			<label for="number-sort">Number</label>
			<input type="radio" class="desc" name="sort-radiobutton" value="id" id="rnumber-sort">
			<label for="rnumber-sort">Reverse number</label>
			<input type="radio" class="asc" name="sort-radiobutton" value="value" id="alphabet-sort">
			<label for="alphabet-sort">Alphabet</label>
			<input type="radio" class="desc" name="sort-radiobutton" value="value" id="ralphabet-sort">
			<label for="ralphabet-sort">Reverse alphabet</label>
		</div>
	</form>	
@endsection
@section('myList')
	<div class="list-container">
		<ul id="list-item">
			@foreach($data as $el)
				<li class="item">
					<div class="data-id">{{ $el->id }}</div>
					<div class="data-query">{{ $el->query }}</div>
					<form action="{{ route('edit', $el->id) }}" method="post" class="edit-form hidden">
						@csrf
						<input type="text" name="query" value="{{ $el->query }}" id="query" class="edit-query">
						<button type="submit" class="ok" id="okbutton">Ok</button>
						<button class="cancel" id="canselbutton">Cancel</button>
					</form>

					<button class="delete" id="dbutton">X</button>
					<button class="edit" id="editbutton">Edit</button>
				</li>
			@endforeach
		</ul>
	</div>
@endsection