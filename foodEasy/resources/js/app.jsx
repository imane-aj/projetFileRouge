import './bootstrap';
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import 'tailwindcss/tailwind.css'
import AppCont from './AppCont';

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<AppCont />)
}