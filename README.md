# install react in laravel project with vite
## npm install
## npm install react@latest react-dom@latest
## npm i @vitejs/plugin-react --force
## npm i @vitejs/plugin-react-refresh --force
### Update vite.config.js file
import reactRefresh from '@vitejs/plugin-react-refresh';


import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
});

### Create Reactjs Component
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App

### rename and update app.js file in resources folder into app.jsx
import './bootstrap';
import { createRoot } from 'react-dom/client'
import App from './components/App';

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}

### Next, you need add @vite directives welcome.blade.php.
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>How To Install React in Laravel 9 with Vite</title>

   @viteReactRefresh
    @vite('resources/js/app.jsx')

</head>
<body>
	<div id="app"></div>
</body>
</html>

### in the route 
Route::get('{any}', function(){
    return view('welcome');
})->where('any','.*');