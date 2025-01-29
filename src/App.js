import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Pages/Services/Services'
import Reports from './Pages/Reports/Reports'
import UserManagement from './Pages/UserManagment/UserManagment'

import Stamp from './Pages/Stamp/Stamp'
import Barcodes from './Pages/Barcodes/Barcodes'
import Navbar from './Components/Navbar/Navbar' 
 
 

const App = () => {
  return (
    <BrowserRouter>
    <div>  
      <Navbar />
        <Routes>
          <Route path="/" element={<Services />} />   
           
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;

 
 
