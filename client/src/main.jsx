import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// 라우터 적용을 위한 BrowserRouter 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* BrowserRouter로 App 컴포넌트를 감싸서 라우터 적용 */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)