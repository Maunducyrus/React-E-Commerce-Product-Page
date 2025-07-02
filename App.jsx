// import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
// import "./styles/main.css";

// function App() {
//   return (
//     <Router>
//       <AppRoutes />
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Navigation/Header';
import Footer from './components/Navigation/Footer';
import Toast from './components/UI/Toast';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
        <Toast />
      </div>
    </Router>
  );
}

export default App;
