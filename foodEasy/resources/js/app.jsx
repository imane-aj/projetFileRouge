import './bootstrap';
import { createRoot } from 'react-dom/client'
import App from './components/App';

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}