<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            //
            'name' => ['required','string', 'max:50', 'min:4'],
            'img' => ['required','mimes:jpeg,png,jpg,gif', 'max:2048'],
            'desc' => ['nullable', 'string', 'max:100', 'min:4'],
        ];
        // Check if the request is for an update
        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            // Exclude the 'img' field from required validation
            $rules['img'] = ['nullable', 'mimes:jpeg,png,jpg,gif', 'max:2048'];
        } else {
            // Include the 'img' field in required validation for other methods
            $rules['img'] = ['required', 'mimes:jpeg,png,jpg,gif', 'max:2048'];
        }

        return $rules;
        
    }
}
