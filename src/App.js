import React from 'react';

import Header from './components/Header.js';
import EmployeeList from './components/EmployeeList.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <EmployeeList />
      <Footer/>
    </div>
  );
}

export default App;
