<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CheckoutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();;
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
            'last_name' => ['required','string', 'max:50', 'min:4'],
            'email' => ['required', 'email', 'min:0'],
            'address' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'numeric', 'min:9']
        ];
    }
}
