<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReturnItemController extends Controller
{
    //

    public function index()
    {
        $borrowings = Borrowing::with(['approver', 'borrower', 'item.category'])->where('status', 'borrowed')->filteringByRole()->latest()->paginate(9);
        return Inertia::render("modules/return-items/page", [
            "borrowings" => $borrowings
        ]);
    }
}
