<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Question::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'slug' => str_slug($faker->sentence),
        'body' => $faker->text,
        'category_id' => function () {
            return \App\Model\Category::all()->random();
        },
        'user_id' => function () {
            return \App\User::all()->random();
        }

    ];
});
