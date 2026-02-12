<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Borrowing extends Model
{
    protected $fillable = [
        'borrower_id',
        'item_id',
        'quantity',
        'borrow_date',
        'planned_return_date',
        'actual_return_date',
        'status',
        'notes',
        'approved_by',
        'approved_at',
    ];

    public function borrower(): BelongsTo
    {
        return $this->belongsTo(User::class, 'borrower_id');
    }

    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }

    public function approver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by');
    }

    /**
     * Scope by roles.
     */

    public function scopeFilteringByRole(Builder $query)
    {
        $user = auth()->user();

        if ($user->role === 'user') {
            return $query->where('borrower_id', $user->id);
        }

        return $query;
    }
}
