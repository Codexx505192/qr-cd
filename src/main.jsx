import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './components/Navigation/Navigation'
import Layut from './Layut'




createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Layut />
</BrowserRouter>,
)
