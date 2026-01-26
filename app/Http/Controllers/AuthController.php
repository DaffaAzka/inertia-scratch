<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {
        return Inertia::render("auth/login");
    }

    public function register(Request $request)
    {
        return Inertia::render("auth/register");
    }

    public function createUser(Request $request)
    {
        $request->validate([
            "email" => "required|email|unique:users,email",
            "fullname" => "required|string",
            "password" => "required|min:8|string",
            "retry_password" => "required|min:8|same:password|string"
        ]);
        dd($request->all());
    }
}
