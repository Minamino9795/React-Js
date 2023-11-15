<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    protected $fillable = [
         'name',
    ];
    protected $primaryKey = 'id';
    protected $table = 'categories';
    public $timestamps = true;
    public function product()

    {
        return $this->hasMany(Product::class, 'category_id', 'id');
    }
}
