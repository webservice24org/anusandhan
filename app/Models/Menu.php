<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'link',
        'status',
        'position'
    ];

    public function subMenus()
    {
        return $this->hasMany(SubMenu::class, 'menu_id');
    }
}
