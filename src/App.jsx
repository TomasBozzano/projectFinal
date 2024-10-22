import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage,
        LoginPage, 
        RegisterPage, 
        ProductsPage, 
        NotFoundPage } from './pages'

function App() {
  return (
    <main className="bg-[#f1f1f1] min-h-screen  ">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </main>

  )
}

export default App
