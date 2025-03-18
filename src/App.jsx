import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Siderbar'
import Header from './components/Header'
import RecommendedBooks from './components/RecommendedBooks'
import BookDetails from './components/BookDetails'


function App() {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="main-container">
      <Header />
      <div className="content">
        <div className="books-container">
          <RecommendedBooks />
        
        </div>
        <div className="details-container">
          <BookDetails />
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
