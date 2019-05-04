<?php

Auth::routes(['register' => false]);

Route::get('/{any}', 'Dashboard\SpaLayoutController@show')->where('any', '[\/\w\.-]*')
    ->name('dashboard.spa-layout.show')
    ->middleware(['auth']);

Route::get('/', function () {
    return redirect('doika/campaigns');
})->name('dashboard.home')->middleware(['auth']);
