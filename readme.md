## Laravel-tokenauth experiment

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel 5.1 auth using JSON web tokens (JWTs).

uses tymons jwt-auth on the PHP to generate a JWT which stored on the client side using satellizer.

view app/Http/Controllers/TokenAuthController.php for PHP login and public/js/AuthController.js for javascript.

the client-side uses a then promise with error handling to authenticate the user and parse the data to the laravel API.

on the Laravel side, the JWT library exceptions are used in a series of try/catch blocks to determine the validity of the tokens.

