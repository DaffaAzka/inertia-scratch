<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityLogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //
        $query = ActivityLog::with('user')->latest();

        if ($request->has('search') && $request->search) {
            $query = $query->where('action', 'like', '%' . $request->search . '%')->orWhere('name', 'like', '%' . $request->search . '%');
        }

        if ($request->has('filter_by_user_id') && $request->filter_by_user_id) {
            $query = $query->where('user_id', 'like', '%' . $request->filter_by_user_id . '%');
        }

        $activityLogs = $query->paginate(10);
        return Inertia::render('modules/activity-logs/activity-logs', [
            'activityLogs' => $activityLogs
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
