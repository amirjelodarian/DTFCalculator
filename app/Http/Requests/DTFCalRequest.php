<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DTFCalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'film_pet_price' => 'required|numeric',
            'color_price' => 'required|numeric',
            'sugar_price' => 'required|numeric',
        ];
    }
    public function messages()
    {
        return[
            'required' => 'برخی از فیلد ها خالی است !',
            'numeric' => 'مقدار وارد شده مشکلی دارد !',
        ];
    }
}
