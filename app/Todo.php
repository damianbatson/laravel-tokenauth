<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{

	protected $table = 'todos';

    protected $fillable = ['description','owner_id','is_done'];

    public function owner()
    {
        return $this->belongsTo('App\User','owner_id');
    }


}
