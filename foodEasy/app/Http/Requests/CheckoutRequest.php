<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
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
            'first_name' => ['required','string', 'max:50', 'min:4'],
            'last_name' => ['required','mimes:jpeg,png,jpg,gif', 'max:2048'],
            'email' => ['required', 'email', 'min:0'],
            'address' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'min:9', 'max:9']
        ];
    }
}
