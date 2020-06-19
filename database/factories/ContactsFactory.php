<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Contacts;
use Faker\Generator as Faker;

$factory->define(Contacts::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'question' => $faker->sentence(50),
    ];
});
