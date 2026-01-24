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
}
