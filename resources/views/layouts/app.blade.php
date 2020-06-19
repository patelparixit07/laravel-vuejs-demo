<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>@yield('title')</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>        
    </head>
    <body>
        <div id="app">
            @include('layouts.header')

            <spa-pagination-links site_name="{{ config('app.name') }}">
            </spa-pagination-links>           
            
            <transition name="fade-in" mode="out-in"> 
                <router-view></router-view>
            </transition>
            
            @include('layouts.footer')
        </div>
    </body>
    <footer>
        <script src="{{ asset('js/app.js') }}"></script>
    </footer>
</html>
