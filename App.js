import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cuisines from './Components/Cuisines/Cuisines.js';
import Categories from './Components/Categories/Categories.js';
import Subcategories from './Components/Subcategories/Subcategories.js';

function App() {
    return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Cuisines />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/subcategories" element={<Subcategories />} />
            </Routes>
      </BrowserRouter>
            
    );
}

export default App;
