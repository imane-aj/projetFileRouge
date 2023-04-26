import './bootstrap';
import { createRoot } from 'react-dom/client'
import '../css/app.css'
import 'tailwindcss/tailwind.css'
import AppCont from './AppCont';
import { Provider } from 'react-redux';
import store from './redux/Store'

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(
    
    <Provider store={store}>
        <AppCont />
    </Provider>
    )
}