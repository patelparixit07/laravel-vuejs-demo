@extends('layouts.master')

@section('title')
    {{ 'Home | '.config('app.name') }}
@endsection

@section('content')
    <div class="container">
        <div class="py-5 text-center">
            <img class="d-block mx-auto mb-4 logo" src="<?=asset('images/vue-logo.png')?>" alt="Vue.js Logo">
            <h2>Welcome to Vue.js Demo App</h2>
            <p class="lead text-muted">App includes number of vuejs basic examples and demonstrate use of vuejs with Laravel.</p>
            <p class="lead text-muted">Click on below link to start with Samples</p>
            <p class="py-5 lead text-muted">
                <a href="/spa" class="link-1">Enter To SPA</a>
            </p>
        </div>
    </div>
@endsection
