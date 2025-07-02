// import { useState } from 'react'
// import './App.css'
// import Navbar from './components/Navigation/Navbar'
// import Header from './components/Navigation/Header'

// function App() {

//   return (
//    <div>
//     <h3>Hello React</h3>
//     < Navbar/>
//     < Header/>
//    </div>
//   )
// }

// export default App


import React from 'react';
import AppRoutes from '../routes/AppRoutes';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Toast from './components/UI/Toast';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
      <Toast />
    </div>
  );
}

export default App;
