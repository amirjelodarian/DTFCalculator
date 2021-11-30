<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DTFCalculator extends Model
{
    use HasFactory;
    protected $connection = 'sqlite';
    protected $fillable = ['film_pet_price','color_price','sugar_price'];

    public function setFilmPetPriceAttribute($value){
        $priceBefore = explode(',',$value);
        $this->attributes['film_pet_price'] = implode('',$priceBefore);
    }
    
    public function setColorPriceAttribute($value){
        $priceBefore = explode(',',$value);
        $this->attributes['color_price'] = implode('',$priceBefore);
    }

    public function setSugarPriceAttribute($value){
        $priceBefore = explode(',',$value);
        $this->attributes['sugar_price'] = implode('',$priceBefore);
    }
}
