<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'name' => ['required','string', 'max:50', 'min:4'],
            'img' => ['required','mimes:jpeg,png,jpg,gif', 'max:2048'],
            'desc' => ['nullable','string', 'max:100', 'min:4'],
            'price' => ['required', 'numeric', 'min:0'],
            // 'address' => ['required', 'string', 'max:255'],
            // 'phone' => ['required', 'string', 'min:10', 'maax:20']
        ];
        // $messages = [
        //     // 'address.required' => 'The address field is required.',
        //     // 'address.max' => 'The address field may not be greater than :max characters.',
        //     // 'phone.required' => 'The phone field is required.',
        //     // 'phone.min' => 'The phone field must be at least :min characters.',
        //     // 'phone.max' => 'The phone field may not be greater than :max characters.',
        // ];
    }
}
