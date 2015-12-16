<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
        $this->visit('/')
             ->see('Laravel 5');
    }

    public function testDatabase()
{
    $user = factory(App\Todo::class)->create([
    'description' => 'Abigail',
   ]);

    $this->seeInDatabase('todos', ['description' => 'Abigail']);

    // Use model in tests...
}
}
