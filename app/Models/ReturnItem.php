<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReturnItem extends Model
{
    //

    protected $fillable = [
        "borrowing_id",
        "received_by",
        "return_date",
        "condition",
        "fine_amount",
        "fine_paid",
        "notes"
    ];


    public function received()
    {
        return $this->belongsTo(User::class, 'received_by');
    }

    public function borrowing()
    {
        return $this->belongsTo(Borrowing::class, 'borrowing_id');
    }
}
