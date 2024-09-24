<?php

use Illuminate\Support\Facades\Route;



Route::get('/{any}', function () {
    return view('welcome'); // Make sure 'welcome' is your React entry view
})->where('any', '.*');

