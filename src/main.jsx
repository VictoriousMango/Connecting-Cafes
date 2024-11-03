import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reducer, { initialState } from './components/Reducer.jsx';
import { StateProvider } from './components/StateProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
)