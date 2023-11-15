<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    protected $fillable = [
         'name','slug','price','decscription','quantity','status','category_id','image'
    ];
    protected $primaryKey = 'id';
    protected $table = 'products';
    public $timestamps = true;
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
