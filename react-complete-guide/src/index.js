import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// o arquivo publico index contem a div com id root em seu HTML
// toda a aplicação é renderizada dentro da div com id #root
const root = ReactDOM.createRoot(document.getElementById('root'))

// o metodo render rece como parametro a aplicação que nada mais é 
// do que uma função que retorna o HTML - CSS e Javascrip da aplicação
root.render( <App /> )
