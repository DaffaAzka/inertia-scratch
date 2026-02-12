<?php

namespace App\Http\Controllers;

use App\Models\Borrowing;
use App\Models\Category;
use App\Models\Item;
use Auth;
use DB;
use Illuminate\Http\Request;

class BorrowingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $query = Borrowing::with(['item', 'item.category', 'borrower'])->filteringByRole()->latest();

        // if ($request->has('search') && $request->search) {
        //     $query = $query->where('name', 'like', '%' . $request->search . '%')->orWhere('code', 'like', '%' . $request->search . '%')->orWhere('description', 'like', '%' . $request->search . '%');
        // }

        $borrowings = $query->paginate(10);
        $user = auth()->user();
        // $categories = Category::all();

        return inertia('modules/borrowings/index', [
            'borrowings' => $borrowings,
            'filters' => $request->only(['search']),
            'user' => $user
            // 'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'item_id' => 'required|exists:items,id',
            'quantity' => 'required|integer|min:1',
            'planned_return_date' => 'required|date|after:today',
            'notes' => 'nullable|string',
            'borrow_date' => 'required|date',
        ]);

        DB::transaction(function () use ($request) {
            Borrowing::create(attributes: [
                'borrower_id' => auth()->id(),
                'item_id' => $request->item_id,
                'quantity' => $request->quantity,
                'borrow_date' => $request->borrow_date,
                'planned_return_date' => $request->planned_return_date,
                'notes' => $request->notes,
                'status' => 'pending',
            ]);

            Item::where('id', $request->item_id)->decrement('evailable_quantity', $request->quantity);
        });

        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
